const pascalCase = "([A-Z][a-zA-Z0-9]+)"; // PascalCase
const kebabCase = "([a-z][a-z0-9]*(-[a-z0-9]+)*)"; // kebab-case
const camelCase = "([a-z0-9]+([A-Z][a-z0-9]+)*)"; // camelCase

module.exports = {
	"number-max-precision": 6,
	"shorthand-property-no-redundant-values": true,
	"value-no-vendor-prefix": true,
	"property-no-vendor-prefix": true,
	"declaration-block-no-redundant-longhand-properties": true,
	"declaration-no-important": true,
	"declaration-block-single-line-max-declarations": 1,
	"selector-class-pattern": [
		`^(${pascalCase}|${kebabCase})` + // block
		`(__(${camelCase}|${kebabCase}))?` + // element
			`(--(${camelCase}|${kebabCase}))?$`, // modifier
		{
			resolveNestedSelectors: true,
			message:
				"Expect class selector to conform to BEM."
		}
	],
	"selector-max-empty-lines": 0,
	"selector-max-compound-selectors": 4,
	"selector-max-specificity": "0,4,1",
	"selector-no-vendor-prefix": true,
	"at-rule-no-vendor-prefix": true,
	"max-nesting-depth": 3
};
