'use strict';

const scss = require('./rules/scss');

module.exports = {
	customSyntax: 'postcss-scss',
	plugins: ['stylelint-scss'],
	rules: {
		...scss
	}
};
