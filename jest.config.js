/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['node_modules'],
  globals: { 'ts-jest': { diagnostics: false } },
  transform: {
    '\\.[jt]sx?$': '<rootDir>/jest-babel.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/__tests__/__mocks__/mockSvg.ts',
    'cognito.json': '<rootDir>/cognito.json',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
};
