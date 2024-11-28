import { join, resolve } from 'node:path';
import { execa } from 'execa';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { afterAll, beforeAll, it } from 'vitest';

beforeAll(async () => {
	await fs.rm('_fixtures', { recursive: true, force: true });
});

afterAll(async () => {
	await fs.rm('_fixtures', { recursive: true, force: true });
});

runWithConfig('css', {}, 'css');

runWithConfig('scss', {
	scss: true
}, '(css|scss)');

function runWithConfig(name, configs, fileTypes, ...items) {
	it.concurrent(
		name,
		async ({ expect }) => {
			const from = resolve('fixtures/input');
			const output = resolve('fixtures/output', name);
			const target = resolve('_fixtures', name);

			await fs.copy(from, target, {
				filter: (src) => {
					return !src.includes('node_modules');
				}
			});
			await fs.writeFile(
				join(target, 'stylelint.config.js'),
				`
// @eslint-disable
import radum from '@radum/stylelint-config'

export default radum(
	${JSON.stringify(configs)},
	...${JSON.stringify(items) ?? {}},
)
	`
			);

			const { stderr } = await execa('npx', ['stylelint', `**/*.${fileTypes}`, '--fix', '--formatter=json'], {
				cwd: target,
				stdio: 'pipe',
				reject: false
			});

			const stylelintOutput = JSON.parse(stderr.trim());

			// console.log(JSON.stringify(stylelintOutput[0].warnings, null, 2));
			expect(stylelintOutput[0].errored).toBe(true);
			expect(stylelintOutput[0].warnings.length).toBeGreaterThan(0);

			const files = await fg('**/*', {
				ignore: ['node_modules', 'stylelint.config.js'],
				cwd: target
			});

			await Promise.all(
				files.map(async (file) => {
					const content = await fs.readFile(join(target, file), 'utf-8');
					const source = await fs.readFile(join(from, file), 'utf-8');
					const outputPath = join(output, file);
					if (content === source) {
						if (fs.existsSync(outputPath))
							await fs.remove(outputPath);
						return;
					}
					await expect.soft(content).toMatchFileSnapshot(join(output, file));
				})
			);
		},
		30_000
	);
}
