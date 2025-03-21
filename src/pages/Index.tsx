
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ColorfulCard, CardContent } from "@/components/ui/colorful-card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ds-primary-50 via-white to-ds-success-50">
      <ColorfulCard 
        variant="gradient-blue" 
        className="text-center max-w-2xl p-6 border-none" 
        hoverable 
        shadow="lg"
      >
        <CardContent className="space-y-6 p-6">
          <div className="mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <img 
                src="https://www.svgrepo.com/show/374006/ford.svg" 
                alt="Ford Logo" 
                className="h-12"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-ds-primary-800">Welcome to Ford Dealer Dashboard</h1>
            <p className="text-xl text-ds-secondary-600">Access all your dealership metrics, inventory, and customer information in one centralized location.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gradient-to-br from-ds-primary-50 to-ds-primary-100 p-5 rounded-lg border border-ds-primary-200 transform transition-all duration-200 hover:scale-105 hover:shadow-md">
              <h3 className="text-lg font-semibold text-ds-primary-800 mb-2">Dealership Metrics</h3>
              <p className="text-ds-secondary-600">Track your sales performance and service metrics in real-time</p>
            </div>
            <div className="bg-gradient-to-br from-ds-success-50 to-ds-success-100 p-5 rounded-lg border border-ds-success-200 transform transition-all duration-200 hover:scale-105 hover:shadow-md">
              <h3 className="text-lg font-semibold text-ds-success-800 mb-2">Inventory Control</h3>
              <p className="text-ds-secondary-600">Monitor your vehicle inventory and order history</p>
            </div>
            <div className="bg-gradient-to-br from-ds-warning-50 to-ds-warning-100 p-5 rounded-lg border border-ds-warning-200 transform transition-all duration-200 hover:scale-105 hover:shadow-md">
              <h3 className="text-lg font-semibold text-ds-warning-800 mb-2">Customer Management</h3>
              <p className="text-ds-secondary-600">Manage your contacts and customer relationships</p>
            </div>
            <div className="bg-gradient-to-br from-ds-error-50 to-ds-error-100 p-5 rounded-lg border border-ds-error-200 transform transition-all duration-200 hover:scale-105 hover:shadow-md">
              <h3 className="text-lg font-semibold text-ds-error-800 mb-2">Alignment Data</h3>
              <p className="text-ds-secondary-600">Access dealership alignment information</p>
            </div>
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
