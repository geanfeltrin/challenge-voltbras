const path = require('path')

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testMatch: [
    "**/*.spec.ts"
   ],
}
