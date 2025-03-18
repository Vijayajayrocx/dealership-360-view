
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    // For demonstration purposes - passing email and password to login
    login(username, password);
    
    // Note: Navigation will be handled by the AuthContext after successful login
  };

  return (
    <div className="flex min-h-screen flex-col justify-center p-4 md:p-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Dealer Dashboard</CardTitle>
            <CardDescription>
              Sign in to access your dealer dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Username or Email
                </label>
                <Input
                  id="username"
                  placeholder="Enter your username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <Button className="w-full" type="submit">Sign In</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <div className="text-sm text-muted-foreground">
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Forgot your password?
              </a>
            </div>
          </CardFooter>
        </Card>
        <div className="hidden md:flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Ford Dealer Portal</h1>
          <p className="text-muted-foreground">
            Access all your dealership metrics, inventory, and customer information in one centralized dashboard.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              ✓ <span>Track sales performance</span>
            </li>
            <li className="flex items-center gap-2">
              ✓ <span>Manage inventory</span>
            </li>
            <li className="flex items-center gap-2">
              ✓ <span>View service appointments</span>
            </li>
            <li className="flex items-center gap-2">
              ✓ <span>Access alignment data</span>
            </li>
            <li className="flex items-center gap-2">
              ✓ <span>Generate reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
