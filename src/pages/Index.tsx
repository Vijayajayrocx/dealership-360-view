
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-2xl p-6">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to Ford Dealer Dashboard</h1>
        <p className="text-xl text-muted-foreground">Access all your dealership metrics, inventory, and customer information in one centralized location.</p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
