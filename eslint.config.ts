import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      'max-len': [
        'warn',
        { code: 125, ignoreUrls: true, ignoreComments: true },
      ],
    },
  },
  {
    files: ['./**/*.js', './**/*.ts', './**/*.vue'],
    rules: {
      'no-console': 'error',
      'prettier/prettier': 'error', // show Prettier issues as ESLint errors
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase', 'snake_case'],
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'snake_case'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'parameter',
          format: ['camelCase', 'PascalCase', 'snake_case'],
          leadingUnderscore: 'allow', // allow unused parameter, ex.: `_paramname`.
        },
        {
          selector: 'typeLike', // interfaces, types, classes
          format: ['PascalCase'],
        },
        {
          selector: 'enum',
          format: ['UPPER_CASE'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: false, // e.g., disallow `IUser`, prefer `User`
          },
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE'],
          filter: {
            regex: '^[A-Z0-9_]+$',
            match: true,
          },
        },
        {
          selector: 'objectLiteralProperty',
          format: null, // disable naming convention for object literal property keys
        },
      ],
      // VUE RULES
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts',
          },
        },
      ],
      'vue/component-api-style': ['error', ['script-setup']],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
  {
    rules: {
      ...eslintConfigPrettier.rules, // disables ESLint rules that conflict with Prettier
    },
  },
])
