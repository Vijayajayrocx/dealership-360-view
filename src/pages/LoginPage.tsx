
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ColorfulCard } from '@/components/ui/colorful-card';

const LoginPage = () => {
  const [email, setEmail] = useState('demo@ford.com');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Registration form state
  const [dealerName, setDealerName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Pass both email and password to the login function as expected by AuthContext
      await login(email, password);
      
      // The navigation to dashboard will happen in the AuthContext
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: typeof error === 'string' ? error : "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    
    try {
      // Basic validation
      if (!dealerName || !regEmail || !regPassword || !confirmPassword) {
        throw new Error("All fields are required");
      }
      
      if (regPassword !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      
      if (regPassword.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }
      
      // In a real application, you would call an API to register the user
      // For demo purposes, we'll just simulate a registration success
      toast({
        title: "Registration successful",
        description: "Your account has been created. Please log in.",
      });
      
      // Reset form and switch to login tab
      setDealerName('');
      setRegEmail('');
      setRegPassword('');
      setConfirmPassword('');
      
      // Switch to login tab after successful registration
      const loginTab = document.querySelector('[data-state="inactive"][data-value="login"]') as HTMLElement;
      if (loginTab) loginTab.click();
      
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: typeof error === 'string' ? error : "An error occurred during registration",
        variant: "destructive",
      });
    } finally {
      setIsRegistering(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ds-primary-50 via-white to-ds-success-50 p-4">
      <div className="w-full max-w-md mb-8 text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
          <img 
            src="https://www.svgrepo.com/show/374006/ford.svg" 
            alt="Ford Logo" 
            className="w-12 h-12"
            style={{ filter: 'brightness(0%)' }}
          />
        </div>
        <h1 className="text-3xl font-bold text-ds-primary-800">Ford Dealer Dashboard</h1>
        <p className="text-ds-secondary-600 mt-2">Access your dealership management system</p>
      </div>
      
      <ColorfulCard variant="gradient-blue" className="w-full max-w-md" shadow="lg">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin}>
              <CardHeader>
                <CardTitle className="text-ds-primary-800">Welcome Back</CardTitle>
                <CardDescription>Enter your credentials to access your dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@dealership.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="bg-white/90"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className="bg-white/90"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={toggleShowPassword}
                      className="absolute right-0 top-0 h-full px-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button 
                  type="submit" 
                  className="w-full mb-4" 
                  disabled={isLoading}
                  variant="info"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  {isLoading ? "Logging in..." : "Log In"}
                </Button>
                <a href="#" className="text-sm text-ds-primary-600 hover:underline self-center">
                  Forgot your password?
                </a>
              </CardFooter>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister}>
              <CardHeader>
                <CardTitle className="text-ds-primary-800">Create an Account</CardTitle>
                <CardDescription>Register your dealership in our system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dealerName">Dealership Name</Label>
                  <Input 
                    id="dealerName" 
                    placeholder="Metropolis Ford" 
                    className="bg-white/90"
                    value={dealerName}
                    onChange={(e) => setDealerName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regEmail">Email</Label>
                  <Input 
                    id="regEmail" 
                    type="email" 
                    placeholder="your.email@dealership.com" 
                    className="bg-white/90"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="regPassword">Password</Label>
                  <div className="relative">
                    <Input 
                      id="regPassword" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="bg-white/90"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={toggleShowPassword}
                      className="absolute right-0 top-0 h-full px-3"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-white/90"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="info" 
                  type="submit"
                  disabled={isRegistering}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  {isRegistering ? "Registering..." : "Register"}
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </ColorfulCard>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>For demo purposes, use: demo@ford.com / password</p>
      </div>
    </div>
  );
};

export default LoginPage;
