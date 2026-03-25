module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsdoc",
  ],
  rules: {
    // React rules
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    
    // React Hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    
    // TypeScript rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    
    // JSDoc rules - Documentation enforcement
    "jsdoc/require-description": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-returns-description": "error",
    "jsdoc/require-example": "warn",
    "jsdoc/require-jsdoc": [
      "error",
      {
        contexts: [
          "FunctionDeclaration",
          "ClassDeclaration",
          "MethodDefinition",
          "ArrowFunctionExpression",
          "FunctionExpression",
          "TSDeclareFunction",
          "TSEmptyBodyFunctionExpression",
          "TSMethodSignature",
          "ClassProperty",
          "TSPropertySignature",
          "VariableDeclaration",
        ],
        require: {
          FunctionDeclaration: true,
          ClassDeclaration: true,
          MethodDefinition: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
        checkConstructors: false,
        checkGetters: false,
        checkSetters: false,
        checkProperties: false,
        exemptEmptyFunctions: true,
        private: true,
        protected: true,
        public: true,
      },
    ],
    "jsdoc/require-param": "error",
    "jsdoc/require-returns": "error",
    "jsdoc/require-param-type": "off", // TypeScript handles this
    "jsdoc/require-returns-type": "off", // TypeScript handles this
    "jsdoc/valid-types": "error",
    "jsdoc/sort-tags": "warn",
    "jsdoc/no-types": "off", // Allow types in JSDoc for clarity
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/multiline-blocks": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-multi-asterisks": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    jsdoc: {
      mode: "typescript",
    },
  },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "docs/",
    "**/*.stories.tsx",
    "**/*.test.ts",
    "**/*.test.tsx",
  ],
};
