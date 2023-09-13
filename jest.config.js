 module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      babelConfig: 'babel.config.json',
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
    },
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: ['(/tests/.*.(test|spec)).tsx?$'],
  testPathIgnorePatterns: ['/node_modules/'],
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
  transformIgnorePatterns: ['node_modules/(?!(rc-))'],
  testTimeout: 15000,
}
