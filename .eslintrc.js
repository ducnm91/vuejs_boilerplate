module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended'
    ],
    rules: {
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/script-indent": ["error", 4, {
            "baseIndent": 0,
            "switchCase": 0,
            "ignores": []
        }]
    }
  }