module.exports = {
  extends: './index.js',
  env: {
    node: true,
  },
  globals: {},
  rules: {
    'jest/no-deprecated-functions': 0,
    'import/no-unresolved': 0,
    'unicorn/prefer-module': 0,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./typescript'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
};
