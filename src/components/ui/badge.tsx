import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-green-500/20 text-green-500",
        yellow: "border-transparent bg-yellow-500/20 text-yellow-500",
        red: "border-transparent bg-red-500/20 text-red-500",
        gray: "border-transparent bg-gray-500/20 text-gray-500",
        blue: "border-transparent bg-blue-500/20 text-blue-500",
        purple: "border-transparent bg-purple-500/20 text-purple-500",
        
        adm: "bg-yellow-500/20 text-yellow-500 border-0 py-2",
        dev: "bg-blue-500/20 text-blue-500 border-0 py-2",
        visitor: "bg-gray-500/20 text-gray-500 border-0 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
