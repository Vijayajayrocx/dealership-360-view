import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const SalesDashboard = () => {
  const { user } = useAuth();
  const [selectedZone, setSelectedZone] = useState('all');
  
  const salesData = [
    { month: 'Jan', sales: 65000 },
    { month: 'Feb', sales: 59000 },
    { month: 'Mar', sales: 80000 },
    { month: 'Apr', sales: 81000 },
    { month: 'May', sales: 56000 },
    { month: 'Jun', sales: 55000 },
    { month: 'Jul', sales: 40000 },
  ];

  const zoneData = [
    { id: 'north', name: 'North Zone', totalSales: 235000, dealersCount: 12 },
    { id: 'south', name: 'South Zone', totalSales: 189000, dealersCount: 9 },
    { id: 'east', name: 'East Zone', totalSales: 142000, dealersCount: 7 },
    { id: 'west', name: 'West Zone', totalSales: 170000, dealersCount: 8 },
  ];

  const dealersData = [
    { id: 1, name: 'AutoEdge Motors', zone: 'north', salesCount: 320, qualified: true },
    { id: 2, name: 'City Drive Autos', zone: 'north', salesCount: 280, qualified: false },
    { id: 3, name: 'Premier Auto Mall', zone: 'south', salesCount: 310, qualified: true },
    { id: 4, name: 'Horizon Car Group', zone: 'east', salesCount: 190, qualified: false },
    { id: 5, name: 'Summit Vehicles', zone: 'west', salesCount: 340, qualified: true },
    { id: 6, name: 'Golden Gate Motors', zone: 'west', salesCount: 210, qualified: false },
    { id: 7, name: 'Evergreen Dealership', zone: 'south', salesCount: 260, qualified: false },
    { id: 8, name: 'Metropolitan Cars', zone: 'north', salesCount: 305, qualified: true },
    { id: 9, name: 'Pacific Auto Center', zone: 'east', salesCount: 175, qualified: false },
    { id: 10, name: 'Alpine Motors Corp', zone: 'west', salesCount: 330, qualified: true },
  ];

  const filteredDealers = selectedZone === 'all' 
    ? dealersData 
    : dealersData.filter(dealer => dealer.zone === selectedZone);
  
  const zoneSalesDistribution = zoneData.map(zone => ({
    name: zone.name,
    value: zone.totalSales,
  }));

  const ZONE_COLORS = [
    'hsl(var(--primary))', 
    'hsl(var(--sidebar-primary))', 
    'hsl(var(--accent))', 
    'hsl(var(--muted))'
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

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="zones">Zone Analysis</TabsTrigger>
          <TabsTrigger value="dealers">Dealer Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
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
                    <Bar dataKey="sales" fill="hsl(var(--primary))" name="Sales ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="zones">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Zone Sales Distribution</CardTitle>
                <CardDescription>Sales breakdown by geographical zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={zoneSalesDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="hsl(var(--muted))"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {zoneSalesDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={ZONE_COLORS[index % ZONE_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Zone Details</CardTitle>
                <CardDescription>Performance metrics for each zone</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Zone</TableHead>
                      <TableHead>Total Sales</TableHead>
                      <TableHead>Dealers</TableHead>
                      <TableHead>Avg. per Dealer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {zoneData.map((zone) => (
                      <TableRow key={zone.id}>
                        <TableCell className="font-medium">{zone.name}</TableCell>
                        <TableCell>${zone.totalSales.toLocaleString()}</TableCell>
                        <TableCell>{zone.dealersCount}</TableCell>
                        <TableCell>
                          ${Math.round(zone.totalSales / zone.dealersCount).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="dealers">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Dealer Performance</span>
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
                Detailed sales performance by dealers
                {selectedZone !== 'all' && ` in ${selectedZone.charAt(0).toUpperCase() + selectedZone.slice(1)} Zone`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dealer Name</TableHead>
                    <TableHead>Zone</TableHead>
                    <TableHead>Cars Sold</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDealers.map((dealer) => (
                    <TableRow key={dealer.id}>
                      <TableCell className="font-medium">{dealer.name}</TableCell>
                      <TableCell className="capitalize">{dealer.zone}</TableCell>
                      <TableCell>{dealer.salesCount}</TableCell>
                      <TableCell>
                        {dealer.qualified ? (
                          <Badge className="bg-primary/90 hover:bg-primary">Premium Dealer</Badge>
                        ) : (
                          <Badge variant="outline">Standard</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalesDashboard;
