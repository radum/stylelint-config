'use strict';

const scss = require('./rules/scss');

/** @type {import('stylelint').Config} */
module.exports = {
	customSyntax: 'postcss-scss',
	plugins: ['stylelint-scss'],
	rules: {
		...scss
	}
};
