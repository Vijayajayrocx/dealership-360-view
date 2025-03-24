
import React from 'react';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, Info, MessageSquare, ShieldAlert, CheckCircle2 } from "lucide-react";
import { ColorfulCard } from '@/components/ui/colorful-card';
import { Button } from '@/components/ui/button';

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
      icon: <ShieldAlert className="h-5 w-5 text-ds-warning-500" />,
      variant: 'warning'
    },
    {
      id: '2',
      type: 'info',
      title: 'New Inventory Added',
      message: '5 new vehicles have been added to your inventory.',
      time: '5 hours ago',
      read: false,
      icon: <Info className="h-5 w-5 text-ds-primary-500" />,
      variant: 'primary'
    },
    {
      id: '3',
      type: 'message',
      title: 'New Message from Support',
      message: 'Your recent inquiry has been responded to by our customer care team.',
      time: '1 day ago',
      read: true,
      icon: <MessageSquare className="h-5 w-5 text-ds-secondary-500" />,
      variant: 'secondary'
    },
    {
      id: '4',
      type: 'reminder',
      title: 'Sales Target Reminder',
      message: 'You are 80% towards your monthly sales target. Keep up the good work!',
      time: '2 days ago',
      read: true,
      icon: <Clock className="h-5 w-5 text-ds-success-500" />,
      variant: 'success'
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="bg-gradient-to-r from-ds-primary-50 to-ds-primary-100 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-ds-primary-800">Notifications</h1>
          <Badge variant="success-light" className="text-ds-success-800">
            {notifications.filter(n => !n.read).length} Unread
          </Badge>
        </div>
        <p className="text-ds-primary-600 mt-2">
          Stay updated with important alerts, messages, and reminders
        </p>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-ds-primary-700">Recent Notifications</h2>
        <Button variant="outline" size="sm" className="text-ds-primary-600">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Mark All as Read
        </Button>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <ColorfulCard 
            key={notification.id} 
            variant={notification.variant as any} 
            className={notification.read ? "opacity-80" : ""}
            hoverable
            shadow="sm"
          >
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="mt-1">{notification.icon}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-medium ${!notification.read ? "font-semibold" : ""}`}>
                      {notification.title}
                      {!notification.read && (
                        <span className="ml-2 inline-block w-2 h-2 bg-ds-primary-500 rounded-full"></span>
                      )}
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
          </ColorfulCard>
        ))}
      </div>
      
      {notifications.length === 0 && (
        <ColorfulCard variant="gradient-blue">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <Bell className="h-12 w-12 text-ds-primary-400 mb-4" />
            <CardTitle className="text-xl mb-2">No Notifications</CardTitle>
            <p className="text-muted-foreground text-center">
              You don't have any notifications at the moment. We'll notify you when something important happens.
            </p>
          </CardContent>
        </ColorfulCard>
      )}
    </div>
  );
};

export default Notifications;
