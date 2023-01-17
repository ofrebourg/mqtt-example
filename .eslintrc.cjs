module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  plugins: ['prettier', 'simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single', { avoidEscape: true }], // only allow single and backtick quotes + double-quotes when the string contains a single-quote
    indent: 'off',
    'no-multi-spaces': ['error'], // avoid useless spaces
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error'
  },
  overrides: [
    {
      files: ['**/*.vue', '**/*.{j,t}s', '**/tests/unit/**/*.spec.{j,t}s'],
      env: {
        jest: true
      }
    }
  ]
}
