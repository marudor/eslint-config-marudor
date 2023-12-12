module.exports = {
  extends: ['plugin:import/typescript'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      rules: {
        'no-use-before-define': 0,
        '@typescript-eslint/array-type': 2,
        '@typescript-eslint/consistent-type-imports': 2,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-unsafe-member-access': 0,
        '@typescript-eslint/no-unsafe-call': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unsafe-return': 0,
        '@typescript-eslint/restrict-template-expressions': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/ban-tslint-comment': 0,
        '@typescript-eslint/explicit-module-boundary-types': [
          2,
          {
            allowArgumentsExplicitlyTypedAsAny: true,
          },
        ],
      },
      plugins: ['@typescript-eslint'],
      files: ['**/*.ts', '**/*.tsx'],
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
};
