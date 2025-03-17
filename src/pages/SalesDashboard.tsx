
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SalesDashboard = () => {
  const { user } = useAuth();
  
  // Mock data for the sales chart
  const salesData = [
    { month: 'Jan', sales: 65000 },
    { month: 'Feb', sales: 59000 },
    { month: 'Mar', sales: 80000 },
    { month: 'Apr', sales: 81000 },
    { month: 'May', sales: 56000 },
    { month: 'Jun', sales: 55000 },
    { month: 'Jul', sales: 40000 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$436,000</div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Vehicles Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground mt-1">+4 from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Sale Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,571</div>
            <p className="text-xs text-muted-foreground mt-1">-2% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Sales Performance</CardTitle>
          <CardDescription>Monthly sales figures for the current year</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Bar dataKey="sales" fill="#1E3A8A" name="Sales ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesDashboard;
