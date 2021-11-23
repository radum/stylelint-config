'use strict';

const scss = require('./rules/scss');

module.exports = {
	customSyntax: require('postcss-scss'),
	plugins: ['stylelint-scss'],
	rules: {
		...scss
	}
};
