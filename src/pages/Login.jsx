import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useGoogleLogin from "../hooks/useGoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = useGoogleLogin();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Logged in successfully!");
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-colors">
        <CardContent className="p-6 space-y-5">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="dark:text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="dark:text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-right">
              <Link className="text-blue-500 hover:underline text-sm dark:text-blue-400">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-lg" /> Continue with Google
          </Button>

          <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
