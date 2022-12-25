module.exports = {
  plugins: ["prettier"],
  extends: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
};
