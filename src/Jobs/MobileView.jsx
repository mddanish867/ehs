import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; 

function MobileView() {
  const navigate = useNavigate();

  // Handle mobile search textbox click
  const handleMobileSearchClick = () => {
    navigate("/desktopsearch"); // Navigate to the JobSearch page
  };

  return (
    <div className="mt-5 flex items-center border rounded-full shadow-lg border-gray-300">
      <FaSearch className="ml-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search by job, company or skills"
        className="w-full p-4 pl-6 rounded-full border-none  outline-none"
        onClick={handleMobileSearchClick}
      />
    </div>
  );
}

export default MobileView;
