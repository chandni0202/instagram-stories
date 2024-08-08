// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/', ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest'
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
  };
  