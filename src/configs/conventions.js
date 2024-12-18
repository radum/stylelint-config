// import { pascalCase, kebabCase, camelCase } from './utils';

export function conventions() {
	return {
		'alpha-value-notation': [
			'percentage',
			{
				exceptProperties: [
					'opacity',
					'fill-opacity',
					'flood-opacity',
					'stop-opacity',
					'stroke-opacity'
				]
			}
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment']
			}
		],
		'at-rule-no-vendor-prefix': true,
		'color-function-notation': 'modern',
		'color-hex-length': 'long',
		'comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['stylelint-commands']
			}
		],
		'comment-whitespace-inside': 'always',
		'custom-property-empty-line-before': [
			'always',
			{
				except: ['after-custom-property', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block']
			}
		],
		'custom-media-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: (name) => `Expected custom media query name "${name}" to be kebab-case`
			}
		],
		'custom-property-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message: (name) => `Expected custom property name "${name}" to be kebab-case`
			}
		],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-single-line-max-declarations': 1,
		'declaration-empty-line-before': [
			'always',
			{
				except: ['after-declaration', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block']
			}
		],
		'font-family-name-quotes': 'always-where-recommended',
		'function-name-case': 'lower',
		'function-url-quotes': 'always',
		'hue-degree-notation': 'angle',
		'import-notation': 'url',
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

		// TODO: I'm not sure about this one. To be or not to be?
		// 'keyframes-name-pattern': [
		// 	'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		// 	{
		// 		message: (name) => `Expected keyframe name "${name}" to be kebab-case`
		// 	}
		// ],

		'length-zero-no-unit': [
			true,
			{
				ignore: ['custom-properties']
			}
		],
		'lightness-notation': 'percentage',
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-range-notation': 'context',
		'number-max-precision': 4,
		'property-no-vendor-prefix': true,
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment']
			}
		],
		'selector-attribute-quotes': 'always',

		// Option 1
		'selector-class-pattern': [
			// Loose pattern for hyphenated BEM. This also allows simple words to be used as class names, .e.g. `.active`, `.button`.
			// Based on:
			// - https://github.com/postcss/postcss-bem-linter/issues/89#issuecomment-255482072
			// - https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382
			// See also: https://github.com/simonsmith/stylelint-selector-bem-pattern.
			// Proceed with caution if reviewing this – and use https://regexper.com.
			/^[a-z]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$/,
			{
				resolveNestedSelectors: true,
				message: (selector) => `Expected class selector "${selector}" to be loose pattern for hyphenated BEM.`
			}
		],

		// Option 2
		// 'selector-class-pattern': [
		// 	`^(${pascalCase}|${kebabCase})` // block
		// 	+ `(__(${camelCase}|${kebabCase}))?` // element
		// 	+ `(--(${camelCase}|${kebabCase}))?$`, // modifier
		// 	{
		// 		resolveNestedSelectors: true,
		// 		message: 'Expect class selector to conform to BEM.'
		// 	}
		// ],

		// Option 3
		// 'selector-class-pattern': [
		// 	'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
		// 	{
		// 		message: (selector) => `Expected class selector "${selector}" to be kebab-case`
		// 	}
		// ],

		'selector-id-pattern': [
			/^[a-z]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$/,
			{
				message: (selector) => `Expected id selector "${selector}" to be loose pattern for hyphenated BEM.`
			}
		],

		'selector-no-vendor-prefix': true,
		'selector-not-notation': 'complex',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'shorthand-property-no-redundant-values': true,
		'value-keyword-case': 'lower',
		'value-no-vendor-prefix': [
			true,
			{
				// `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
				ignoreValues: ['box', 'inline-box']
			}
		]
	};
}
