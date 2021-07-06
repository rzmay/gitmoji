module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'nonblock-statement-body-position': 'off',
    curly: 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'arrow-body-style': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'newline-per-chained-call': 'off',
    'no-underscore-dangle': 'off',
    'no-alert': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'global-require': 'off',
    'func-names': 'off',
  },
};
