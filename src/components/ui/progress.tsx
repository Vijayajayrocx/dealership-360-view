
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorClassName?: string;
  variant?: "default" | "success" | "warning" | "error" | "primary" | "secondary" | "accent";
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, indicatorClassName, variant = "default", size = "md", showValue = false, ...props }, ref) => {
  // Map variant to color classes
  const getVariantClass = () => {
    switch (variant) {
      case "success":
        return "bg-ds-success";
      case "warning":
        return "bg-ds-warning";
      case "error":
        return "bg-ds-error";
      case "primary":
        return "bg-ds-primary";
      case "secondary":
        return "bg-ds-secondary";
      case "accent":
        return "bg-accent";
      default:
        return "bg-primary";
    }
  };

  // Map size to height classes
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "h-2";
      case "lg":
        return "h-6";
      default:
        return "h-4";
    }
  };

  return (
    <div className="relative w-full">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-full bg-secondary",
          getSizeClass(),
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            indicatorClassName || getVariantClass()
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-white">
          {value}%
        </span>
      )}
    </div>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
