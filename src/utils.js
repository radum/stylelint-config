export const pascalCase = '([A-Z][a-zA-Z0-9]+)'; // PascalCase
export const kebabCase = '([a-z][a-z0-9]*(-[a-z0-9]+)*)'; // kebab-case
export const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)'; // camelCase

/**
 * Merge multiple flat configs into a single flat config.
 *
 * Logic:
 * - plugin, processors, extends, overrides arrays are joined
 * - rules are merged via Object.assign, so there is no attempt made to
 *   merge any given rule's settings. If b contains the same rule as a,
 *   b's rule settings will override a's rule settings entirely.
 * - Everything else is merged via Object.assign
 * - Logic based on `mergeConfigs` function https://github.com/stylelint/stylelint/blob/main/lib/augmentConfig.mjs#L241
 *
 * Note there is no guarantee that the result works the same as the original configs.
 */
export function mergeConfigs(...configs) {
	const keys = new Set(configs.flatMap((i) => Object.keys(i)));
	const merged = configs.reduce((acc, cur) => {
		return {
			...acc,
			...cur,
			plugins: [
				...(acc.plugins || []),
				...(cur.plugins || [])
			],
			processors: [
				...(acc.processors || []),
				...(cur.processors || [])
			],
			overrides: [
				...(acc.overrides || []),
				...(cur.overrides || [])
			],
			extends: [
				...(acc.extends || []),
				...(cur.extends || [])
			],
			rules: {
				...acc.rules,
				...cur.rules
			}
		};
	}, {});

	// Remove unused keys
	for (const key of Object.keys(merged)) {
		if (!keys.has(key))
			delete merged[key];
	}

	return merged;
}
