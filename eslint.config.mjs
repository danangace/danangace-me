import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', '.astro', '.claude', 'node_modules']),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: { 'no-console': 'error' },
  },
  prettier,
])
