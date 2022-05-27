module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [1, 'always', 350],
    'body-max-line-length': [1, 'always', 350],
    'footer-max-line-length': [1, 'always', 350],
  },
}
