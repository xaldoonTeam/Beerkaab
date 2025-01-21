import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store";
import { LoginFn, reset } from "@/Redux/Slice/CreateSlice/RegisterSlice";
import { toast } from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, isSuccess, errorMsg, data } = useSelector(
    (state: RootState) => state.user
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(LoginFn({ email, password }));
  };

  React.useEffect(() => {
    if (isSuccess && data) {
      // Save user and token to local storage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token); // Correct token key

      // Save accountType to local storage
      localStorage.setItem("accountType", data.accountType);

      toast.success("Login successful!");
      navigate("/"); // Adjust the route to your desired path
      dispatch(reset()); // Reset state after handling success
    }

    if (isError) {
      toast.error(errorMsg || "Login failed. Please try again.");
      dispatch(reset()); // Reset state after handling error
    }
  }, [isSuccess, isError, errorMsg, data, navigate, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login to Your Account</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full bg-green-900" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button variant="link" className="text-sm">
            Forgot your password?
          </Button>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Button variant="link" className="p-0" onClick={() => navigate("/SignupForm")}>
              Sign up
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
