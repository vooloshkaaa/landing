# Documentation Generation Guide

This guide covers installing, generating, and updating JSDoc documentation for the project.

## Installation

### Install JSDoc Dependencies
```bash
# Install JSDoc globally
npm install -g jsdoc

# Or install locally for the project
npm install --save-dev jsdoc

# Install additional plugins for enhanced documentation
npm install --save-dev jsdoc-plugin-markdown jsdoc-plugin-summarize

# Install http-server for local documentation serving
npm install --save-dev http-server
```

### Verify Installation
```bash
# Check if JSDoc is installed
jsdoc --version

# Check if configuration file exists
ls -la jsdoc.json

# Verify source files exist
ls -la src/
```

## Generate Documentation

### Quick Start
```bash
# Generate documentation with validation
npm run docs:generate

# Generate documentation using raw JSDoc command
npm run docs:generate:raw

# Generate and serve in one command
npm run docs:generate && npm run docs:serve
```

### Manual Generation
```bash
# Using configuration file
npx jsdoc -c jsdoc.json

# With verbose output for debugging
npx jsdoc -c jsdoc.json --verbose

# Specify custom output directory
npx jsdoc -c jsdoc.json -d ./custom-docs/

# Include private members
npx jsdoc -c jsdoc.json --private
```

### Configuration Options

The `jsdoc.json` configuration includes:

- **Source Files**: `src/**/*.ts`, `src/**/*.tsx`
- **Output Directory**: `./docs/`
- **Exclusions**: Tests, stories, build artifacts
- **Plugins**: Markdown support and summarization
- **Templates**: Clean HTML output with source code

## Update Documentation

### Regenerate After Changes
```bash
# Always regenerate after adding new JSDoc comments
npm run docs:generate

# Watch for changes (requires additional setup)
npm install --save-dev nodemon
nodemon --watch src --ext ts,tsx --exec "npm run docs:generate"
```

### Update Configuration
```bash
# Edit jsdoc.json for custom settings
# Common updates:
# - Change output directory
# - Add/remove source patterns
# - Configure plugins
# - Customize templates

# Example: Change output directory
{
  "opts": {
    "destination": "./documentation/",  // Changed from "./docs/"
    "recurse": true
  }
}
```

### Update JSDoc Comments
```typescript
/**
 * Function description
 * 
 * @param {string} param - Parameter description
 * @returns {string} Return description
 * 
 * @example
 * ```tsx
 * const result = myFunction("test");
 * ```
 */
export function myFunction(param: string): string {
  return param;
}
```

##  Troubleshooting

### Common Issues

#### "Unable to find source file" Error
```bash
# Check if source files exist
find src -name "*.ts" -o -name "*.tsx"

# Verify configuration file
cat jsdoc.json

# Check file permissions
ls -la src/
```

#### "No input files to process" Error
```bash
# Update source patterns in jsdoc.json
{
  "source": {
    "include": ["src/**/*.ts", "src/**/*.tsx"],
    "includePattern": ".+\\.tsx?$"
  }
}

# Use absolute paths
{
  "source": {
    "include": ["./src/**/*.ts", "./src/**/*.tsx"]
  }
}
```

#### Missing Documentation
```bash
# Verify JSDoc syntax
npx jsdoc --help

# Check for syntax errors in comments
# Look for unclosed comments, missing @param, etc.

# Validate TypeScript
npx tsc --noEmit
```

### Debug Generation
```bash
# Generate with debug information
npx jsdoc -c jsdoc.json --debug

# Check configuration validation
node -e "console.log(JSON.stringify(require('./jsdoc.json'), null, 2))"

# Test with single file
npx jsdoc src/lib/utils.ts --destination ./test-docs/
```

##  File Structure

After successful generation, expect this structure:
```
docs/
├── index.html              # Main documentation index
├── fonts/                  # Documentation fonts
├── scripts/                # JavaScript files
├── styles/                 # CSS stylesheets
├── symbols/                # Individual symbol documentation
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
└── global.html             # Global symbols index
```

##  Serve Documentation

### Local Development Server
```bash
# Serve documentation on port 8080
npm run docs:serve

# Custom port
npx http-server docs/ -p 3000

# With CORS enabled
npx http-server docs/ -p 8080 --cors

# Open browser automatically
npx http-server docs/ -p 8080 -o
```

### Production Deployment
```bash
# Deploy to GitHub Pages
npm run docs:generate
git add docs/
git commit -m "Add documentation"
git push origin main

# Deploy to Netlify
npm run docs:generate
netlify deploy --dir=docs --prod

# Deploy to Vercel
npm run docs:generate
vercel --prod docs/
```

##  Documentation Quality

### Before Generating
- [ ] All functions have JSDoc comments
- [ ] Parameters are documented with types
- [ ] Return values are documented
- [ ] Examples are provided
- [ ] TypeScript syntax is correct

### After Generating
- [ ] Documentation loads in browser
- [ ] All modules appear in navigation
- [ ] Examples render correctly
- [ ] Links work properly
- [ ] Search functionality works

##  Automation

### Git Hooks
```bash
# Add pre-commit hook to generate docs
echo '#!/bin/sh
npm run docs:generate
git add docs/
' > .git/hooks/pre-commit

chmod +x .git/hooks/pre-commit
```

### CI/CD Integration
```yaml
# .github/workflows/docs.yml
name: Generate Documentation

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run docs:generate
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

## Additional Resources

- [JSDoc Official Documentation](https://jsdoc.app/)
- [JSDoc Configuration Guide](https://jsdoc.app/about-configuring-jsdoc.html)
- [Markdown in JSDoc](https://jsdoc.app/about-markdown.html)
- [JSDoc Plugins](https://jsdoc.app/plugins/index.html)

---

*For project-specific documentation standards, see the main README.md file.*