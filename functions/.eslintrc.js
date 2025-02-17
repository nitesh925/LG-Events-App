module.exports = {
    env: {
      node: true,
      es6: true,
    },
    globals: {
        module: "readonly", // Explicitly define `module` as a global variable
      },
    extends: ["eslint:recommended"],
    rules: {
      "no-undef": "off",
      "no-unused-vars": "warn",
    }
  };
  