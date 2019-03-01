module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],

    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none"
      }
    ],
    "react/forbid-prop-types": [
      "error",
      {
        "forbid": ["any"],
        "checkContextTypes": false,
        "checkChildContextTypes": true
      }
    ],
    "react/jsx-one-expression-per-line": [
      0,
      {
        "allow": "single-child"
      }
    ],
    "semi": ["error", "always"],
    "linebreak-style": ["error", "unix"],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0
      }
    ]

    }
};