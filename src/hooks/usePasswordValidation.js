import { toast } from "react-hot-toast";

const usePasswordValidation = () => {
  const validatePassword = (password) => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must include at least one lowercase letter");
      return false;
    }
    return true;
  };

  return { validatePassword };
};

export default usePasswordValidation;
