import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

export type UserRole = "dealer" | "customer-care-executive";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dealershipName?: string;
  avatarUrl?: string;
  zone?: string;
  district?: string;
  ssn?: string;
  twoFactorEnabled?: boolean;
  location?: string;
  dealerAdmin?: string;
  specialization?: string;
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, code?: string) => Promise<void>;
  logout: () => void;
  requiresTwoFactor: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Mock user data for demonstration
const mockUsers = [
  {
    id: "1",
    email: "dealer@example.com",
    password: "password",
    name: "Ramakrishnan N",
    role: "dealer" as UserRole,
    dealershipName: "Krishna Motors",
    avatarUrl: "https://i.pravatar.cc/150?u=dealer",
    zone: "South",
    district: "Chennai",
    ssn: "XXX-XX-9876",
    twoFactorEnabled: true,
    location: "Chennai, Tamil Nadu",
    dealerAdmin: "Suresh Kumar",
    specialization: "Luxury Vehicles"
  },
  {
    id: "2",
    email: "care@example.com",
    password: "password",
    name: "Jane Doe",
    role: "customer-care-executive" as UserRole,
    avatarUrl: "https://i.pravatar.cc/150?u=care",
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [requiresTwoFactor, setRequiresTwoFactor] = useState(false);
  const [pendingLogin, setPendingLogin] = useState<{email: string, password: string} | null>(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("ds360_user");
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user", error);
        localStorage.removeItem("ds360_user");
      }
    }
    
    setIsLoading(false);
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user && location.pathname !== "/login") {
      navigate("/login");
    }
  }, [isLoading, user, location.pathname, navigate]);

  const login = async (email: string, password: string, code?: string) => {
    setIsLoading(true);
    
    try {
      // First step authentication
      if (!requiresTwoFactor) {
        const foundUser = mockUsers.find(u => u.email === email && u.password === password);
        
        if (!foundUser) {
          throw new Error("Invalid email or password");
        }
        
        // In a real app, we'd verify credentials with the server here
        setRequiresTwoFactor(true);
        setPendingLogin({email, password});
        
        toast({
          title: "Two-factor authentication required",
          description: "Please enter the verification code sent to your device",
        });
        
        return;
      }
      
      // Second step authentication
      if (requiresTwoFactor && pendingLogin) {
        // In a real app, we'd verify the 2FA code with the server here
        if (code !== "123456") {
          throw new Error("Invalid verification code");
        }
        
        const foundUser = mockUsers.find(u => 
          u.email === pendingLogin.email && u.password === pendingLogin.password
        );
        
        if (!foundUser) {
          throw new Error("User not found");
        }
        
        // Remove password before storing user
        const { password: _, ...userWithoutPassword } = foundUser;
        
        setUser(userWithoutPassword);
        localStorage.setItem("ds360_user", JSON.stringify(userWithoutPassword));
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${foundUser.name}!`,
        });
        
        setRequiresTwoFactor(false);
        setPendingLogin(null);
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: error instanceof Error ? error.message : "Failed to log in",
      });
      
      if (requiresTwoFactor) {
        // Reset 2FA flow on error
        setRequiresTwoFactor(false);
        setPendingLogin(null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ds360_user");
    navigate("/login");
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        requiresTwoFactor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
