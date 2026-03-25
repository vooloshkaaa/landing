import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Textarea component with consistent styling and forward ref support
 * 
 * @description A customizable textarea component that extends the standard HTML textarea
 * with consistent styling, proper focus states, and forward ref support. Features
 * a minimum height and responsive text sizing.
 * 
 * @param {string} [className] - Additional CSS classes to apply
 * @param {React.TextareaHTMLAttributes<HTMLTextAreaElement>} props - Standard textarea attributes
 * @param {React.Ref<HTMLTextAreaElement>} ref - Forward ref for DOM access
 * 
 * @returns {JSX.Element} - Styled textarea component
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Textarea placeholder="Enter your message" rows={4} />
 * 
 * // With custom styling
 * <Textarea 
 *   className="min-h-[120px]" 
 *   placeholder="Detailed description..."
 *   maxLength={500}
 * />
 * 
 * // Controlled component
 * const [value, setValue] = useState('');
 * <Textarea 
 *   value={value}
 *   onChange={(e) => setValue(e.target.value)}
 *   placeholder="Type here..."
 * />
 * ```
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
