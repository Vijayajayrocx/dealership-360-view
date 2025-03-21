
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ColorfulCard, CardContent } from "@/components/ui/colorful-card";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ds-primary-50 via-white to-ds-success-50">
      <ColorfulCard 
        variant="gradient-blue" 
        className="text-center max-w-2xl p-6 border-none" 
        hoverable 
        shadow="md"
      >
        <CardContent className="space-y-6 p-6">
          <div className="mb-6">
            <img 
              src="https://www.svgrepo.com/show/374006/ford.svg" 
              alt="Ford Logo" 
              className="h-16 mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold mb-4 text-ds-primary-800">Welcome to Ford Dealer Dashboard</h1>
            <p className="text-xl text-ds-secondary-600">Access all your dealership metrics, inventory, and customer information in one centralized location.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-ds-primary-50 p-5 rounded-lg border border-ds-primary-200">
              <h3 className="text-lg font-semibold text-ds-primary-800 mb-2">Dealership Metrics</h3>
              <p className="text-ds-secondary-600">Track your sales performance and service metrics in real-time</p>
            </div>
            <div className="bg-ds-success-50 p-5 rounded-lg border border-ds-success-200">
              <h3 className="text-lg font-semibold text-ds-success-800 mb-2">Inventory Control</h3>
              <p className="text-ds-secondary-600">Monitor your vehicle inventory and order history</p>
            </div>
            <div className="bg-ds-warning-50 p-5 rounded-lg border border-ds-warning-200">
              <h3 className="text-lg font-semibold text-ds-warning-800 mb-2">Customer Management</h3>
              <p className="text-ds-secondary-600">Manage your contacts and customer relationships</p>
            </div>
            <div className="bg-ds-error-50 p-5 rounded-lg border border-ds-error-200">
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
