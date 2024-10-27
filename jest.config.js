export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'vue'],
    testMatch: [
      '**/src/**/*.spec.[jt]s?(x)',
      '**/src/**/*.test.[jt]s?(x)'
    ],
    transformIgnorePatterns: ['/node_modules/']
  };
  