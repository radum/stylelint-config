'use strict';

const scss = require('./rules/scss');

module.exports = {
	plugins: ['stylelint-scss'],
	rules: {
		...scss
	}
};
