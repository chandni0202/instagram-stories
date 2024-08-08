// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Update this path if necessary
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        // '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
      },
  };
  