
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ColorVariant = 
  | "primary" 
  | "secondary" 
  | "success" 
  | "warning" 
  | "error" 
  | "info" 
  | "accent"
  | "gradient-blue"
  | "gradient-green"
  | "gradient-purple"
  | "gradient-orange"
  | "gradient-red"
  | "gradient-rainbow";

interface ColorfulCardProps {
  variant?: ColorVariant;
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
  shadow?: "none" | "sm" | "md" | "lg";
}

const ColorfulCard: React.FC<ColorfulCardProps> = ({
  variant = "primary",
  className,
  children,
  bordered = false,
  hoverable = false,
  shadow = "none",
  ...props
}) => {
  // Get background and text classes based on variant
  const getBgClass = () => {
    switch (variant) {
      case "primary":
        return "bg-ds-primary-50";
      case "secondary":
        return "bg-ds-secondary-50";
      case "success":
        return "bg-ds-success-50";
      case "warning":
        return "bg-ds-warning-50";
      case "error":
        return "bg-ds-error-50";
      case "info":
        return "bg-blue-50";
      case "accent":
        return "bg-accent";
      case "gradient-blue":
        return "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200";
      case "gradient-green":
        return "bg-gradient-to-br from-ds-success-50 via-ds-success-100 to-green-200";
      case "gradient-purple":
        return "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200";
      case "gradient-orange":
        return "bg-gradient-to-br from-ds-warning-50 via-ds-warning-100 to-orange-200";
      case "gradient-red":
        return "bg-gradient-to-br from-ds-error-50 via-ds-error-100 to-red-200";
      case "gradient-rainbow":
        return "bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100";
      default:
        return "";
    }
  };

  const getBorderClass = () => {
    if (!bordered) return "";
    
    switch (variant) {
      case "primary":
        return "border-ds-primary-200";
      case "secondary":
        return "border-ds-secondary-200";
      case "success":
        return "border-ds-success-200";
      case "warning":
        return "border-ds-warning-200";
      case "error":
        return "border-ds-error-200";
      case "info":
        return "border-blue-200";
      case "accent":
        return "border-accent/30";
      case "gradient-blue":
        return "border-blue-200";
      case "gradient-green":
        return "border-green-200";
      case "gradient-purple":
        return "border-purple-200";
      case "gradient-orange":
        return "border-orange-200";
      case "gradient-red":
        return "border-red-200";
      case "gradient-rainbow":
        return "border-purple-200";
      default:
        return "border-muted";
    }
  };

  const getHoverClass = () => {
    if (!hoverable) return "";
    
    return "transition-all duration-200 hover:shadow-md hover:-translate-y-1";
  };

  const getShadowClass = () => {
    switch (shadow) {
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
      default:
        return "";
    }
  };

  return (
    <Card 
      className={cn(
        getBgClass(),
        getBorderClass(),
        getHoverClass(),
        getShadowClass(),
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
};

// Export the main component and sub-components
export { 
  ColorfulCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
};
