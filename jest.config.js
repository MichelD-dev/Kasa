module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transformIgnorePatterns: [],
  transform: {
    '.*\\.(tsx?|jsx?)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/app/**',
    '!**/assets/**',
    '!**/lcov-report/**',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
    },
  },
}
