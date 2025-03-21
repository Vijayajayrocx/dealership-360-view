
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ColorfulCard, CardContent, CardHeader, CardTitle } from "@/components/ui/colorful-card";
import { Progress } from "@/components/ui/progress";

const Inventory = () => {
  // Mock inventory data
  const inventory = [
    { id: '1', make: 'Toyota', model: 'Camry', year: 2023, color: 'Silver', stock: 5, price: 27999 },
    { id: '2', make: 'Honda', model: 'Civic', year: 2022, color: 'Blue', stock: 3, price: 24599 },
    { id: '3', make: 'Ford', model: 'Mustang', year: 2023, color: 'Red', stock: 2, price: 39999 },
    { id: '4', make: 'Chevrolet', model: 'Equinox', year: 2022, color: 'Black', stock: 4, price: 31799 },
    { id: '5', make: 'Nissan', model: 'Altima', year: 2023, color: 'White', stock: 1, price: 26499 },
  ];

  // Calculate stock levels
  const getTotalStock = () => inventory.reduce((acc, item) => acc + item.stock, 0);
  const getLowStockCount = () => inventory.filter(item => item.stock <= 2).length;
  const getInventoryValue = () => inventory.reduce((acc, item) => acc + (item.price * item.stock), 0);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-ds-primary-800">Inventory Management</h1>
        <Badge variant="primary" className="text-sm py-1 px-3">Last updated: Today</Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <ColorfulCard variant="primary" hoverable bordered>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ds-primary-700">Total Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ds-primary-800">{getTotalStock()}</div>
            <Progress value={80} variant="primary" size="sm" className="mt-2" />
          </CardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="error" hoverable bordered>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ds-error-700">Low Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ds-error-800">{getLowStockCount()}</div>
            <Progress value={(getLowStockCount() / inventory.length) * 100} variant="error" size="sm" className="mt-2" />
          </CardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="success" hoverable bordered>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ds-success-700">Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ds-success-800">${getInventoryValue().toLocaleString()}</div>
            <Progress value={65} variant="success" size="sm" className="mt-2" />
          </CardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="warning" hoverable bordered>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ds-warning-700">Avg. Days in Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ds-warning-800">32</div>
            <Progress value={32} variant="warning" size="sm" className="mt-2" />
          </CardContent>
        </ColorfulCard>
      </div>
      
      <ColorfulCard variant="gradient-blue" className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-ds-primary-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ds-primary"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
            Current Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden border border-blue-100">
            <Table>
              <TableHeader className="bg-ds-primary-50">
                <TableRow className="border-ds-primary-100">
                  <TableHead className="text-ds-primary-800">Make</TableHead>
                  <TableHead className="text-ds-primary-800">Model</TableHead>
                  <TableHead className="text-ds-primary-800">Year</TableHead>
                  <TableHead className="text-ds-primary-800">Color</TableHead>
                  <TableHead className="text-ds-primary-800">Stock</TableHead>
                  <TableHead className="text-right text-ds-primary-800">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => (
                  <TableRow key={item.id} className="border-blue-50 hover:bg-blue-50/50">
                    <TableCell className="font-medium">{item.make}</TableCell>
                    <TableCell>{item.model}</TableCell>
                    <TableCell>{item.year}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          item.color.toLowerCase() === 'silver' ? 'bg-gray-300' :
                          item.color.toLowerCase() === 'blue' ? 'bg-blue-500' :
                          item.color.toLowerCase() === 'red' ? 'bg-red-500' :
                          item.color.toLowerCase() === 'black' ? 'bg-black' :
                          'bg-white border border-gray-300'
                        }`}></div>
                        {item.color}
                      </div>
                    </TableCell>
                    <TableCell>
                      {item.stock <= 2 ? (
                        <Badge variant="error">{item.stock}</Badge>
                      ) : (
                        <Badge variant="success">{item.stock}</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-medium">${item.price.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </ColorfulCard>
    </div>
  );
};

export default Inventory;
