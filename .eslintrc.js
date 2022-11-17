module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    semi: [
      "error",
      "always",
    ],
    linebreak-style: ["error", "windows"],
    quotes: [
      "error",
      "double",
    ],
  },
};
