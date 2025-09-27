module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Add any project-specific rules here
    },
  },
];