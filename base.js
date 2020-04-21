module.exports = {
  extends: ['eslint:recommended', './babel.js'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['import'],
  rules: {
    'sort-imports': 0,
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'off',
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'block-scoped-var': 'error',
    'block-spacing': 0,
    'brace-style': 0,
    'callback-return': 'error',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 0,
    'comma-style': 0,
    complexity: 0,
    'computed-property-spacing': 0,
    'consistent-return': 'off',
    'consistent-this': 'error',
    curly: 'off',
    'default-case': 0,
    'dot-location': 'off',
    'dot-notation': 'error',
    'eol-last': 0,
    eqeqeq: ['error', 'smart'],
    'func-call-spacing': 0,
    'func-name-matching': 'off',
    'func-names': 'error',
    'func-style': ['off', 'declaration'],
    'generator-star-spacing': 0,
    // "global-require": "error", TODO
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    'import/no-mutable-exports': 'error',
    'import/prefer-default-export': 0,
    'import/first': 'error',
    'import/no-webpack-loader-syntax': 'error',
    indent: [
      'off',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'init-declarations': 'off',
    'jsx-quotes': 0,
    'key-spacing': 0,
    'keyword-spacing': 0,
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': 'error',
    'max-depth': 0,
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'error',
    'max-classes-per-file': 'off',
    'max-lines-per-function': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'off', // handled by babel
    'new-parens': 0,
    'newline-after-var': 'off', // deprecated padding-line-between-statements
    'newline-before-return': 'off', // deprecated padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['var', 'let', 'const'], next: '*' },
      {
        blankLine: 'any',
        prev: ['var', 'let', 'const'],
        next: ['var', 'let', 'const'],
      },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'off',
    'no-console': 'warn',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'off', // "import type" is falsly considered duplicate for normal "import"
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 0,
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-invalid-this': 'off', // handled by babel!
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-spaces': 0,
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 0,
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 0,
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 0,
    'no-sync': 'error',
    'no-tabs': 0,
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'off',
    'no-trailing-spaces': 0,
    'no-undef-init': 'error',
    'no-undef': 'error', // flowtype eslint plugin fixes this!
    'no-undefined': 'off',
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'off', // handled by babel
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 0,
    'no-with': 'error',
    'object-curly-newline': 'off',
    'object-curly-spacing': 0,
    'object-property-newline': 'off',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 0,
    'operator-assignment': 'error',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'off',
    quotes: ['off', 'single'],
    radix: 'error',
    'require-atomic-updates': 0,
    'require-await': 'error',
    'require-jsdoc': 'off',
    'rest-spread-spacing': 0,
    semi: 'off',
    'semi-spacing': 0,
    'sort-keys': 'off',
    'sort-vars': 'error',
    'space-before-blocks': 0,
    'space-before-function-paren': 'off',
    'space-in-parens': 0,
    'space-infix-ops': 0,
    'space-unary-ops': 0,
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    strict: 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 0,
    'unicode-bom': 0,
    'valid-jsdoc': 'off',
    'vars-on-top': 'error',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 0,
    yoda: 'error',
  },
};
