// components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Loader;
