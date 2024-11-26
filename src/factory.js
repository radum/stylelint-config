import { conventions, possibleErrors } from './configs/index.js';

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
export function radum(options = {}) {
	const {
		scss: enableScss = false
	} = options;

	const stylisticOptions = options.stylistic === false ? false : typeof options.stylistic === 'object' ? options.stylistic : {};

	/** @type {import('stylelint').Config} */
	const config = {
		plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
		rules: {
			...possibleErrors(),
			...conventions()
		}
	};

	if (stylisticOptions) {
		config.plugins.push();
	}

	if (enableScss) {
		config.plugins.push();
	}

	return config;
}
