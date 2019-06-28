module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
  },
};
