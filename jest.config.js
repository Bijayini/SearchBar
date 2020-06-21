module.exports = {
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['@testing-library/react', '@testing-library/jest-dom'],
    testPathIgnorePatterns: [
      'node_modules/',
      'src/index.js'
    ],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    },
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary'],
    verbose: true,
    timers: 'fake',
    collectCoverageFrom: [
        'src/**/**/*.(jsx|js)'
    ],
    coverageThreshold: {
        global: {
            statements: 65,
            branches: 50,
            functions: 50,
            lines: 50
        }
    }
};
