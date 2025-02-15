module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Transform JSX files with Babel
    },
    testEnvironment: "jest-environment-jsdom", // Simulate a browser-like environment
    setupFilesAfterEnv: ["@testing-library/jest-dom"], // Custom matchers
    moduleFileExtensions: ["js", "jsx"],
  };