// VSCode Stylelint extension fails with with Function.Module._resolveFilename error
// if we do not import using the extension for some reason. Until that is fixed
// we will import the rules using the `.js` extension, although looks like a Stylelint issue.
const possibleErrors = require('./rules/possible-errors.js');
const limitLanguageFeatures = require('./rules/limit-language-features.js');
const stylisticIssues = require('./rules/stylistic-issues.js');
const scss = require('./rules/scss.js');

module.exports = {
	plugins: ["stylelint-scss", "stylelint-no-unsupported-browser-features"],
	rules: {
		...possibleErrors,
		...limitLanguageFeatures,
		...stylisticIssues,
		...scss
	}
};
