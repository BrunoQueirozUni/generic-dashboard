import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary hover:bg-primary/80",
        red:
          "cursor-pointer bg-red-500 hover:bg-red-700",
        green:
          "cursor-pointer bg-green-500 hover:bg-green-600 text-white",
        gray:
          "cursor-pointer bg-transparent border border-gray-700 hover:bg-gray-600 text-white",
        white:
          "text-black bg-white hover:bg-gray-300 cursor-pointer",
        transparent:
          "bg-transparent",
        popover:
          "bg-transparent text-white hover:bg-gray-700/50 cursor-pointer",
        link:
          "bg-transparent underline-offset-4 hover:underline text-primary cursor-pointer",
        "link-blue":
          "bg-transparent underline-offset-4 hover:underline text-blue-500 cursor-pointer",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
