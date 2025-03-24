
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorfulCard, CardContent as ColorfulCardContent } from "@/components/ui/colorful-card";
import { useAuth } from "@/contexts/AuthContext";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell, Sector } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SalesDashboard = () => {
  const { user } = useAuth();
  const [selectedZone, setSelectedZone] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    '#1E3A8A', // ds-primary-800
    '#10B981', // ds-success-500  
    '#F59E0B', // ds-warning-500
    '#EF4444'  // ds-error-500
  ];

  const renderActiveShape = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-midAngle * Math.PI / 180);
    const cos = Math.cos(-midAngle * Math.PI / 180);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={12}>{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" fontSize={12}>
          {`$${value.toLocaleString()}`}
        </text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={36} textAnchor={textAnchor} fill="#999" fontSize={12}>
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-gradient-to-r from-ds-primary-50 to-ds-primary-100 p-6 rounded-lg mb-6">
        <h1 className="text-2xl font-bold mb-2 text-ds-primary-800">Sales Dashboard</h1>
        <p className="text-ds-primary-600">
          Track your sales performance and dealership metrics in real-time
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ColorfulCard variant="gradient-blue" hoverable>
          <ColorfulCardContent>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-ds-primary-800">Total Sales</span>
              <div className="text-2xl font-bold mt-2">$436,000</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-ds-success-600 font-medium">+12% from last month</span>
                <Progress value={80} size="sm" variant="success" className="mt-2" />
              </div>
            </div>
          </ColorfulCardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="gradient-green" hoverable>
          <ColorfulCardContent>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-ds-success-800">Vehicles Sold</span>
              <div className="text-2xl font-bold mt-2">28</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-ds-success-600 font-medium">+4 from last month</span>
                <Progress value={70} size="sm" variant="success" className="mt-2" />
              </div>
            </div>
          </ColorfulCardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="gradient-orange" hoverable>
          <ColorfulCardContent>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-ds-warning-800">Average Sale Price</span>
              <div className="text-2xl font-bold mt-2">$15,571</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-ds-error-600 font-medium">-2% from last month</span>
                <Progress value={45} size="sm" variant="error" className="mt-2" />
              </div>
            </div>
          </ColorfulCardContent>
        </ColorfulCard>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="mb-4" variant="pills">
          <TabsTrigger value="overview" color="primary">Overview</TabsTrigger>
          <TabsTrigger value="zones" color="primary">Zone Analysis</TabsTrigger>
          <TabsTrigger value="dealers" color="primary">Dealer Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <ColorfulCard variant="primary" hoverable className="mb-6">
            <CardHeader>
              <CardTitle className="text-ds-primary-800">Sales Performance</CardTitle>
              <CardDescription>Monthly sales figures for the current year</CardDescription>
            </CardHeader>
            <ColorfulCardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                      labelFormatter={(label) => `Month: ${label}`}
                      contentStyle={{ 
                        backgroundColor: 'white',
                        borderColor: 'hsl(var(--ds-primary-200))'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="sales" fill="hsl(var(--ds-primary))" name="Sales ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ColorfulCardContent>
          </ColorfulCard>
        </TabsContent>

        <TabsContent value="zones">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ColorfulCard variant="primary" hoverable>
              <CardHeader>
                <CardTitle className="text-ds-primary-800">Zone Sales Distribution</CardTitle>
                <CardDescription>Sales breakdown by geographical zones</CardDescription>
              </CardHeader>
              <ColorfulCardContent>
                <div className="h-96 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={zoneSalesDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        onMouseEnter={(_, index) => setActiveIndex(index)}
                      >
                        {zoneSalesDistribution.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={ZONE_COLORS[index % ZONE_COLORS.length]} 
                            stroke="white"
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                        contentStyle={{ 
                          backgroundColor: 'white',
                          borderColor: 'hsl(var(--ds-primary-200))',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </ColorfulCardContent>
            </ColorfulCard>

            <ColorfulCard variant="success" hoverable>
              <CardHeader>
                <CardTitle className="text-ds-success-800">Zone Details</CardTitle>
                <CardDescription>Performance metrics for each zone</CardDescription>
              </CardHeader>
              <ColorfulCardContent className="overflow-hidden">
                <div className="bg-white bg-opacity-50 rounded-md overflow-x-auto">
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
                      {zoneData.map((zone, index) => (
                        <TableRow key={zone.id} className="hover:bg-opacity-75">
                          <TableCell className="font-medium">
                            <div className="flex items-center">
                              <div 
                                className="w-3 h-3 rounded-full mr-2" 
                                style={{ backgroundColor: ZONE_COLORS[index % ZONE_COLORS.length] }}
                              />
                              {zone.name}
                            </div>
                          </TableCell>
                          <TableCell>${zone.totalSales.toLocaleString()}</TableCell>
                          <TableCell>{zone.dealersCount}</TableCell>
                          <TableCell>
                            ${Math.round(zone.totalSales / zone.dealersCount).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </ColorfulCardContent>
            </ColorfulCard>
          </div>
        </TabsContent>

        <TabsContent value="dealers">
          <ColorfulCard variant="gradient-blue" hoverable>
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-ds-primary-800">
                <span>Dealer Performance</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-normal text-ds-primary-600">Filter by Zone:</span>
                  <select
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value)}
                    className="text-sm border rounded p-1 border-ds-primary-200 bg-white"
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
            <ColorfulCardContent className="overflow-hidden">
              <div className="bg-white bg-opacity-50 rounded-md overflow-x-auto">
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
                            <Badge variant="success">Premium Dealer</Badge>
                          ) : (
                            <Badge variant="outline">Standard</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </ColorfulCardContent>
          </ColorfulCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalesDashboard;
