import { useState } from "react";

const useRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const resetFields = (...fields) => {
    setFormData((prev) => {
      const updated = { ...prev };
      fields.forEach((field) => {
        updated[field] = "";
      });
      return updated;
    });
  };

  return { formData, handleChange, resetFields };
};

export default useRegisterForm;
