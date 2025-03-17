
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  const { isAuthenticated, login, requiresTwoFactor, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (requiresTwoFactor) {
        await login(email, password, verificationCode);
      } else {
        await login(email, password);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // If already authenticated, redirect to dashboard
  if (isAuthenticated && !isLoading) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-ds-primary-100 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-ds-primary-800">DS360</h1>
          <p className="text-ds-secondary-500 mt-2">Dealer Management System</p>
        </div>

        <Card className="shadow-lg border-ds-primary-100">
          <CardHeader>
            <CardTitle>{requiresTwoFactor ? "Two-Factor Authentication" : "Sign In"}</CardTitle>
            <CardDescription>
              {requiresTwoFactor
                ? "Please enter the verification code sent to your device"
                : "Enter your credentials to access your account"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {!requiresTwoFactor ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dealer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="verificationCode">Verification Code</Label>
                  <Input
                    id="verificationCode"
                    type="text"
                    placeholder="123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    maxLength={6}
                    className="text-center tracking-widest text-lg"
                    autoFocus
                  />
                  <p className="text-xs text-ds-secondary-500 mt-2">
                    For demo purposes, the verification code is: 123456
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-ds-primary-600 hover:bg-ds-primary-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : requiresTwoFactor ? "Verify" : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-4 text-center text-sm text-ds-secondary-500">
          <p>Demo credentials:</p>
          <p>Dealer: dealer@example.com / password</p>
          <p>Customer Care: care@example.com / password</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
