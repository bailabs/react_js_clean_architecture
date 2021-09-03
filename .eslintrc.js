module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint', 'simple-import-sort', "react-hooks"
    ],
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "camelcase": [2, {"properties": "always"}],
      "sort-imports": "off",
      "import/order": "off",
      "react/forbid-prop-types": "error",
      "react/forbid-foreign-prop-types": "error",
      "react/no-access-state-in-setstate": "error",
      "react/no-array-index-key": "error",
      "react/no-did-mount-set-state": "error",
      "react/no-did-update-set-state": "error",
      "react/no-direct-mutation-state": "error",
      "react/prop-types": "error",
      "react/jsx-no-target-blank": "error",
      "no-useless-computed-key": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "import/extensions": "off",
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  
    },
    settings: {
      "import/resolver": {
        typescript: {}
      },
    },
  };
  
