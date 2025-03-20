
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ServiceTypeProps {
  type: string;
  count: number;
  percentage: number;
  color: string;
}

const ColorSeparationDashboard = ({ serviceTypes }: { serviceTypes: ServiceTypeProps[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Type Distribution</CardTitle>
        <CardDescription>Visual breakdown of service categories</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {serviceTypes.map((service, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{service.type}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono">{service.count}</span>
                <span className="text-xs text-muted-foreground font-medium">
                  {service.percentage}%
                </span>
              </div>
            </div>
            <Progress 
              value={service.percentage} 
              className="h-2"
              indicatorClassName={service.color}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ColorSeparationDashboard;
