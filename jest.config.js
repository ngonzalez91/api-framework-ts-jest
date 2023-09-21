module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  globalSetup: '<rootDir>/src/utils/jest/SetUp.ts',
  globalTeardown: '<rootDir>/src/utils/jest/TearDown.ts',
  testTimeout: 130000
}
