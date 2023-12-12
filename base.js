module.exports = {
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'no-prototype-builtins': 0,
    'no-unused-vars': 0,
    'import/no-unresolved': 2,
    'import/no-mutable-exports': 2,
  },
};
