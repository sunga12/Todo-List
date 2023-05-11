module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/src/__mocks__/fileMock.js"
  }
}