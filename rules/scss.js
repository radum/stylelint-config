module.exports = {
	"scss/selector-no-redundant-nesting-selector": true,
	"scss/at-import-no-partial-leading-underscore": true,
	"scss/at-else-closing-brace-newline-after": "always-last-in-chain",
	"scss/at-else-closing-brace-space-after": "always-intermediate",
	"scss/at-else-empty-line-before": "never",
	"scss/at-if-closing-brace-newline-after": "always-last-in-chain",
	"scss/at-if-closing-brace-space-after": "always-intermediate",
	"scss/at-each-key-value-single-line": true,
	"scss/function-quote-no-quoted-strings-inside": true,
	"scss/function-unquote-no-unquoted-strings-inside": true,
	// You must disable stylelint's core rule to make this rule work.
	// https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md#at-rule-no-unknown
	"at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true
};
