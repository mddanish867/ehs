import React from "react";

const BottomHeader = ({ toggleLoginForm }) => { 

  return (
    <div className="fixed w-full bottom-0 inset-x-0 bg-white rounded-t-3xl py-10 px-4 md:hidden flex items-center justify-center space-x-4 shadow-red-400 shadow-2xl">
    <button
      onClick={toggleLoginForm}
      className="flex items-center justify-center space-x-2 bg-orange-600 text-white mb-2 rounded w-full p-3 lg:text-blue-500 lg:bg-white lg:hover:text-blue-700"
    >
      Login
    </button>      
  </div>
  
  );
};

export default BottomHeader;
