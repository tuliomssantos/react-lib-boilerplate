module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/utils/test-helpers/mocks/styleMock.js',
  },

  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts|js)?$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}
