'use strict';

const pascalCase = '([A-Z][a-zA-Z0-9]+)'; // PascalCase
const kebabCase = '([a-z][a-z0-9]*(-[a-z0-9]+)*)'; // kebab-case
const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)'; // camelCase

module.exports = {
	'number-max-precision': 6,
	'shorthand-property-no-redundant-values': true,
	'value-no-vendor-prefix': [
		true,
		{
			// `-webkit-box` is allowed as standard. See https://www.w3.org/TR/css-overflow-3/#webkit-line-clamp
			ignoreValues: ['box', 'inline-box']
		}
	],
	'property-no-vendor-prefix': true,
	'declaration-block-no-redundant-longhand-properties': true,
	'declaration-no-important': true,
	'declaration-block-single-line-max-declarations': 1,
	'selector-max-compound-selectors': 4,
	'selector-max-specificity': '0,4,1',
	'selector-no-vendor-prefix': true,
	'selector-not-notation': 'complex',
	'selector-pseudo-element-colon-notation': 'double',
	'selector-type-case': 'lower',
	'value-keyword-case': 'lower',

	'at-rule-no-vendor-prefix': true,
	'max-nesting-depth': 3,
	'alpha-value-notation': [
		'percentage',
		{
			exceptProperties: ['opacity', 'fill-opacity', 'flood-opacity', 'stop-opacity', 'stroke-opacity']
		}
	],
	'at-rule-empty-line-before': [
		'always',
		{
			except: ['blockless-after-same-name-blockless', 'first-nested'],
			ignore: ['after-comment']
		}
	],
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
	'length-zero-no-unit': [
		true,
		{
			ignore: ['custom-properties']
		}
	],
	'media-feature-name-no-vendor-prefix': true,
	'selector-attribute-quotes': 'always'
};
