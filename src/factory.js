import postcssScss from 'postcss-scss';
import { conventions, possibleErrors, scss, stylistic } from './configs/index.js';
import { mergeConfigs } from './utils.js';

/**
 * Generates a Stylelint configuration object based on the provided options.
 *
 * @param {object} options - The options to configure the Stylelint configuration.
 * @param {boolean} [options.scss] - Whether to enable SCSS support.
 * @param {boolean | object} [options.stylistic] - Stylistic options for the configuration.
 * If false, stylistic rules are disabled. If an object, it contains specific stylistic rules.
 *
 * @returns {import('stylelint').Config} The generated Stylelint configuration object.
 */
export function radum(options = {}, ...userConfigs) {
	const {
		scss: enableScss = false
	} = options;

	const stylisticOptions = options.stylistic === false ? false : typeof options.stylistic === 'object' ? options.stylistic : {};

	/** @type {import('stylelint').Config} */
	const defaultConfig = {
		plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
		rules: {
			...possibleErrors(),
			...conventions()
		}
	};

	if (stylisticOptions) {
		defaultConfig.plugins.push('@stylistic/stylelint-plugin');
		defaultConfig.rules = {
			...defaultConfig.rules,
			...stylistic({
				stylistic: stylisticOptions
			})
		};
	}

	if (enableScss) {
		defaultConfig.plugins.push('stylelint-scss');
		defaultConfig.customSyntax = postcssScss;
		defaultConfig.rules = {
			...defaultConfig.rules,
			...scss(stylisticOptions)
		};
	}

	const composer = mergeConfigs(defaultConfig, ...userConfigs);

	return composer;
}
