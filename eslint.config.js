import eslint from '@eslint/js'
import eslintConfigGitignore from '@nasa-gcn/eslint-config-gitignore'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import pluginJest from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'
import { readFile } from 'node:fs/promises'
import tseslint from 'typescript-eslint'

// Determine default source type for *.js files from package.json.
const defaultSourceType =
  JSON.parse(await readFile('package.json', { encoding: 'utf8' })).type ??
  'commonjs'

export default defineConfig(
  eslintConfigGitignore,
  eslint.configs.recommended,
  eslintConfigPrettier,
  { files: ['*.cjs'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['*.mjs'], languageOptions: { sourceType: 'module' } },
  {
    files: ['*.js'],
    languageOptions: {
      sourceType: defaultSourceType,
    },
  },
  { files: ['*.ts'], extends: [tseslint.configs.recommended] },
  {
    files: ['test.ts'],
    extends: [pluginJest.configs['flat/recommended']],
  }
)
