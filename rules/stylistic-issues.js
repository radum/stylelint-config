module.exports = {
	"color-hex-case": "upper",
	"font-family-name-quotes": "always-where-recommended",
	"font-weight-notation": "named-where-possible",
	"function-comma-newline-after": "always-multi-line",
	"function-comma-space-after": "always-single-line",
	"function-comma-space-before": "never",
	"function-max-empty-lines": 0,
	"function-name-case": "lower",
	"function-parentheses-newline-inside": "always-multi-line",
	"function-parentheses-space-inside": "never-single-line",
	"function-url-quotes": "always",
	"function-whitespace-after": "always",
	"number-leading-zero": "always",
	"number-no-trailing-zeros": true,
	"string-quotes": "double",
	"length-zero-no-unit": true,
	"unit-case": "lower",
	"value-list-comma-newline-after": "always-multi-line",
	"value-list-comma-space-after": "always-single-line",
	"value-list-comma-space-before": "never",
	"property-case": "lower",
	"declaration-bang-space-after": "never",
	"declaration-bang-space-before": "always",
	"declaration-colon-newline-after": "always-multi-line",
	"declaration-colon-space-after": "always-single-line",
	"declaration-colon-space-before": "never",
	"declaration-block-semicolon-newline-after": "always-multi-line",
	"declaration-block-semicolon-space-after": "always-single-line",
	"declaration-block-semicolon-space-before": "never",
	"declaration-block-trailing-semicolon": "always",
	"block-closing-brace-newline-after": [
		"always",
		{
			"ignoreAtRules": ["if", "else"]
		}
	],
	"block-closing-brace-newline-before": "always-multi-line",
	"block-closing-brace-space-before": "always-single-line",
	"block-opening-brace-newline-after": "always-multi-line",
	"block-opening-brace-space-after": "always-single-line",
	"block-opening-brace-space-before": "always",
	"selector-combinator-space-after": "always",
	"selector-combinator-space-before": "always",
	"selector-pseudo-element-case": "lower",
	"selector-pseudo-class-case": "lower",
	"selector-pseudo-element-colon-notation": "double",
	"selector-type-case": "lower",
	"selector-list-comma-newline-after": "always",
	"selector-list-comma-space-before": "never",
	"rule-empty-line-before": [
		"always-multi-line",
		{
			except: ["first-nested"],
			ignore: ["after-comment"]
		}
	],
	"media-feature-colon-space-after": "always",
	"media-feature-colon-space-before": "never",
	"media-feature-name-case": "lower",
	"media-feature-parentheses-space-inside": "never",
	"media-feature-range-operator-space-after": "always",
	"media-feature-range-operator-space-before": "always",
	"media-query-list-comma-newline-after": "always-multi-line",
	"media-query-list-comma-newline-before": "never-multi-line",
	"at-rule-empty-line-before":[
		"always",
		{
      		"except": ["blockless-after-blockless", "first-nested"],
      		"ignore": ["after-comment"],
      		"ignoreAtRules": ["else"]
		}
	],
	"at-rule-name-case": "lower",
	"at-rule-name-newline-after": "always-multi-line",
	"at-rule-name-space-after": "always-single-line",
	"at-rule-semicolon-newline-after": "always",
	"at-rule-semicolon-space-before": "never",
	"comment-empty-line-before": [
		"always",
		{
			except: ["first-nested"],
			ignore: ["after-comment", "stylelint-commands"]
		}
	],
	"indentation": "tab",
	"max-empty-lines": 2,
	"max-line-length": [
		156,
		{
			"ignore": ["comments"],
			"ignorePattern": ["/https?:\/\/[0-9,a-z]*.*/"]
		}
	],
	"no-eol-whitespace": true,
	"no-missing-end-of-source-newline": true,
	"no-empty-first-line": true
};
