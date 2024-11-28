// @ts-check
import { defineConfig } from 'stylelint-define-config';
import radum from './src/index.js';

/// <reference types="@stylelint-types/stylelint-scss">
/// <reference types="@stylelint-types/stylelint-order">
/// <reference types="@stylelint-types/stylistic">

export default radum({
	scss: true
}, defineConfig({
	rules: {
		'property-no-unknown': true
	}
}));

// import { defineConfig } from 'stylelint-define-config';

// export default defineConfig({
// 	extends: './src/index.js'
// });
