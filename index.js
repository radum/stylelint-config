const possibleErrors = require('./rules/possible-errors');
const limitLanguageFeatures = require('./rules/limit-language-features');
const stylisticIssues = require('./rules/stylistic-issues');
const scss = require('./rules/scss');
const order = require('./rules/order');

module.exports = {
	plugins: [
		"stylelint-scss",
		"stylelint-order",
		"stylelint-no-unsupported-browser-features"
	],
	rules: {
		...possibleErrors,
		...limitLanguageFeatures,
		...stylisticIssues,
		...scss,
		...order
	}
};
