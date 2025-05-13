import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon, LockIcon } from "lucide-react";
import { RegisterFn, resetRegisterState } from "@/Redux/Slice/CreateSlice/LoginSlice";
import { AppDispatch, RootState } from "@/Redux/Store";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isSuccess, isError, errorMsg } = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(RegisterFn({ username: name, email, password }));
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration successful!");
      dispatch(resetRegisterState());
      navigate("/");
    }
    if (isError) {
      toast.error(errorMsg || "Registration failed");
      dispatch(resetRegisterState());
    }
  }, [isSuccess, isError, errorMsg, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="grid md:grid-cols-2 gap-6 items-center max-w-4xl w-full shadow-lg p-10">
        {/* Left Illustration */}
        <div className="hidden md:block">
          <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?t=st=1746029234~exp=1746032834~hmac=1109927d94bf0aff49dfaa3aab750e302e390dfae5aa59a3afc2676be74066c4&w=826" alt="Sign Up Illustration" className="w-full max-w-md" />
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-5 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-green-900">SIGN UP</h2>

          <div className="relative">
            <UserIcon className="absolute left-3 top-3 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 py-6 bg-green-50 border border-gray-300"
              required
            />
          </div>

          <div className="relative">
            <MailIcon className="absolute left-3 top-3 text-gray-500" size={20} />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 py-6 bg-green-50 border border-gray-300"
              required
            />
          </div>

          <div className="relative">
            <LockIcon className="absolute left-3 top-3 text-gray-500" size={20} />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 py-6 bg-green-50 border border-gray-300"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          <Button type="submit" className="w-full bg-green-900 text-white py-6 text-lg" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "SIGN UP"}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full py-6 text-lg text-white bg-[#6b3f1d] hover:bg-[#4d2d14]"
          >
            CONTINUE WITH GOOGLE
          </Button>

          <div className="text-center text-sm text-gray-600">
            have an account?{" "}
            <span
              onClick={() => navigate("/Loginpage")}
              className="text-green-900 font-medium cursor-pointer"
            >
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
