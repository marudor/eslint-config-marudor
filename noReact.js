const bestPractice = require('./rules/bestPractice');
const errors = require('./rules/errors');
const es6 = require('./rules/es6');
const stylistic = require('./rules/stylistic');
const variables = require('./rules/variables');
const flow = require('./rules/flow');
const classProperty = require('./rules/classProperty');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    es6: true,
  },
  ecmaFeatures: {
    modules: true,
  },
  rules: Object.assign({}, bestPractice, errors, es6, stylistic, variables, flow, classProperty),
  plugins: [
    'flowtype',
    'class-property',
    'import',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
