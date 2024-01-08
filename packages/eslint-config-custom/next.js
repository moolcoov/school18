const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: [
		"@vercel/style-guide/eslint/node",
		"@vercel/style-guide/eslint/browser",
		"@vercel/style-guide/eslint/typescript",
		"@vercel/style-guide/eslint/react",
		"@vercel/style-guide/eslint/next",
		"eslint-config-turbo",
	].map(require.resolve),
	parserOptions: {
		project,
	},
	globals: {
		React: true,
		JSX: true,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	ignorePatterns: ["node_modules/", "dist/"],
	// add rules configurations here
	rules: {
		"import/no-default-export": "off",
		"unicorn/filename-case": [
			"error",
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		"@typescript-eslint/no-unsafe-assignment": 0,
		"@typescript-eslint/no-unsafe-call": 0,
		"import/no-extraneous-dependencies": 0,
		"turbo/no-undeclared-env-vars": 0,
		"@typescript-eslint/require-await": 0,
		"@typescript-eslint/no-unsafe-argument": 0,
		"@typescript-eslint/no-unsafe-member-access": 0,
	},
};
