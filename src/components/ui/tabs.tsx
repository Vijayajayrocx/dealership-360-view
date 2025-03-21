
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: "default" | "colorful" | "pills" | "underlined"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const getVariantClass = () => {
    switch (variant) {
      case "colorful":
        return "bg-transparent space-x-1";
      case "pills":
        return "bg-transparent space-x-1 p-1 border rounded-lg";
      case "underlined":
        return "bg-transparent space-x-2 border-b";
      default:
        return "bg-muted";
    }
  };

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground",
        getVariantClass(),
        className
      )}
      {...props}
    />
  );
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    color?: "default" | "primary" | "success" | "warning" | "error" | "secondary" | "rainbow"
    variant?: "default" | "underlined" | "pills"
  }
>(({ className, color = "default", variant = "default", ...props }, ref) => {
  const getColorClasses = () => {
    if (variant === "underlined") {
      switch (color) {
        case "primary":
          return "data-[state=active]:text-ds-primary-800 data-[state=active]:border-b-2 data-[state=active]:border-ds-primary-800";
        case "success":
          return "data-[state=active]:text-ds-success-800 data-[state=active]:border-b-2 data-[state=active]:border-ds-success-800";
        case "warning":
          return "data-[state=active]:text-ds-warning-800 data-[state=active]:border-b-2 data-[state=active]:border-ds-warning-800";
        case "error":
          return "data-[state=active]:text-ds-error-800 data-[state=active]:border-b-2 data-[state=active]:border-ds-error-800";
        case "secondary":
          return "data-[state=active]:text-ds-secondary-800 data-[state=active]:border-b-2 data-[state=active]:border-ds-secondary-800";
        case "rainbow":
          return "data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-gradient-to-r data-[state=active]:from-ds-primary data-[state=active]:via-ds-success data-[state=active]:to-ds-error";
        default:
          return "data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-foreground";
      }
    } else if (variant === "pills") {
      switch (color) {
        case "primary":
          return "data-[state=active]:bg-ds-primary data-[state=active]:text-white hover:bg-ds-primary-50 hover:text-ds-primary-800";
        case "success":
          return "data-[state=active]:bg-ds-success data-[state=active]:text-white hover:bg-ds-success-50 hover:text-ds-success-800";
        case "warning":
          return "data-[state=active]:bg-ds-warning data-[state=active]:text-white hover:bg-ds-warning-50 hover:text-ds-warning-800";
        case "error":
          return "data-[state=active]:bg-ds-error data-[state=active]:text-white hover:bg-ds-error-50 hover:text-ds-error-800";
        case "secondary":
          return "data-[state=active]:bg-ds-secondary data-[state=active]:text-white hover:bg-ds-secondary-50 hover:text-ds-secondary-800";
        case "rainbow":
          return "data-[state=active]:bg-gradient-to-r data-[state=active]:from-ds-primary data-[state=active]:via-ds-success data-[state=active]:to-ds-error data-[state=active]:text-white";
        default:
          return "data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-muted/50";
      }
    } else {
      switch (color) {
        case "primary":
          return "data-[state=active]:bg-ds-primary-50 data-[state=active]:text-ds-primary-800 hover:bg-ds-primary-50/50";
        case "success":
          return "data-[state=active]:bg-ds-success-50 data-[state=active]:text-ds-success-800 hover:bg-ds-success-50/50";
        case "warning":
          return "data-[state=active]:bg-ds-warning-50 data-[state=active]:text-ds-warning-800 hover:bg-ds-warning-50/50";
        case "error":
          return "data-[state=active]:bg-ds-error-50 data-[state=active]:text-ds-error-800 hover:bg-ds-error-50/50";
        case "secondary":
          return "data-[state=active]:bg-ds-secondary-50 data-[state=active]:text-ds-secondary-800 hover:bg-ds-secondary-50/50";
        default:
          return "data-[state=active]:bg-background data-[state=active]:text-foreground hover:bg-muted/50";
      }
    }
  };

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
        variant !== "underlined" && "rounded-md",
        variant === "underlined" && "border-b-2 border-transparent",
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
