
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const OrderHistory = () => {
  // Mock order history data
  const orders = [
    { 
      id: 'ORD-001', 
      date: '2023-08-15', 
      customer: 'John Smith', 
      items: 2, 
      total: 52998, 
      status: 'completed' 
    },
    { 
      id: 'ORD-002', 
      date: '2023-08-12', 
      customer: 'Jane Doe', 
      items: 1, 
      total: 27999, 
      status: 'completed' 
    },
    { 
      id: 'ORD-003', 
      date: '2023-08-10', 
      customer: 'Robert Johnson', 
      items: 1, 
      total: 39999, 
      status: 'completed' 
    },
    { 
      id: 'ORD-004', 
      date: '2023-08-05', 
      customer: 'Lisa Anderson', 
      items: 1, 
      total: 24599, 
      status: 'completed' 
    },
    { 
      id: 'ORD-005', 
      date: '2023-08-01', 
      customer: 'Michael Brown', 
      items: 2, 
      total: 56298, 
      status: 'completed' 
    },
  ];

  // Function to render status badge with appropriate color
  const renderStatus = (status: string) => {
    let variant: "default" | "destructive" | "outline" | "secondary" = "default";
    
    switch (status) {
      case 'completed':
        variant = "default";
        break;
      case 'pending':
        variant = "secondary";
        break;
      case 'cancelled':
        variant = "destructive";
        break;
      default:
        variant = "outline";
    }
    
    return <Badge variant={variant}>{status}</Badge>;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$201,893</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$40,379</div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>${order.total.toLocaleString()}</TableCell>
                  <TableCell>{renderStatus(order.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderHistory;
