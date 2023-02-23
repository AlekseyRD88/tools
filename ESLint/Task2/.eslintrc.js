module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 2,
    'no-undef': 0,
    'no-cond-assign': 0,
    'no-param-assign': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
};
