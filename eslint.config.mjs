import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import unicorn from 'eslint-plugin-unicorn'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import prettierConfig from './.prettierrc.cjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
})

export default [
	...compat.extends(
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier'
	),
	{
		plugins: {
			unicorn,
			prettier
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2022,
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		rules: {
			'prettier/prettier': ['error', prettierConfig],

			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-inferrable-types': 'off',
			'prefer-spread': 'off'
		}
	}
]
