module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'no-trailing-spaces': 'off',
    'semi': 'off',
    'arrow-parens': 'off',
    'import/newline-after-import': 'off',
    'comma-spacing': 'off',
    'quotes': 'off',
    'object-curly-spacing': 'off',
    'indent': 'off',
    'space-infix-ops': 'off',
    'keyword-spacing': 'off',
    'eqeqeq': 'off',
    'space-before-blocks': 'off',
    'padded-blocks': 'off',
    'no-multiple-empty-lines': 'off',
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
};
