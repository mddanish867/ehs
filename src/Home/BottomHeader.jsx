import React from "react";
import { useNavigate } from "react-router-dom";

const BottomHeader = ({ toggleLoginForm }) => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white rounded-t-3xl py-10 px-4 md:hidden flex items-center justify-center space-x-4 shadow-red-400 shadow-2xl">
      <button
        onClick={toggleLoginForm}
        className="text-blue-500 border border-blue-500 font-semibold p-2 w-full rounded-full focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-blue-300 shadow-xl"
      >
        Login
      </button>

      <button
        onClick={handleRegisterRedirect}
        className="text-orange-600 border border-orange-600 font-semibold p-2 w-full rounded-full focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out shadow-orange-500 shadow-2xl"
      >
        Register
      </button>
    </div>
  );
};

export default BottomHeader;
