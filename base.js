module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['import', 'babel'],
  rules: {
    'no-prototype-builtins': 0,
    'no-unused-vars': 0,
    'babel/new-cap': 0,
    'babel/no-invalid-this': 2,
    'babel/object-curly-spacing': [2, 'always'],
    'babel/quotes': 0,
    'babel/semi': 0,
    'babel/no-unused-expressions': 2,
    'babel/valid-typeof': 0,
    'import/no-unresolved': 2,
    'import/no-mutable-exports': 2,
  },
};
