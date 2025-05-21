import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";
import usePasswordValidation from "../hooks/usePasswordValidation";

const useRegister = () => {
  const { register } = useAuth();
  const { validatePassword } = usePasswordValidation();

  const registerUser = async (
    { email, password, name, photoURL },
    onSuccess
  ) => {
    if (!validatePassword(password)) return false;

    try {
      await register(email, password, name, photoURL);
      toast.success("Registered successfully!");
      if (onSuccess) onSuccess();
      return true;
    } catch (error) {
      toast.error(error.message || "Registration failed");
      return false;
    }
  };

  return { registerUser };
};

export default useRegister;
