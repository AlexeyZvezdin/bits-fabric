module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "warn",
    "func-names": "off",
    "prefer-const": 1,
    "dot-notation": 1,
    "prefer-destructuring": 1,
    allowTemplateLiterals: 0,
    quotes: [1, "single", { avoidEscape: true }],
    "prettier/prettier": [1, { singleQuote: true }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
