module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/**/*.js'],
  setupFilesAfterEnv: [require.resolve('./setup-tests.js')],
  collectCoverageFrom: [
    '**/components/**/*.js',
    '**/containers/**/*.js',
    '**/store/actions/*.js',
    '**/store/reducers/*.js',
    '**/services/*.js',
    '!**/pages/**',
    '!**/utils/**',
    '!**/__tests__/**',
    '!**/node_modules/**'
  ]
};
