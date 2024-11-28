import postcssScss from 'postcss-scss';
import { conventions, order, possibleErrors, scss, stylistic } from './configs/index.js';
import { mergeConfigs } from './utils.js';

/**
 * Generates a Stylelint configuration object based on the provided options and user configurations.
 *
 * @param {object} [options] - Configuration options.
 * @param {boolean} [options.scss] - Enable SCSS support.
 * @param {boolean} [options.order] - Enable order rules.
 * @param {boolean | object} [options.stylistic] - Enable stylistic rules or provide specific stylistic options.
 * @param {...object} userConfigs - Additional user configurations to merge with the default configuration.
 * @returns {import('stylelint').Config} - The generated Stylelint configuration object.
 */
export function radum(options = {}, ...userConfigs) {
	const {
		scss: enableScss = false,
		order: enableOrder = false
	} = options;

	const stylisticOptions = options.stylistic === false ? false : typeof options.stylistic === 'object' ? options.stylistic : {};

	/** @type {import('stylelint').Config} */
	const defaultConfig = {
		plugins: ['stylelint-no-unsupported-browser-features'],
		rules: {
			'plugin/no-unsupported-browser-features': [true, {
				severity: 'warning'
			}],
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
			// Doiuse and this plugin are only compatible with standard css syntax,
			// so syntaxes like scss, less and others aren't supported.
			// So we are disabling the plugin for the css-nesting feature.
			// TODO: Explore using: https://stylelint.io/user-guide/configure/#overrides
			'plugin/no-unsupported-browser-features': [true, {
				ignore: ['css-nesting'],
				severity: 'warning'
			}],
			...scss()
		};
	}

	if (enableOrder) {
		defaultConfig.plugins.push('stylelint-order');
		defaultConfig.rules = {
			...defaultConfig.rules,
			...order()
		};
	}

	const composer = mergeConfigs(defaultConfig, ...userConfigs);

	return composer;
}
