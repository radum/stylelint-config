'use strict';

module.exports = {
	'annotation-no-unknown': true,
	'color-no-invalid-hex': true,
	'font-family-no-duplicate-names': true,
	'font-family-no-missing-generic-family-keyword': true,
	'function-calc-no-unspaced-operator': true,
	'function-linear-gradient-no-nonstandard-direction': true,
	'function-no-unknown': true,
	'string-no-newline': true,
	'unit-no-unknown': true,
	'keyframe-block-no-duplicate-selectors': true,
	'keyframe-declaration-no-important': true,
	'declaration-block-no-duplicate-properties': [
		true,
		{
			ignore: ['consecutive-duplicates-with-different-values']
		}
	],
	'declaration-block-no-duplicate-custom-properties': true,
	'declaration-block-no-shorthand-property-overrides': true,
	'block-no-empty': true,
	'selector-anb-no-unmatchable': true,
	'selector-pseudo-class-no-unknown': true,
	'selector-pseudo-element-no-unknown': true,
	'media-feature-name-no-unknown': true,
	'at-rule-no-unknown': true,
	'comment-no-empty': true,
	'custom-property-no-missing-var-function': true,
	'named-grid-areas-no-invalid': true,
	'no-descending-specificity': true,
	'no-duplicate-at-import-rules': true,
	'no-duplicate-selectors': true,
	'no-empty-source': true,
	'no-invalid-double-slash-comments': true,
	'no-invalid-position-at-import-rule': true,
	'no-irregular-whitespace': true,
	'property-no-unknown': true,
	'selector-type-no-unknown': [
		true,
		{
			ignore: ['custom-elements']
		}
	]
};
