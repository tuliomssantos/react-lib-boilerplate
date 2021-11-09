module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/utils/test-helpers/mocks/styleMock.js',
  },

  transform: {
    '.(ts|tsx)': 'ts-jest',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts|js)?$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
}
