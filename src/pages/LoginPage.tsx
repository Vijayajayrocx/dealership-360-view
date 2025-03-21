
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, requiresTwoFactor } = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    try {
      // If two-factor authentication is required, include the verification code
      if (requiresTwoFactor) {
        await login(username, password, code);
      } else {
        await login(username, password);
      }
      // Note: Navigation will be handled by the AuthContext after successful login
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Failed to log in");
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gradient-to-br from-ds-primary-50 via-white to-ds-success-50 p-4 md:p-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-2">
        <Card className="w-full border-ds-primary-200 bg-white/70 shadow-lg backdrop-blur-sm">
          <CardHeader className="space-y-1 bg-gradient-to-r from-ds-primary-50 to-ds-primary-100 rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-ds-primary-800">Ford Dealer Dashboard</CardTitle>
            <CardDescription className="text-ds-primary-600">
              Sign in to access your dealer dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-ds-secondary-700">
                  Username or Email
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-ds-primary-200 bg-white text-foreground focus-visible:ring-ds-primary-400"
                />
                <p className="text-xs text-ds-secondary-600">
                  Try: dealer@example.com
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-ds-secondary-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-ds-primary-200 bg-white text-foreground focus-visible:ring-ds-primary-400"
                />
                <p className="text-xs text-ds-secondary-600">
                  Try: password
                </p>
              </div>
              {requiresTwoFactor && (
                <div className="space-y-2">
                  <Label htmlFor="code" className="text-ds-secondary-700">
                    Verification Code
                  </Label>
                  <Input
                    id="code"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="border-ds-primary-200 bg-white text-foreground focus-visible:ring-ds-primary-400"
                  />
                  <p className="text-xs text-ds-secondary-600">
                    Use code 123456 for demo
                  </p>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={rememberMe} 
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)} 
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-ds-secondary-700"
                >
                  Remember me
                </label>
              </div>
              {error && <p className="text-ds-error text-sm">{error}</p>}
              <Button 
                variant="primary" 
                size="lg"
                className="w-full font-semibold"
                type="submit"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 bg-gradient-to-r from-ds-primary-50 to-ds-primary-100 rounded-b-lg p-6">
            <div className="text-sm text-ds-primary-700">
              <a href="#" className="text-ds-primary-800 underline underline-offset-4 hover:text-ds-primary-900 font-medium">
                Forgot your password?
              </a>
            </div>
          </CardFooter>
        </Card>
        <div className="hidden md:flex flex-col justify-center space-y-6 bg-gradient-to-r from-ds-primary-400 to-ds-primary-600 p-8 rounded-lg text-white">
          <div>
            <img 
              src="https://www.svgrepo.com/show/374006/ford.svg" 
              alt="Ford Logo" 
              className="h-16 mb-6 bg-white p-2 rounded-full"
            />
            <h1 className="text-3xl font-bold tracking-tight mb-4">Ford Dealer Portal</h1>
            <p className="text-white/90 text-lg">
              Access all your dealership metrics, inventory, and customer information in one centralized dashboard.
            </p>
          </div>
          <ul className="space-y-3 text-white/90 text-lg">
            <li className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">✓</span>
              <span>Track sales performance</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">✓</span>
              <span>Manage inventory</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">✓</span>
              <span>View service appointments</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">✓</span>
              <span>Access alignment data</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">✓</span>
              <span>Generate reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
