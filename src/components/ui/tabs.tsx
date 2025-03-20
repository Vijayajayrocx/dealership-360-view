
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: "default" | "colorful"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
      variant === "default" ? "bg-muted" : "bg-transparent",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    color?: "default" | "primary" | "success" | "warning" | "error" | "secondary"
  }
>(({ className, color = "default", ...props }, ref) => {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "data-[state=active]:bg-ds-primary-50 data-[state=active]:text-ds-primary-800";
      case "success":
        return "data-[state=active]:bg-ds-success-50 data-[state=active]:text-ds-success-800";
      case "warning":
        return "data-[state=active]:bg-ds-warning-50 data-[state=active]:text-ds-warning-800";
      case "error":
        return "data-[state=active]:bg-ds-error-50 data-[state=active]:text-ds-error-800";
      case "secondary":
        return "data-[state=active]:bg-ds-secondary-50 data-[state=active]:text-ds-secondary-800";
      default:
        return "data-[state=active]:bg-background data-[state=active]:text-foreground";
    }
  };

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
        getColorClasses(),
        className
      )}
      {...props}
    />
  );
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
