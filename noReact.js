const bestPractice = require('./rules/bestPractice');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const stylistic = require('./rules/stylistic');
const variables = require('./rules/variables');
const flow = require('./rules/flow');
const classProperty = require('./rules/classProperty');
const header = require('./rules/header');
const sort = require('./rules/sort');

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  ecmaFeatures: {
    modules: true,
  },
  extends: ['prettier', 'prettier/flowtype'],
  rules: Object.assign(
    {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
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
    flow,
    classProperty,
    header,
    sort
  ),
  plugins: [
    'flowtype',
    'class-property',
    'header',
    'sort-imports-es6-autofix',
    'html',
    'prettier',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
