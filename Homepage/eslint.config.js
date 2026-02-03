import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...vuePlugin.configs['flat/essential'],
  prettierConfig,
  {
    files: ['**/*.{js,cjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        __statics: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'vue': vuePlugin
    },
    rules: {
      'prefer-promise-reject-errors': 'off',
      quotes: ['warn', 'single', { avoidEscape: true }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  },
  {
    files: ['**/*.cjs', 'quasar.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        process: 'readonly'
      }
    }
  },
  {
    ignores: [
      'dist/**',
      '.quasar/**',
      'node_modules/**',
      'src-capacitor/**',
      'src-cordova/**',
      '.git/**',
      '.eslintrc.cjs'
    ]
  }
];
