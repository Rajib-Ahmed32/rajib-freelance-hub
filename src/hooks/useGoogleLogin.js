import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

const useGoogleLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message || "Google login failed.");
    }
  };

  return handleGoogleLogin;
};

export default useGoogleLogin;
