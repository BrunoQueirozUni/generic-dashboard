import React from "react"
import { cn } from "@/lib/utils"

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-white",
      className
    )}
    {...props}
  />
))
PageHeader.displayName = "PageHeader"
const PageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-8 focus:outline-none",
      className
    )}
    {...props}
  />
))
PageContent.displayName = "PageContent"

const PageTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-3xl font-semibold",
      className
    )}
    {...props}
  />
))
PageTitle.displayName = "PageTitle"

const PageDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-xl text-gray-400",
      className
    )}
    {...props}
  />
))
PageDescription.displayName = "PageDescription"

export { PageHeader, PageContent, PageTitle, PageDescription }