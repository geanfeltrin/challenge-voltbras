
module.exports = {
  preset: 'ts-jest',
  testMatch: [
    "**/*.spec.ts"
   ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/resolvers/**/*.ts',
    '<rootDir>/src/utils/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text-summary',
    "lcov"
  ]
}
