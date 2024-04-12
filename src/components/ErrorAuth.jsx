import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./LoginForm";

const ErrorAuth = ({ isLoggedIn }) => {
  useEffect(() => {
    if (!isLoggedIn) {
      errorToast(); // Llamar a la función errorToast() si no está logueado
    }
  }, [isLoggedIn]);

  const errorToast = () =>
    toast.error("Debe iniciar sesión", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <div className="w-1/2 h-1/2">
      <LoginForm />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ErrorAuth;
