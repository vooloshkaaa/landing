import jsdoc from "eslint-plugin-jsdoc";

export default [
  {
    files: ["**/*.{js,ts,tsx}"],
    plugins: {
      jsdoc,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        React: true,
        console: true,
        document: true,
        window: true,
      },
    },
    settings: {
      jsdoc: {
        mode: "typescript",
      },
    },
    rules: {
      // Basic JSDoc rules - Documentation enforcement
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
          exemptEmptyFunctions: true,
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
      "jsdoc/no-multi-asterisks": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "docs/**",
      "**/*.stories.tsx",
      "**/*.test.ts",
      "**/*.test.tsx",
    ],
  },
];
