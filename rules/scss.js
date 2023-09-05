'use strict';

module.exports = {
	// You must disable stylelint's core rule to make this rule work.
	// https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md#at-rule-no-unknown
	'at-rule-no-unknown': null,
	'comment-no-empty': null,
	'no-invalid-position-at-import-rule': [
		true,
		{
			ignoreAtRules: ['use']
		}
	],
	'no-invalid-double-slash-comments': null,
	'scss/selector-no-redundant-nesting-selector': true,
	'scss/at-import-no-partial-leading-underscore': true,
	'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
	'scss/at-else-closing-brace-space-after': 'always-intermediate',
	'scss/at-else-empty-line-before': 'never',
	'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
	'scss/at-if-closing-brace-space-after': 'always-intermediate',
	'scss/at-each-key-value-single-line': true,
	'scss/function-quote-no-quoted-strings-inside': true,
	'scss/function-unquote-no-unquoted-strings-inside': true,
	'scss/at-rule-no-unknown': true,
	'scss/at-extend-no-missing-placeholder': true,
	'scss/at-if-no-null': true,
	'scss/at-import-partial-extension': 'never',
	'scss/at-rule-no-unknown': true,
	'scss/comment-no-empty': true,
	'scss/declaration-nested-properties-no-divided-groups': true,
	'scss/dollar-variable-no-missing-interpolation': true,
	'scss/no-duplicate-mixins': true,
	'scss/no-global-function-names': true,
	'scss/operator-no-newline-after': true,
	'scss/operator-no-newline-before': true,
	'scss/operator-no-unspaced': true
};
