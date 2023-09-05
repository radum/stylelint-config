'use strict';

const possibleErrors = require('./rules/possible-errors');
const limitLanguageFeatures = require('./rules/limit-language-features');
// Deprecated rules
// const stylisticIssues = require('./rules/stylistic-issues');
const order = require('./rules/order');

module.exports = {
	plugins: [
		"stylelint-order",
		"stylelint-no-unsupported-browser-features"
	],
	rules: {
		...possibleErrors,
		...limitLanguageFeatures,
		// Deprecated rules
		// ...stylisticIssues,
		...order
	}
};
