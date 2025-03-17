
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const DealerProfile = () => {
  const { user } = useAuth();
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Dealer Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-20 font-medium text-muted-foreground">Name:</div>
                <div>{user?.name || 'N/A'}</div>
              </div>
              <div className="flex items-center">
                <div className="w-20 font-medium text-muted-foreground">Email:</div>
                <div>{user?.email || 'N/A'}</div>
              </div>
              <div className="flex items-center">
                <div className="w-20 font-medium text-muted-foreground">Role:</div>
                <div className="capitalize">{user?.role || 'N/A'}</div>
              </div>
              {user?.dealershipName && (
                <div className="flex items-center">
                  <div className="w-20 font-medium text-muted-foreground">Dealership:</div>
                  <div>{user.dealershipName}</div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Account settings functionality will be implemented in a future update.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DealerProfile;
