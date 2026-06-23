import { camelCase } from './../utils.js';

export function scss() {
	return {
		'annotation-no-unknown': null,
		'at-rule-descriptor-no-unknown': null,
		'at-rule-descriptor-value-no-unknown': null,
		'at-rule-no-unknown': null,
		'at-rule-prelude-no-invalid': null,
		'color-no-invalid-hex': true,
		'comment-no-empty': null,
		'declaration-property-value-no-unknown': null,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-no-unknown': null,
		'media-feature-name-value-no-unknown': null,
		'media-query-no-invalid': null,
		'nesting-selector-no-missing-scoping-root': [
			true,
			{
				ignoreAtRules: ['mixin']
			}
		],
		'no-descending-specificity': null,
		'no-duplicate-selectors': null,
		'no-invalid-position-at-import-rule': [
			true,
			{
				ignoreAtRules: ['use', 'forward']
			}
		],
		'no-invalid-position-declaration': [
			true,
			{
				ignoreAtRules: ['mixin']
			}
		],
		'string-no-newline': true,
		'unit-no-unknown': true,
		'scss/at-extend-no-missing-placeholder': true,
		'scss/at-if-no-null': true,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'variants',
					'responsive',
					'screen',
					'layer',
					'unocss'
				]
			}
		],
		'scss/no-duplicate-load-rules': true,
		'scss/comment-no-empty': true,
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/function-quote-no-quoted-strings-inside': true,
		'scss/function-unquote-no-unquoted-strings-inside': true,
		'scss/load-no-partial-leading-underscore': true,
		'scss/load-partial-extension': 'never',
		'scss/no-duplicate-mixins': true,
		'scss/no-global-function-names': true,
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-blockless', 'first-nested'],
				ignore: ['after-comment'],
				ignoreAtRules: ['else']
			}
		],
		'import-notation': 'string',
		'length-zero-no-unit': [
			true,
			{
				ignore: ['custom-properties'],
				ignorePreludeOfAtRules: ['function', 'mixin']
			}
		],
		'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-else-if-parentheses-space-before': 'always',
		'scss/at-function-parentheses-space-before': 'never',

		// Option 1
		'scss/at-function-pattern': [
			`^${camelCase}*$`,
			{
				message: (name) =>
					`Expected function name "${name}" to be camelCase`
			}
		],

		// Option 2
		// 'scss/at-function-pattern': [
		// 	'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		// 	{
		// 		message: 'Expected function name to be kebab-case'
		// 	}
		// ],

		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/at-mixin-argumentless-call-parentheses': 'always',
		'scss/at-mixin-parentheses-space-before': 'never',
		'scss/at-mixin-pattern': [
			'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: (name) =>
					`Expected mixin name "${name}" to be kebab-case`
			}
		],
		'scss/at-rule-conditional-no-parentheses': null,
		'scss/dollar-variable-colon-space-after': 'always-single-line',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': [
			'always',
			{
				except: ['after-dollar-variable', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block']
			}
		],

		// 'scss/dollar-variable-pattern': [
		// 	'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		// 	{
		// 		message: (name) => `Expected variable name "${name}" to be kebab-case`,
		// 	}
		// ],

		'scss/double-slash-comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['between-comments', 'stylelint-commands']
			}
		],
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/percent-placeholder-pattern': [
			'^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: (name) =>
					`Expected placeholder name "${name}" to be kebab-case`
			}
		]
	};
}
