export function stylistic(options = {}) {
	const { stylistic = true } = options;
	const { indent = 'tab', quotes = 'double' } = typeof stylistic === 'boolean' ? {} : stylistic;

	return {
		'@stylistic/at-rule-name-case': 'lower',
		'@stylistic/at-rule-name-space-after': 'always-single-line',
		'@stylistic/at-rule-semicolon-newline-after': 'always',
		'@stylistic/block-closing-brace-empty-line-before': 'never',
		'@stylistic/block-closing-brace-newline-after': 'always',
		'@stylistic/block-closing-brace-newline-before': 'always-multi-line',
		'@stylistic/block-closing-brace-space-before': 'always-single-line',
		'@stylistic/block-opening-brace-newline-after': 'always-multi-line',
		'@stylistic/block-opening-brace-space-after': 'always-single-line',
		'@stylistic/block-opening-brace-space-before': 'always',
		'@stylistic/color-hex-case': 'lower',
		'@stylistic/declaration-bang-space-after': 'never',
		'@stylistic/declaration-bang-space-before': 'always',
		'@stylistic/declaration-block-semicolon-newline-after': 'always-multi-line',
		'@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
		'@stylistic/declaration-block-semicolon-space-before': 'never',
		'@stylistic/declaration-block-trailing-semicolon': 'always',
		'@stylistic/declaration-colon-newline-after': 'always-multi-line',
		'@stylistic/declaration-colon-space-after': 'always-single-line',
		'@stylistic/declaration-colon-space-before': 'never',
		'@stylistic/function-comma-newline-after': 'always-multi-line',
		'@stylistic/function-comma-space-after': 'always-single-line',
		'@stylistic/function-comma-space-before': 'never',
		'@stylistic/function-max-empty-lines': 0,
		'@stylistic/function-parentheses-newline-inside': 'always-multi-line',
		'@stylistic/function-parentheses-space-inside': 'never-single-line',
		'@stylistic/function-whitespace-after': 'always',
		'@stylistic/indentation': indent,
		'@stylistic/max-empty-lines': 1,
		'@stylistic/max-line-length': 120,
		'@stylistic/media-feature-colon-space-after': 'always',
		'@stylistic/media-feature-colon-space-before': 'never',
		'@stylistic/media-feature-name-case': 'lower',
		'@stylistic/media-feature-parentheses-space-inside': 'never',
		'@stylistic/media-feature-range-operator-space-after': 'always',
		'@stylistic/media-feature-range-operator-space-before': 'always',
		'@stylistic/media-query-list-comma-newline-after': 'always-multi-line',
		'@stylistic/media-query-list-comma-space-after': 'always-single-line',
		'@stylistic/media-query-list-comma-space-before': 'never',
		'@stylistic/no-empty-first-line': true,
		'@stylistic/no-eol-whitespace': true,
		'@stylistic/no-extra-semicolons': true,
		'@stylistic/no-missing-end-of-source-newline': true,
		'@stylistic/number-leading-zero': 'always',
		'@stylistic/number-no-trailing-zeros': true,
		'@stylistic/property-case': 'lower',
		'@stylistic/selector-attribute-brackets-space-inside': 'never',
		'@stylistic/selector-attribute-operator-space-after': 'never',
		'@stylistic/selector-attribute-operator-space-before': 'never',
		'@stylistic/selector-combinator-space-after': 'always',
		'@stylistic/selector-combinator-space-before': 'always',
		'@stylistic/selector-descendant-combinator-no-non-space': true,
		'@stylistic/selector-list-comma-newline-after': 'always',
		'@stylistic/selector-list-comma-space-before': 'never',
		'@stylistic/selector-max-empty-lines': 0,
		'@stylistic/selector-pseudo-class-case': 'lower',
		'@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
		'@stylistic/selector-pseudo-element-case': 'lower',
		'@stylistic/string-quotes': quotes,
		'@stylistic/unit-case': 'lower',
		'@stylistic/value-list-comma-newline-after': 'always-multi-line',
		'@stylistic/value-list-comma-space-after': 'always-single-line',
		'@stylistic/value-list-comma-space-before': 'never',
		'@stylistic/value-list-max-empty-lines': 0
	};
}
