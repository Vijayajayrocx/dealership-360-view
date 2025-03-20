import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ServiceTypeProps {
  type: string;
  count: number;
  percentage: number;
  color: string;
  variant?: "default" | "success" | "warning" | "error" | "primary" | "secondary" | "accent";
}

const ColorSeparationDashboard = ({ 
  serviceTypes, 
  title = "Service Type Distribution",
  description = "Visual breakdown of service categories"
}: { 
  serviceTypes: ServiceTypeProps[];
  title?: string;
  description?: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {serviceTypes.map((service, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{service.type}</span>
                <Badge 
                  variant="secondary" 
                  className={cn(service.color, "text-white")}
                >
                  {service.percentage}%
                </Badge>
              </div>
              <span className="text-sm font-mono">{service.count}</span>
            </div>
            <Progress 
              value={service.percentage} 
              size="sm"
              className="h-2"
              indicatorClassName={service.color}
              variant={service.variant}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// Helper function to generate colors for items without assigned colors
export const getColorForIndex = (index: number): string => {
  const colors = [
    "bg-ds-primary", 
    "bg-ds-success", 
    "bg-ds-warning", 
    "bg-ds-error", 
    "bg-ds-secondary",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-emerald-500"
  ];
  
  return colors[index % colors.length];
};

export default ColorSeparationDashboard;
