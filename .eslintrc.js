module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/vue')
  ],
  plugins: ['prettier'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "semi": false,
        "trailingComma": "none",
        "bracketSpacing": true,
        "jsxBracketSameLine": true,
        "insertPragma": true,
        "requirePragma": false
      }
    ]
  }
}