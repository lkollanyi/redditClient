module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transform JSX files with Babel
      "^.+\\.css$": "jest-transform-stub"  // Mock CSS imports
    },
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",  // Mock CSS imports with identity-obj-proxy
    },
    testEnvironment: "jest-environment-jsdom", // Simulate a browser-like environment
    setupFilesAfterEnv: ["@testing-library/jest-dom", "./jest.setup.js"], // Custom matchers
    moduleFileExtensions: ["js", "jsx"],
  };