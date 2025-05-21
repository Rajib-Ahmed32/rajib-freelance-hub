import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const useGoogleLogin = () => {
  const { loginWithGoogle } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
    } catch (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  return handleGoogleLogin;
};

export default useGoogleLogin;
