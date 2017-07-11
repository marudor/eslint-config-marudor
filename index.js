const bestPractice = require('./rules/bestPractice');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const stylistic = require('./rules/stylistic');
const variables = require('./rules/variables');
const react = require('./rules/react');
const flow = require('./rules/flow');
const classProperty = require('./rules/classProperty');
const header = require('./rules/header');
const sort = require('./rules/sort');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  extends: ['prettier', 'prettier/flowtype', 'prettier/react'],
  rules: Object.assign(
    {
      'prettier/prettier': [
        'error',
        {
          printWidth: 120,
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          trailingComma: 'es5',
          jsxBracketSameLine: true,
        },
      ],
    },
    bestPractice,
    errors,
    es6,
    stylistic,
    variables,
    react,
    flow,
    classProperty,
    header,
    sort
  ),
  plugins: ['react', 'flowtype', 'class-property', 'header', 'sort-imports-es6-autofix', 'html', 'prettier'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
