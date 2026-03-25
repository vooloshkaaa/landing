import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes intelligently
 * 
 * @description Combines class names using clsx for conditional classes and tailwind-merge
 * to handle Tailwind CSS class conflicts. This ensures that conflicting Tailwind classes
 * are properly resolved with the correct precedence.
 * 
 * @param {...ClassValue} inputs - Class names, objects, or arrays to be merged
 * @returns {string} - Merged class name string with conflicts resolved
 * 
 * @example
 * ```tsx
 * // Basic usage
 * cn("px-4 py-2", "bg-blue-500")
 * // Returns: "px-4 py-2 bg-blue-500"
 * 
 * // With conditional classes
 * cn("base-class", {
 *   "text-red-500": hasError,
 *   "text-green-500": !hasError
 * })
 * // Returns: "base-class text-red-500" when hasError is true
 * 
 * // With conflicting classes (tailwind-merge resolves conflicts)
 * cn("p-4", "p-2")
 * // Returns: "p-2" (last one wins)
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
