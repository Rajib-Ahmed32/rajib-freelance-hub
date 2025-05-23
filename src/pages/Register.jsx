import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useGoogleLogin from "../hooks/useGoogleLogin";
import useRegisterForm from "../hooks/useRegisterForm";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const { formData, handleChange, resetFields } = useRegisterForm();
  const { registerUser } = useRegister();
  const handleGoogleLogin = useGoogleLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(formData, () => resetFields("email", "password"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-colors">
        <CardContent className="p-6 space-y-5">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="dark:text-gray-300">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="photoURL" className="dark:text-gray-300">
                Photo URL
              </Label>
              <Input
                id="photoURL"
                type="text"
                placeholder="Enter photo URL (optional)"
                value={formData.photoURL}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="email" className="dark:text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
