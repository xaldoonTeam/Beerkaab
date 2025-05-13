import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon, Lock, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/Store";
import { LoginFn, reset } from "@/Redux/Slice/CreateSlice/RegisterSlice";
import { toast } from "react-hot-toast";
import illustration from "@/assets/login-illustration.png"; // Replace with actual image path

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, isSuccess, errorMsg, data } = useSelector(
    (state: RootState) => state.user
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(LoginFn({ email, password }));
  };

  React.useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      localStorage.setItem("accountType", data.accountType);
      toast.success("Login successful!");
      navigate("/Dashboard");
      dispatch(reset());
    }

    if (isError) {
      toast.error(errorMsg || "Login failed. Please try again.");
      dispatch(reset());
    }
  }, [isSuccess, isError, errorMsg, data, navigate, dispatch]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      <h1 className="text-4xl font-bold text-green-900 mb-6">SIGN IN</h1>

      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl p-10">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 p-8 bg-gray-50">
          <img src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?t=st=1746029234~exp=1746032834~hmac=1109927d94bf0aff49dfaa3aab750e302e390dfae5aa59a3afc2676be74066c4&w=826' alt="Login illustration" className="w-full max-w-sm" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button type="button" className="text-sm text-gray-600 hover:underline">
                Forgot Your Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white py-3 rounded-md hover:bg-green-800 transition"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "SIGN IN"}
            </button>

            {/* Google Button */}
            <button
              type="button"
              className="w-full bg-amber-700 text-white py-3 rounded-md hover:bg-amber-800 transition"
            >
              CONTINUE WITH GOOGLE
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <button
              className="text-green-800 font-semibold hover:underline"
              onClick={() => navigate("/SignupForm")}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
