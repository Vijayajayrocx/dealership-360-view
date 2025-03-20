
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Inventory = () => {
  // Mock inventory data
  const inventory = [
    { id: '1', make: 'Toyota', model: 'Camry', year: 2023, color: 'Silver', stock: 5, price: 27999 },
    { id: '2', make: 'Honda', model: 'Civic', year: 2022, color: 'Blue', stock: 3, price: 24599 },
    { id: '3', make: 'Ford', model: 'Mustang', year: 2023, color: 'Red', stock: 2, price: 39999 },
    { id: '4', make: 'Chevrolet', model: 'Equinox', year: 2022, color: 'Black', stock: 4, price: 31799 },
    { id: '5', make: 'Nissan', model: 'Altima', year: 2023, color: 'White', stock: 1, price: 26499 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="bg-card border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Vehicles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">15</div>
          </CardContent>
        </Card>
        
        <Card className="bg-card border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">3</div>
          </CardContent>
        </Card>
        
        <Card className="bg-card border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">$402,395</div>
          </CardContent>
        </Card>
        
        <Card className="bg-card border border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Days in Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">32</div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-card border border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Current Inventory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead>Make</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.id} className="border-border">
                  <TableCell className="font-medium">{item.make}</TableCell>
                  <TableCell>{item.model}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>{item.color}</TableCell>
                  <TableCell>
                    {item.stock <= 2 ? (
                      <Badge variant="destructive">{item.stock}</Badge>
                    ) : (
                      item.stock
                    )}
                  </TableCell>
                  <TableCell className="text-right">${item.price.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
