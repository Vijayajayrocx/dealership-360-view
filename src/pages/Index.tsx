
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ColorfulCard, CardContent } from "@/components/ui/colorful-card";
import { ArrowRight, Car, BarChart2, Users, Settings } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ds-primary-50 via-white to-ds-success-50">
      <ColorfulCard 
        variant="gradient-blue" 
        className="text-center max-w-4xl p-6 border-none" 
        hoverable 
        shadow="lg"
      >
        <CardContent className="space-y-8 p-6">
          <div className="mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <img 
                src="https://www.svgrepo.com/show/374006/ford.svg" 
                alt="Ford Logo" 
                className="h-14"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-ds-primary-800">Welcome to Ford Dealer Dashboard</h1>
            <p className="text-xl text-ds-secondary-600">Access all your dealership metrics, inventory, and customer information in one centralized location.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <ColorfulCard 
              variant="primary" 
              className="transform transition-all duration-300 hover:scale-105 text-left" 
              hoverable 
              shadow="md"
            >
              <CardContent className="p-5 flex">
                <div className="bg-ds-primary-100 p-3 rounded-full mr-4">
                  <BarChart2 className="h-6 w-6 text-ds-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ds-primary-800 mb-2">Dealership Metrics</h3>
                  <p className="text-ds-secondary-600">Track your sales performance and service metrics in real-time</p>
                </div>
              </CardContent>
            </ColorfulCard>
            
            <ColorfulCard 
              variant="success" 
              className="transform transition-all duration-300 hover:scale-105 text-left" 
              hoverable 
              shadow="md"
            >
              <CardContent className="p-5 flex">
                <div className="bg-ds-success-100 p-3 rounded-full mr-4">
                  <Car className="h-6 w-6 text-ds-success-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ds-success-800 mb-2">Inventory Control</h3>
                  <p className="text-ds-secondary-600">Monitor your vehicle inventory and order history</p>
                </div>
              </CardContent>
            </ColorfulCard>
            
            <ColorfulCard 
              variant="warning" 
              className="transform transition-all duration-300 hover:scale-105 text-left" 
              hoverable 
              shadow="md"
            >
              <CardContent className="p-5 flex">
                <div className="bg-ds-warning-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-ds-warning-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ds-warning-800 mb-2">Customer Management</h3>
                  <p className="text-ds-secondary-600">Manage your contacts and customer relationships</p>
                </div>
              </CardContent>
            </ColorfulCard>
            
            <ColorfulCard 
              variant="error" 
              className="transform transition-all duration-300 hover:scale-105 text-left" 
              hoverable 
              shadow="md"
            >
              <CardContent className="p-5 flex">
                <div className="bg-ds-error-100 p-3 rounded-full mr-4">
                  <Settings className="h-6 w-6 text-ds-error-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ds-error-800 mb-2">Alignment Data</h3>
                  <p className="text-ds-secondary-600">Access dealership alignment information</p>
                </div>
              </CardContent>
            </ColorfulCard>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="info"
              size="lg"
              className="font-semibold"
              onClick={() => navigate('/dashboard')}
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="info-outline" 
              size="lg"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
        </CardContent>
      </ColorfulCard>
    </div>
  );
};

export default Index;
