'use strict';

module.exports = {
	'selector-class-pattern': [
		`^(${pascalCase}|${kebabCase})` + // block
			`(__(${camelCase}|${kebabCase}))?` + // element
			`(--(${camelCase}|${kebabCase}))?$`, // modifier
		{
			resolveNestedSelectors: true,
			message: 'Expect class selector to conform to BEM.'
		}
	]
};
