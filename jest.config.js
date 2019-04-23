module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/**/*.js'],
  setupFilesAfterEnv: [require.resolve('./setup-tests.js')],
  collectCoverageFrom: [
    '**/components/**/*.js',
    '**/pages/**/*.js',
    '!**/utils/**',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ]
};
