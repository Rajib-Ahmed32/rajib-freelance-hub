import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import usePasswordValidation from "../hooks/usePasswordValidation";

const useRegister = () => {
  const { register } = useAuth();
  const { validatePassword } = usePasswordValidation();

  const registerUser = async ({ email, password }, onSuccess) => {
    if (!validatePassword(password)) return false;

    try {
      await register(email, password);
      toast.success("Registered successfully!");
      if (onSuccess) onSuccess();
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  return { registerUser };
};

export default useRegister;
