# 📚 Documentation Generation

This project uses JSDoc to automatically generate comprehensive API documentation from source code comments.

## 🚀 Quick Start

### Generate Documentation
```bash
# Generate documentation with validation and setup
npm run docs:generate

# Generate documentation using raw JSDoc command
npm run docs:generate:raw
```

### Serve Documentation Locally
```bash
# Serve documentation on http://localhost:8080
npm run docs:serve

# Generate and serve in one command
npm run docs:generate && npm run docs:serve
```

## 📁 Configuration Files

### `jsdoc.json`
Main JSDoc configuration file that defines:
- **Source files**: `src/**/*.ts`, `src/**/*.tsx`
- **Output directory**: `./docs/`
- **Exclusions**: Test files, stories, and build artifacts
- **Plugins**: Markdown support and summarization
- **Template options**: Clean, modern documentation layout

### `.jsdocignore`
Files and patterns to exclude from documentation generation:
- Test files (`*.test.ts`, `*.test.tsx`)
- Story files (`*.stories.tsx`)
- Build outputs (`dist/`, `build/`)
- Configuration files
- Node modules

## 📝 Documentation Standards

All functions, components, and utilities must include JSDoc documentation with:

### Required Sections
- **Description** - Clear explanation of purpose
- **Parameters** - All parameters with types and descriptions
- **Returns** - Return type and description
- **Examples** - Practical usage examples with JSX/TSX

### Optional Sections
- **Throws** - Error conditions and handling
- **Since** - Version when feature was introduced
- **See Also** - Related functions or components

## 🎯 Example Documentation

### Function Documentation
```typescript
/**
 * Validates email format using regex pattern
 * 
 * @description Checks if provided string matches a valid email format.
 * Uses comprehensive regex that covers most email formats.
 * 
 * @param {string} email - Email address to validate
 * 
 * @returns {boolean} - True if email is valid, false otherwise
 * 
 * @throws {TypeError} When email is not a string
 * 
 * @example
 * ```tsx
 * function EmailForm() {
 *   const [email, setEmail] = useState('');
 *   const isValid = validateEmail(email);
 *   
 *   return (
 *     <input 
 *       value={email}
 *       onChange={(e) => setEmail(e.target.value)}
 *       className={isValid ? 'border-green' : 'border-red'}
 *     />
 *   );
 * }
 * ```
 */
export function validateEmail(email: string): boolean {
  // implementation
}
```

### Component Documentation
```typescript
/**
 * Button component with multiple variants and sizes
 * 
 * @description A versatile button component that supports different visual styles,
 * sizes, and can be rendered as a different element using asChild prop.
 * 
 * @param {string} [variant="default"] - Visual style of the button
 * @param {string} [size="default"] - Size of the button
 * @param {boolean} [asChild=false] - Whether to render as child element
 * 
 * @returns {JSX.Element} - Styled button component
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Button>Click me</Button>
 * 
 * // With variant and size
 * <Button variant="outline" size="lg">Large Button</Button>
 * 
 * // As link
 * <Button asChild>
 *   <Link href="/about">About</Link>
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // implementation
  }
);
```

## 🔧 Advanced Usage

### Custom Templates
To customize the documentation appearance:
1. Create a custom template directory
2. Update `jsdoc.json` to reference your template
3. Regenerate documentation

### Additional Plugins
Common JSDoc plugins for enhanced documentation:
- `@jsdoc/plugin-markdown` - Enhanced markdown support
- `@jsdoc/plugin-summarize` - Automatic summaries
- `jsdoc-tsimport` - TypeScript import handling

### CI/CD Integration
Add documentation generation to your CI pipeline:
```yaml
# GitHub Actions example
- name: Generate Documentation
  run: |
    npm install
    npm run docs:generate
    
- name: Deploy Documentation
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./docs
```

## 📊 Documentation Output

The generated documentation includes:
- **API Reference**: All documented functions and components
- **Navigation**: Hierarchical structure by module
- **Search**: Full-text search functionality
- **Examples**: Code examples with syntax highlighting
- **Type Information**: Complete TypeScript type definitions
- **Cross-references**: Links between related items

## 🛠️ Troubleshooting

### Common Issues

**Documentation not generating**
```bash
# Check if JSDoc is installed
npm list jsdoc

# Install if missing
npm install --save-dev jsdoc
```

**Missing source files**
```bash
# Verify source directory exists
ls -la src/

# Check configuration
cat jsdoc.json
```

**TypeScript errors**
```bash
# Ensure TypeScript is configured
npx tsc --noEmit

# Check tsconfig.json paths
cat tsconfig.json
```

### Debug Mode
Generate documentation with verbose output:
```bash
npx jsdoc -c jsdoc.json --verbose
```

## 📖 Additional Resources

- [JSDoc Documentation](https://jsdoc.app/)
- [JSDoc Configuration](https://jsdoc.app/about-configuring-jsdoc.html)
- [TypeScript with JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- [Markdown in JSDoc](https://jsdoc.app/about-markdown.html)

---

*For detailed documentation standards and examples, see the main README.md file.*
