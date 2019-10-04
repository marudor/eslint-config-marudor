module.exports = {
  extends: ['plugin:import/typescript', 'prettier/@typescript-eslint'],
  overrides: [
    {
      rules: {
        'no-use-before-define': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/array-type': 2,
      },
      plugins: ['@typescript-eslint'],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: './',
      },
    },
  ],
};
