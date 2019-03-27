module.exports = {
	clearMocks: true,
	collectCoverage: false,
	coverageDirectory: "./.coverage/",
	coverageReporters: ["lcov", "text-summary"],
	coverageThreshold: {
		global: {
			branches: 75,
			functions: 75,
			lines: 75,
			statements: 75
		}
	},
	moduleFileExtensions: ["js", "json", "jsx", "node"],
	testEnvironment: "node",
	testMatch: ["**/?(*.)(spec|test).js"],
	verbose: true
};
