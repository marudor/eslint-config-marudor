const bestPractice = require('./rules/bestPractice');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const stylistic = require('./rules/stylistic');
const variables = require('./rules/variables');
const react = require('./rules/react');
const flow = require('./rules/flow');
const classProperty = require('./rules/classProperty');
const imports = require('./rules/import');

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  ecmaFeatures: {
    jsx: true,
    modules: true,
  },
  rules: Object.assign({}, bestPractice, errors, es6, stylistic, variables, react, flow, classProperty, imports),
  plugins: [
    'react',
    'flow-vars',
    'class-property',
    'import',
  ],
};
