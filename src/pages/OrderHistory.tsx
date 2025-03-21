
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ColorfulCard } from '@/components/ui/colorful-card';
import { ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

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
    let className = "";
    
    switch (status) {
      case 'completed':
        variant = "default";
        className = "bg-ds-success-500 hover:bg-ds-success-600";
        break;
      case 'pending':
        variant = "secondary";
        className = "bg-ds-warning-500 hover:bg-ds-warning-600";
        break;
      case 'cancelled':
        variant = "destructive";
        className = "bg-ds-error-500 hover:bg-ds-error-600";
        break;
      default:
        variant = "outline";
    }
    
    return <Badge variant={variant} className={className}>{status}</Badge>;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-ds-primary-700">Order History</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ColorfulCard variant="gradient-blue" hoverable>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ds-primary-800 flex items-center">
              <ShoppingCart className="mr-2 h-4 w-4" /> Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ds-primary-700">5</div>
          </CardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="gradient-green" hoverable>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ds-success-800 flex items-center">
              <DollarSign className="mr-2 h-4 w-4" /> Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ds-success-700">$201,893</div>
          </CardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="gradient-purple" hoverable>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-800 flex items-center">
              <TrendingUp className="mr-2 h-4 w-4" /> Average Order Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-700">$40,379</div>
          </CardContent>
        </ColorfulCard>
      </div>
      
      <ColorfulCard variant="gradient-blue" className="bg-opacity-50">
        <CardHeader>
          <CardTitle className="text-ds-primary-800">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white rounded-md overflow-hidden">
            <Table>
              <TableHeader className="bg-ds-primary-50">
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
                  <TableRow key={order.id} className="hover:bg-ds-primary-50/50">
                    <TableCell className="font-medium text-ds-primary-600">{order.id}</TableCell>
                    <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="text-ds-success-600 font-medium">${order.total.toLocaleString()}</TableCell>
                    <TableCell>{renderStatus(order.status)}</TableCell>
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

export default OrderHistory;
