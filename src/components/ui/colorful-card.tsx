
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
  | "gradient-orange";

interface ColorfulCardProps {
  variant?: ColorVariant;
  className?: string;
  children: React.ReactNode;
  bordered?: boolean;
  hoverable?: boolean;
}

const ColorfulCard: React.FC<ColorfulCardProps> = ({
  variant = "primary",
  className,
  children,
  bordered = false,
  hoverable = false,
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
        return "bg-gradient-to-br from-blue-50 to-blue-100";
      case "gradient-green":
        return "bg-gradient-to-br from-ds-success-50 to-ds-success-100";
      case "gradient-purple":
        return "bg-gradient-to-br from-purple-50 to-purple-100";
      case "gradient-orange":
        return "bg-gradient-to-br from-ds-warning-50 to-ds-warning-100";
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
      default:
        return "border-muted";
    }
  };

  const getHoverClass = () => {
    if (!hoverable) return "";
    
    return "transition-all duration-200 hover:shadow-md";
  };

  return (
    <Card 
      className={cn(
        getBgClass(),
        getBorderClass(),
        getHoverClass(),
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
