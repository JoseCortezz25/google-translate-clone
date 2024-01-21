module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "semi": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "camelcase": [
      "error",
      {
        "allow": [
          "api_url",
          "other_identifier"
        ]
      }
    ],
    "no-unused-vars": "off",
    "comma-dangle": [
      "error",
      {
        "functions": "never"
      }
    ],
    "no-debugger": "off",
    "space-before-function-paren": ["off", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
  },
  "ignorePatterns": [
    "*.cjs"
  ],
  "parser": "@typescript-eslint/parser"
}
