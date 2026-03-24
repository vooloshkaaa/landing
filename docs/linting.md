# Linting Configuration

## ESLint Setup

This project uses ESLint with TypeScript support and React-specific rules.

### Configuration Files

- **`.prettierrc`**: Prettier configuration for code formatting
- **`eslint.config.ts`**: ESLint configuration with TypeScript, React, and Prettier integration

### Current Rules

#### Prettier Configuration
```json
{
  "singleQuote": true,
  "trailingComma": "es5", 
  "semi": false,
  "tabWidth": 2
}
```

#### ESLint Key Rules
- TypeScript strict mode enabled
- React hooks rules enforced
- Prop-types disabled (TypeScript handles type checking)
- Prettier integration to avoid conflicts

### Common Issues & Fixes

#### 1. Console Logs
- **Issue**: `console.log` statements in production code
- **Fix**: Use `console.debug` for development debugging or remove entirely
- **Status**: ✅ Fixed

#### 2. Unused Variables
- **Issue**: Variables declared but not used
- **Fix**: Remove unused variables or prefix with underscore if intentionally unused
- **Status**: ✅ Fixed

#### 3. Missing Dependencies
- **Issue**: Missing ESLint packages or incorrect versions
- **Fix**: Install correct versions (`@eslint/js@^9.0.0` for ESLint 9.x)
- **Status**: ✅ Fixed

#### 4. React Prop-types
- **Issue**: Missing prop validation for React components
- **Fix**: Disabled rule since TypeScript provides type safety
- **Status**: ✅ Fixed

#### 5. React Hooks Purity
- **Issue**: Impure functions in React components
- **Fix**: Use deterministic approaches instead of `Math.random()`
- **Status**: ✅ Fixed

### Remaining Issues

The following issues remain but are less critical:

#### Storybook Files
- `@typescript-eslint/no-explicit-any`: Storybook typing uses `any` for flexibility
- `react/no-unescaped-entities`: Quotes in JSX text content
- `react-hooks/rules-of-hooks`: Hooks in story render functions

#### UI Components
- `react/no-unknown-property`: Custom properties like `cmdk-input-wrapper`
- `react/jsx-key`: Missing keys in iterators

### Running ESLint

```bash
# Check all TypeScript/TSX files
npx eslint src --ext ts,tsx

# Fix auto-fixable issues
npx eslint src --ext ts,tsx --fix
```

### Integration with Prettier

ESLint is configured to work seamlessly with Prettier through `eslint-config-prettier`, which disables ESLint rules that conflict with Prettier formatting.
