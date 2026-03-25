# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 📚 Documentation Standards

This project follows comprehensive documentation standards to ensure code clarity, maintainability, and developer experience.

### 🎯 Documentation Requirements

All functions, components, and utilities must include JSDoc documentation with the following sections:

#### **Required Sections**
- **Description** - Clear explanation of purpose and functionality
- **Parameters** - All parameters with types, descriptions, and optional status
- **Returns** - Return type and description
- **Examples** - Practical usage examples with JSX/TSX code

#### **Optional Sections**
- **Throws** - Error conditions and handling
- **Since** - Version when feature was introduced
- **See Also** - Related functions or components

### 📝 How to Document Code

#### **Functions and Hooks**
```typescript
/**
 * Brief one-line summary of the function
 * 
 * @description Detailed explanation of what the function does,
 * including any important implementation details or side effects.
 * 
 * @param {string} paramName - Description of parameter purpose
 * @param {number} [optionalParam] - Optional parameter with default behavior
 * 
 * @returns {ReturnType} Description of what the function returns
 * 
 * @throws {ErrorType} When and why this function might throw
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const result = useMyHook(param1, param2);
 *   return <div>{result}</div>;
 * }
 * ```
 */
export function myFunction(paramName: string, optionalParam?: number): ReturnType {
  // implementation
}
```

#### **React Components**
```typescript
/**
 * Component brief description
 * 
 * @description Detailed explanation of component purpose, behavior,
 * and any special features or considerations.
 * 
 * @param {string} [propName="default"] - Description of prop purpose
 * @param {boolean} [asChild=false] - Whether to render as child element
 * @param {string} [className] - Additional CSS classes to apply
 * @param {React.Ref<HTMLDivElement>} ref - Forward ref for DOM access
 * 
 * @returns {JSX.Element} - Rendered component
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <MyComponent propName="value" />
 * 
 * // With custom styling
 * <MyComponent 
 *   propName="value" 
 *   className="custom-class"
 * />
 * 
 * // As child (for composition)
 * <MyComponent asChild>
 *   <AnotherComponent />
 * </MyComponent>
 * ```
 */
interface MyComponentProps {
  propName?: string;
  asChild?: boolean;
  className?: string;
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ propName = "default", asChild = false, className, ...props }, ref) => {
    // implementation
  }
);
```

#### **Utility Functions**
```typescript
/**
 * Utility function description
 * 
 * @description Explanation of what the utility does and any
 * special considerations for its usage.
 * 
 * @param {...ClassValue} inputs - Variable number of class values to merge
 * 
 * @returns {string} - Merged and processed result
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn("base-class", "additional-class");
 * 
 * // With conditional classes
 * cn("base-class", {
 *   "conditional-class": condition,
 *   "another-class": anotherCondition
 * });
 * 
 * // With arrays
 * cn("base-class", ["class1", "class2"]);
 * ```
 */
export function utilityFunction(...inputs: ClassValue[]): string {
  // implementation
}
```

### 🎨 Examples and Best Practices

#### **Example Quality Standards**
- ✅ **Realistic scenarios** - Use practical, not theoretical examples
- ✅ **Complete examples** - Show imports, props, and usage context
- ✅ **Multiple variations** - Demonstrate different use cases
- ✅ **TypeScript syntax** - Use proper TSX with type annotations
- ✅ **Self-contained** - Examples should work independently

#### **Documentation Examples**

**Good Example:**
```typescript
/**
 * Validates email format using regex pattern
 * 
 * @description Checks if the provided string matches a valid email format.
 * Uses comprehensive regex that covers most email formats including
 * subdomains and special characters.
 * 
 * @param {string} email - Email address to validate
 * 
 * @returns {boolean} - True if email is valid, false otherwise
 * 
 * @example
 * ```tsx
 * function EmailForm() {
 *   const [email, setEmail] = useState('');
 *   const isValid = validateEmail(email);
 *   
 *   return (
 *     <div>
 *       <input 
 *         value={email}
 *         onChange={(e) => setEmail(e.target.value)}
 *         className={isValid ? 'border-green' : 'border-red'}
 *       />
 *       {email && !isValid && (
 *         <span className="error-text">Invalid email format</span>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```

**Poor Example:**
```typescript
// Validates email
export function validateEmail(email: string): boolean {
  return email.includes('@');
}
```

### 🔍 Documentation Review Checklist

Before submitting code, ensure documentation meets these criteria:

#### **Content Quality**
- [ ] Description explains *what* and *why*
- [ ] All parameters documented with types
- [ ] Return value clearly documented
- [ ] Examples demonstrate real usage patterns
- [ ] Error conditions documented (if applicable)

#### **Format Standards**
- [ ] Proper JSDoc syntax (`/** */`)
- [ ] Consistent parameter formatting
- [ ] TypeScript types in examples
- [ ] Code blocks with language specification
- [ ] No trailing whitespace in examples

#### **Technical Accuracy**
- [ ] Parameter types match implementation
- [ ] Return type is correct
- [ ] Examples actually work
- [ ] Edge cases considered
- [ ] Performance implications noted

### 🛠️ Documentation Tools

- **ESLint**: Configured to enforce documentation standards
- **TypeScript**: Provides type checking and IntelliSense
- **JSDoc**: Standard format for API documentation
- **VS Code**: Enhanced with IntelliSense from JSDoc

### 📖 Additional Resources

- [JSDoc Documentation](https://jsdoc.app/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Documentation Patterns](https://react.dev/learn/thinking-in-react)

---

*Following these standards ensures our codebase remains maintainable, accessible, and easy for new developers to understand.*
