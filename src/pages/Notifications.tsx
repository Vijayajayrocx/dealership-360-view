
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, Info, MessageSquare, ShieldAlert } from "lucide-react";

const Notifications = () => {
  // Mock notifications data
  const notifications = [
    {
      id: '1',
      type: 'alert',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur on Saturday, August 20th from 2 AM to 4 AM EST.',
      time: '2 hours ago',
      read: false,
      icon: <ShieldAlert className="h-5 w-5 text-ds-warning" />,
    },
    {
      id: '2',
      type: 'info',
      title: 'New Inventory Added',
      message: '5 new vehicles have been added to your inventory.',
      time: '5 hours ago',
      read: false,
      icon: <Info className="h-5 w-5 text-ds-primary" />,
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message from Support',
      message: 'Your recent inquiry has been responded to by our customer care team.',
      time: '1 day ago',
      read: true,
      icon: <MessageSquare className="h-5 w-5 text-ds-secondary" />,
    },
    {
      id: '4',
      type: 'reminder',
      title: 'Sales Target Reminder',
      message: 'You are 80% towards your monthly sales target. Keep up the good work!',
      time: '2 days ago',
      read: true,
      icon: <Clock className="h-5 w-5 text-ds-success" />,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Badge variant="secondary">
          {notifications.filter(n => !n.read).length} Unread
        </Badge>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card key={notification.id} className={notification.read ? "bg-background" : "bg-muted/30"}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="mt-1">{notification.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {notifications.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-8">
            <Bell className="h-12 w-12 text-muted-foreground mb-4" />
            <CardTitle className="text-xl mb-2">No Notifications</CardTitle>
            <p className="text-muted-foreground text-center">
              You don't have any notifications at the moment. We'll notify you when something important happens.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Notifications;
