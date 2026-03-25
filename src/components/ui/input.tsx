import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input component with consistent styling and forward ref support
 * 
 * @description A customizable input field component that extends the standard HTML input
 * with consistent styling, proper focus states, and forward ref support. Includes
 * support for file inputs with appropriate styling.
 * 
 * @param {string} [type="text"] - Input type (text, email, password, file, etc.)
 * @param {string} [className] - Additional CSS classes to apply
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Standard input attributes
 * @param {React.Ref<HTMLInputElement>} ref - Forward ref for DOM access
 * 
 * @returns {JSX.Element} - Styled input component
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Input placeholder="Enter your email" type="email" />
 * 
 * // With custom styling
 * <Input className="w-64" placeholder="Password" type="password" />
 * 
 * // File input
 * <Input type="file" accept="image/*" />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
