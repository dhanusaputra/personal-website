import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';
import cypress from 'eslint-plugin-cypress';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', '**/build', '**/cypress'],
  },
  ...compat.extends('eslint:recommended', 'plugin:react/recommended'),
  {
    plugins: {
      react,
      jest,
      cypress,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...jest.environments.globals.globals,
        ...cypress.environments.globals.globals,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],

      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'no-console': 0,
      'react/prop-types': 0,
    },
  },
];
