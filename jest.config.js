module.exports = {
  name: 'pagarme-ts',
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  roots: ['./src'],
};
