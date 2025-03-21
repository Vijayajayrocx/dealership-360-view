
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { Check, MapPin, Shield, Building, Map, Users, Award, Mail, UserRound, Fingerprint, Save, Edit3 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColorfulCard } from '@/components/ui/colorful-card';

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
    <div className="container mx-auto p-6 bg-gradient-to-br from-white to-ds-primary-50/30">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-ds-primary-700 flex items-center">
          <UserRound className="mr-2 h-6 w-6" /> Dealer Profile Dashboard
        </h1>
        <Button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          variant={isEditing ? "success" : "info"}
          className="flex items-center"
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          ) : (
            <>
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ColorfulCard className="col-span-2" variant="gradient-blue" hoverable>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b">
            <CardTitle className="text-ds-primary-800">Profile Information</CardTitle>
            <Avatar className="h-12 w-12 border border-ds-primary-200 ring-2 ring-ds-primary-100">
              <AvatarImage src={user?.avatarUrl || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=64&h=64"} alt={user?.name} />
              <AvatarFallback className="bg-ds-primary-200 text-ds-primary-800">
                {user?.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 mt-4">
              {/* Name */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="flex items-center gap-2 text-ds-primary-700">
                  <UserRound className="h-4 w-4" /> Name
                </Label>
                {isEditing ? (
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.name || 'N/A'}</div>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="flex items-center gap-2 text-ds-primary-700">
                  <Mail className="h-4 w-4" /> Email
                </Label>
                {isEditing ? (
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.email || 'N/A'}</div>
                )}
              </div>

              {/* Dealership */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dealershipName" className="flex items-center gap-2 text-ds-primary-700">
                  <Building className="h-4 w-4" /> Dealership
                </Label>
                {isEditing ? (
                  <Input id="dealershipName" name="dealershipName" value={formData.dealershipName} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.dealershipName || 'N/A'}</div>
                )}
              </div>

              {/* Zone */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="zone" className="flex items-center gap-2 text-ds-primary-700">
                  <Map className="h-4 w-4" /> Zone
                </Label>
                {isEditing ? (
                  <Select 
                    value={formData.zone} 
                    onValueChange={(value) => handleSelectChange('zone', value)}
                  >
                    <SelectTrigger className="border-ds-primary-200 focus:ring-ds-primary-400">
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
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.zone || 'N/A'}</div>
                )}
              </div>
              
              {/* District */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="district" className="flex items-center gap-2 text-ds-primary-700">
                  <MapPin className="h-4 w-4" /> District
                </Label>
                {isEditing ? (
                  <Input id="district" name="district" value={formData.district} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.district || 'N/A'}</div>
                )}
              </div>
              
              {/* SSN */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="ssn" className="flex items-center gap-2 text-ds-primary-700">
                  <Fingerprint className="h-4 w-4" /> SSN Number
                </Label>
                {isEditing ? (
                  <Input id="ssn" name="ssn" value={formData.ssn} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.ssn || 'N/A'}</div>
                )}
              </div>
              
              {/* Location */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location" className="flex items-center gap-2 text-ds-primary-700">
                  <MapPin className="h-4 w-4" /> Location
                </Label>
                {isEditing ? (
                  <Input id="location" name="location" value={formData.location} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.location || 'N/A'}</div>
                )}
              </div>
              
              {/* Dealer Admin */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dealerAdmin" className="flex items-center gap-2 text-ds-primary-700">
                  <Users className="h-4 w-4" /> Dealer Admin (SPOC)
                </Label>
                {isEditing ? (
                  <Input id="dealerAdmin" name="dealerAdmin" value={formData.dealerAdmin} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.dealerAdmin || 'N/A'}</div>
                )}
              </div>
              
              {/* Specialization */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="specialization" className="flex items-center gap-2 text-ds-primary-700">
                  <Award className="h-4 w-4" /> Specialization
                </Label>
                {isEditing ? (
                  <Textarea id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} className="border-ds-primary-200 focus:ring-ds-primary-400" />
                ) : (
                  <div className="text-sm font-medium text-ds-secondary-800 p-2 bg-ds-primary-50 rounded-md">{user?.specialization || 'N/A'}</div>
                )}
              </div>
            </div>
          </CardContent>
        </ColorfulCard>
        
        <ColorfulCard variant="gradient-purple" hoverable>
          <CardHeader>
            <CardTitle className="text-purple-800">Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                <Label htmlFor="twoFactor" className="flex items-center gap-2 text-purple-700">
                  <Shield className="h-4 w-4" /> Two-Factor Authentication
                </Label>
                {isEditing ? (
                  <Switch 
                    id="twoFactor"
                    checked={formData.twoFactorEnabled}
                    onCheckedChange={handleSwitchChange}
                  />
                ) : (
                  <span className={`text-xs px-2 py-1 rounded-full ${user?.twoFactorEnabled ? 'bg-ds-success-100 text-ds-success-800' : 'bg-ds-error-100 text-ds-error-800'}`}>
                    {user?.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                )}
              </div>
              <p className="text-xs text-purple-600 pl-2">
                Secure your account with two-factor authentication.
              </p>
            </div>

            <div className="flex flex-col space-y-1.5">
              <div className="p-3 bg-white/60 rounded-lg">
                <Label className="flex items-center gap-2 text-purple-700">
                  <Fingerprint className="h-4 w-4" /> Role
                </Label>
                <div className="text-sm capitalize mt-1 font-medium text-purple-800">
                  {user?.role?.replace("-", " ") || 'N/A'}
                </div>
              </div>
              <p className="text-xs text-purple-600 pl-2">
                Your access level in the system.
              </p>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50" disabled={!isEditing}>
              Change Password
            </Button>
          </CardFooter>
        </ColorfulCard>
      </div>
    </div>
  );
};

export default DealerProfile;
