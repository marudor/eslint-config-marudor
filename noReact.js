var bestPractice = require('./rules/bestPractice');
var errors = require('./rules/errors');
var es6 = require('./rules/es6');
var stylistic = require('./rules/stylistic');
var variables = require('./rules/variables');
var flow = require('./rules/flow');
var classProperty = require('./rules/classProperty');

module.exports = {
  parser: 'babel-eslint',
  env: {
    'es6': true,
  },
  ecmaFeatures: {
    modules: true
  },
  rules: Object.assign({}, bestPractice, errors, es6, stylistic, variables, flow, classProperty),
  plugins: [
    'flow-vars',
    'class-property'
  ]
}
