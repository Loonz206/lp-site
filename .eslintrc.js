module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:cypress/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "prettier", "jsx-a11y", "sonarjs"],
  rules: {
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.spec.*",
          "**/*.test.*",
          "jest*.js",
          "jest.config.js",
          "jest-preprocess.js",
          "cypress.config.js",
          "cypress/**"
        ]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
