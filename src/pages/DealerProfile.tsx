
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { Check, MapPin, Shield, Building, Map, Users, Award, Mail, UserRound, Fingerprint } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DealerProfile = () => {
  const { user } = useAuth();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    dealershipName: user?.dealershipName || '',
    zone: user?.zone || '',
    district: user?.district || '',
    ssn: user?.ssn || '',
    twoFactorEnabled: user?.twoFactorEnabled || false,
    location: user?.location || '',
    dealerAdmin: user?.dealerAdmin || '',
    specialization: user?.specialization || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, twoFactorEnabled: checked }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real application, this would make an API call to update the user profile
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dealer Profile Dashboard</h1>
        <Button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className={isEditing ? "bg-green-600 hover:bg-green-700" : ""}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Profile Information</CardTitle>
            <Avatar className="h-12 w-12 border border-gray-200">
              <AvatarImage src={user?.avatarUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=64"} alt={user?.name} />
              <AvatarFallback className="bg-ds-primary-200 text-ds-primary-800">
                {user?.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" /> Name
                </Label>
                {isEditing ? (
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.name || 'N/A'}</div>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </Label>
                {isEditing ? (
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.email || 'N/A'}</div>
                )}
              </div>

              {/* Dealership */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dealershipName" className="flex items-center gap-2">
                  <Building className="h-4 w-4" /> Dealership
                </Label>
                {isEditing ? (
                  <Input id="dealershipName" name="dealershipName" value={formData.dealershipName} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.dealershipName || 'N/A'}</div>
                )}
              </div>

              {/* Zone */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="zone" className="flex items-center gap-2">
                  <Map className="h-4 w-4" /> Zone
                </Label>
                {isEditing ? (
                  <Select 
                    value={formData.zone} 
                    onValueChange={(value) => handleSelectChange('zone', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="North">North</SelectItem>
                      <SelectItem value="South">South</SelectItem>
                      <SelectItem value="East">East</SelectItem>
                      <SelectItem value="West">West</SelectItem>
                      <SelectItem value="Central">Central</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="text-sm">{user?.zone || 'N/A'}</div>
                )}
              </div>
              
              {/* District */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="district" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> District
                </Label>
                {isEditing ? (
                  <Input id="district" name="district" value={formData.district} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.district || 'N/A'}</div>
                )}
              </div>
              
              {/* SSN */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ssn" className="flex items-center gap-2">
                  <Fingerprint className="h-4 w-4" /> SSN Number
                </Label>
                {isEditing ? (
                  <Input id="ssn" name="ssn" value={formData.ssn} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.ssn || 'N/A'}</div>
                )}
              </div>
              
              {/* Location */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Location
                </Label>
                {isEditing ? (
                  <Input id="location" name="location" value={formData.location} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.location || 'N/A'}</div>
                )}
              </div>
              
              {/* Dealer Admin */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dealerAdmin" className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> Dealer Admin (SPOC)
                </Label>
                {isEditing ? (
                  <Input id="dealerAdmin" name="dealerAdmin" value={formData.dealerAdmin} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.dealerAdmin || 'N/A'}</div>
                )}
              </div>
              
              {/* Specialization */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="specialization" className="flex items-center gap-2">
                  <Award className="h-4 w-4" /> Specialization
                </Label>
                {isEditing ? (
                  <Textarea id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
                ) : (
                  <div className="text-sm">{user?.specialization || 'N/A'}</div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="twoFactor" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" /> Two-Factor Authentication
                </Label>
                {isEditing ? (
                  <Switch 
                    id="twoFactor"
                    checked={formData.twoFactorEnabled}
                    onCheckedChange={handleSwitchChange}
                  />
                ) : (
                  <span className={`text-xs px-2 py-1 rounded-full ${user?.twoFactorEnabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user?.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Secure your account with two-factor authentication.
              </p>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label className="flex items-center gap-2">
                <Fingerprint className="h-4 w-4" /> Role
              </Label>
              <div className="text-sm capitalize">
                {user?.role.replace("-", " ") || 'N/A'}
              </div>
              <p className="text-xs text-muted-foreground">
                Your access level in the system.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" disabled={!isEditing}>
              Change Password
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DealerProfile;
