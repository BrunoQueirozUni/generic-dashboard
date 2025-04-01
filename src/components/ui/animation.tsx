import * as React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion";

const Animation = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn("flex flex-col gap-6", className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
   />
))
Animation.displayName = "Animation"

export { Animation }