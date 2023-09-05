'use strict';

const possibleErrors = require('./rules/possible-errors');
const limitLanguageFeatures = require('./rules/limit-language-features');
const order = require('./rules/order');

module.exports = {
	plugins: [
		"stylelint-order",
		"stylelint-no-unsupported-browser-features"
	],
	rules: {
		...possibleErrors,
		...limitLanguageFeatures,
		...order
	}
};
