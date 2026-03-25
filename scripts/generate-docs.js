#!/usr/bin/env node

/**
 * JSDoc Documentation Generation Script
 * 
 * @description This script generates comprehensive API documentation from JSDoc comments
 * in the TypeScript source files. It uses the jsdoc.json configuration file
 * and outputs formatted HTML documentation to the docs/ directory.
 * 
 * Usage:
 * - Run `npm run docs:generate` to generate documentation
 * - Run `npm run docs:serve` to serve documentation locally
 * 
 * @example
 * ```bash
 * # Generate documentation
 * npm run docs:generate
 * 
 * # Serve documentation locally
 * npm run docs:serve
 * 
 * # Generate and serve in one command
 * npm run docs:generate && npm run docs:serve
 * ```
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DOCS_DIR = './docs';
const CONFIG_FILE = './jsdoc.json';

/**
 * Ensures the documentation directory exists
 */
function ensureDocsDirectory() {
  if (!existsSync(DOCS_DIR)) {
    console.log(`Creating documentation directory: ${DOCS_DIR}`);
    mkdirSync(DOCS_DIR, { recursive: true });
  }
}

/**
 * Validates that required files exist
 */
function validateSetup() {
  if (!existsSync(CONFIG_FILE)) {
    console.error(`❌ JSDoc configuration file not found: ${CONFIG_FILE}`);
    process.exit(1);
  }
  
  if (!existsSync('./src')) {
    console.error('❌ Source directory not found: ./src');
    process.exit(1);
  }
  
  console.log('✅ JSDoc setup validation passed');
}

/**
 * Generates JSDoc documentation
 */
function generateDocs() {
  console.log('🚀 Generating JSDoc documentation...');
  
  try {
    const command = `npx jsdoc -c ${CONFIG_FILE}`;
    console.log(`Running: ${command}`);
    
    execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    console.log('✅ Documentation generated successfully!');
    console.log(`📁 Documentation available in: ${DOCS_DIR}`);
    
  } catch (error) {
    console.error('❌ Failed to generate documentation:', error.message);
    process.exit(1);
  }
}

/**
 * Main execution function
 */
function main() {
  console.log('📚 JSDoc Documentation Generator');
  console.log('=====================================\n');
  
  validateSetup();
  ensureDocsDirectory();
  generateDocs();
  
  console.log('\n🎉 Documentation generation complete!');
  console.log('\nNext steps:');
  console.log('  - Run "npm run docs:serve" to view documentation locally');
  console.log('  - Open docs/index.html in your browser');
  console.log('  - Commit docs/ directory to version control if needed');
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateDocs, ensureDocsDirectory, validateSetup };
