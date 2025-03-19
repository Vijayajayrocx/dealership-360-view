
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
    <div className="flex min-h-screen flex-col justify-center bg-background p-4 md:p-8">
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 md:grid-cols-2">
        <Card className="w-full border-border bg-card shadow-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-foreground">Dealer Dashboard</CardTitle>
            <CardDescription className="text-muted-foreground">
              Sign in to access your dealer dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground">
                  Username or Email
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-input bg-background text-foreground"
                />
                <p className="text-xs text-muted-foreground">
                  Try: dealer@example.com
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-input bg-background text-foreground"
                />
                <p className="text-xs text-muted-foreground">
                  Try: password
                </p>
              </div>
              {requiresTwoFactor && (
                <div className="space-y-2">
                  <Label htmlFor="code" className="text-foreground">
                    Verification Code
                  </Label>
                  <Input
                    id="code"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="border-input bg-background text-foreground"
                  />
                  <p className="text-xs text-muted-foreground">
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
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground"
                >
                  Remember me
                </label>
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" type="submit">Sign In</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <div className="text-sm text-muted-foreground">
              <a href="#" className="text-primary underline underline-offset-4 hover:text-primary/90">
                Forgot your password?
              </a>
            </div>
          </CardFooter>
        </Card>
        <div className="hidden md:flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Ford Dealer Portal</h1>
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
