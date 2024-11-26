const fs = require('fs');
const stylelint = require('stylelint');

const validCss = fs.readFileSync('./tests/css-valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./tests/css-invalid.css', 'utf-8');
const validScss = fs.readFileSync('./tests/scss-valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./tests/scss-invalid.scss', 'utf-8');

describe('flags no warnings with valid css', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: validCss,
			config: {
				extends: ['./index.js']
			}
		});
	});

	it('did not error', () => {
		return result.then((data) => expect(data.errored).toBeFalsy());
	});

	it('flags no warnings', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
	});
});

describe('flags warnings with invalid css', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: invalidCss,
			config: {
				extends: ['./index.js']
			}
		});
	});

	it('did error', () => {
		return result.then((data) => expect(data.errored).toBeTruthy());
	});

	it('flags 2 warnings', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(4));
	});

	it('correct warning text', () => {
		return result.then((data) => expect(data.results[0].warnings[0].text).toBe('Unexpected empty block (block-no-empty)'));
	});

	it('correct rule flagged', () => {
		return result.then((data) => expect(data.results[0].warnings[0].rule).toBe('block-no-empty'));
	});

	it('correct severity flagged', () => {
		return result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error'));
	});

	it('correct line number', () => {
		return result.then((data) => expect(data.results[0].warnings[0].line).toBe(7));
	});

	it('correct column number', () => {
		return result.then((data) => expect(data.results[0].warnings[0].column).toBe(8));
	});
});

describe('flags no warnings with valid scss', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: validScss,
			config: {
				extends: ['./index.js', './scss.js'],
				customSyntax: 'postcss-scss'
			}
		});
	});

	it('did not error', () => {
		return result.then((data) => expect(data.errored).toBeFalsy());
	});

	it('flags no warnings', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
	});
});

describe('flags no warnings with invalid scss', () => {
	let result;

	beforeEach(() => {
		result = stylelint.lint({
			code: invalidScss,
			config: {
				extends: ['./index.js', './scss.js'],
				customSyntax: 'postcss-scss'
			}
		});
	});

	it('did error', () => {
		return result.then((data) => expect(data.errored).toBeTruthy());
	});

	it('flags 1 warning', () => {
		return result.then((data) => expect(data.results[0].warnings).toHaveLength(1));
	});
});
