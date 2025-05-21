import { Toaster } from "react-hot-toast";

const AppToaster = () => {
  return (
    <Toaster
      position="top-center"
      containerStyle={{
        top: "40%",
        right: 20,
        transform: "translateY(-50%)",
      }}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
          animation: "fadeInUp 0.5s ease forwards",
        },
      }}
    />
  );
};

export default AppToaster;
