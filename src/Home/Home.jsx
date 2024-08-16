import React from "react";
import JobSearch from "../Jobs/JobSearch";
import useIsMobile from "../CustomeHooks/useIsMobile"; // Import the custom hook

const Home = () => {
  const isMobile = useIsMobile(); // Use the custom hook

  return (
    <div className="min-h-screen bg-white p-6">
      <JobSearch />
      {isMobile && (
        <div className="text-2xl font-bold text-gray-900 mt-6 ">
          <img src="./Illustration.jpg" alt="Logo" className="w-96 h-96" />
        </div>
      )}
    </div>
  );
};

export default Home;
