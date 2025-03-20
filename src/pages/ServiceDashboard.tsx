import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import ColorSeparationDashboard from '@/components/ColorSeparationDashboard';

const ServiceDashboard = () => {
  const [selectedZone, setSelectedZone] = useState('all');
  
  // Mock data for service metrics
  const serviceMetrics = [
    { month: 'Jan', serviced: 85, satisfaction: 4.7 },
    { month: 'Feb', serviced: 92, satisfaction: 4.5 },
    { month: 'Mar', serviced: 110, satisfaction: 4.8 },
    { month: 'Apr', serviced: 105, satisfaction: 4.6 },
    { month: 'May', serviced: 115, satisfaction: 4.9 },
    { month: 'Jun', serviced: 120, satisfaction: 4.7 },
    { month: 'Jul', serviced: 117, satisfaction: 4.8 },
  ];

  // Mock service centers data
  const serviceCenters = [
    { id: 1, name: 'AutoEdge Service Center', zone: 'north', carsServiced: 210, rating: 4.8 },
    { id: 2, name: 'City Drive Service Hub', zone: 'north', carsServiced: 180, rating: 4.5 },
    { id: 3, name: 'Premier Service Mall', zone: 'south', carsServiced: 195, rating: 4.9 },
    { id: 4, name: 'Horizon Service Group', zone: 'east', carsServiced: 150, rating: 4.3 },
    { id: 5, name: 'Summit Service Center', zone: 'west', carsServiced: 225, rating: 4.7 },
    { id: 6, name: 'Golden Gate Service', zone: 'west', carsServiced: 165, rating: 4.6 },
    { id: 7, name: 'Evergreen Service Point', zone: 'south', carsServiced: 140, rating: 4.2 },
    { id: 8, name: 'Metro Service Hub', zone: 'north', carsServiced: 190, rating: 4.8 },
  ];

  // Mock service types data with colors
  const serviceTypesData = [
    { type: 'Regular Maintenance', count: 380, percentage: 45, color: "bg-ds-primary-400" },
    { type: 'Major Repairs', count: 120, percentage: 14, color: "bg-ds-error-500" },
    { type: 'Warranty Service', count: 210, percentage: 25, color: "bg-ds-success-500" },
    { type: 'Accident Repairs', count: 85, percentage: 10, color: "bg-ds-warning-500" },
    { type: 'Others', count: 50, percentage: 6, color: "bg-ds-secondary-500" },
  ];

  // Filter service centers by zone
  const filteredServiceCenters = selectedZone === 'all'
    ? serviceCenters
    : serviceCenters.filter(center => center.zone === selectedZone);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Service Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cars Serviced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">845</div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Service Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2 days</div>
            <p className="text-xs text-muted-foreground mt-1">-0.5 days from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-muted-foreground mt-1">+0.2 from last month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <ColorSeparationDashboard serviceTypes={serviceTypesData} />
        </div>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Service Center Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-ds-primary-400"></div>
                <span className="text-sm">Active (8)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-ds-warning-500"></div>
                <span className="text-sm">Maintenance (2)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-ds-error-500"></div>
                <span className="text-sm">Offline (1)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="centers">Service Centers</TabsTrigger>
          <TabsTrigger value="types">Service Types</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Metrics</CardTitle>
                <CardDescription>Monthly service counts and satisfaction ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={serviceMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
                      <Tooltip />
                      <Legend />
                      <Line 
                        yAxisId="left" 
                        type="monotone" 
                        dataKey="serviced" 
                        stroke="hsl(var(--primary))" 
                        name="Cars Serviced"
                        strokeWidth={2} 
                      />
                      <Line 
                        yAxisId="right" 
                        type="monotone" 
                        dataKey="satisfaction" 
                        stroke="hsl(var(--sidebar-primary))" 
                        name="Satisfaction (1-5)"
                        strokeWidth={2} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="centers">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Service Centers Performance</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-normal text-muted-foreground">Filter by Zone:</span>
                  <select
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value)}
                    className="text-sm border rounded p-1"
                  >
                    <option value="all">All Zones</option>
                    <option value="north">North Zone</option>
                    <option value="south">South Zone</option>
                    <option value="east">East Zone</option>
                    <option value="west">West Zone</option>
                  </select>
                </div>
              </CardTitle>
              <CardDescription>
                Service center performance metrics
                {selectedZone !== 'all' && ` in ${selectedZone.charAt(0).toUpperCase() + selectedZone.slice(1)} Zone`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Center</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Cars Serviced</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredServiceCenters.map((center) => (
                    <TableRow key={center.id}>
                      <TableCell className="font-medium">{center.name}</TableCell>
                      <TableCell className="capitalize">{center.zone}</TableCell>
                      <TableCell>{center.carsServiced}</TableCell>
                      <TableCell>{center.rating} / 5</TableCell>
                      <TableCell>
                        {center.rating >= 4.5 ? (
                          <Badge className="bg-primary/90 hover:bg-primary">Premium</Badge>
                        ) : center.rating >= 4.0 ? (
                          <Badge className="bg-sidebar-primary hover:bg-sidebar-primary/90">Standard</Badge>
                        ) : (
                          <Badge variant="outline">Basic</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types">
          <Card>
            <CardHeader>
              <CardTitle>Service Types Breakdown</CardTitle>
              <CardDescription>Distribution of different service types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serviceTypesData} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="type" width={100} />
                    <Tooltip formatter={(value) => [value, 'Count']} />
                    <Legend />
                    <Bar dataKey="count" name="Number of Services">
                      {serviceTypesData.map((entry, index) => (
                        <cell key={`cell-${index}`} fill={`hsl(var(--${entry.color.replace('bg-', '')}))`} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service Type</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Percentage</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {serviceTypesData.map((service) => (
                      <TableRow key={service.type}>
                        <TableCell className="font-medium">{service.type}</TableCell>
                        <TableCell>{service.count}</TableCell>
                        <TableCell>{service.percentage}%</TableCell>
                        <TableCell>
                          <Badge className={service.color + " hover:" + service.color}>
                            {service.percentage > 20 ? 'High Volume' : service.percentage > 10 ? 'Medium Volume' : 'Low Volume'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServiceDashboard;
