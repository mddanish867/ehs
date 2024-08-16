import React from "react";
import { useNavigate } from "react-router-dom";

function MobileView() {
  const navigate = useNavigate();

  // Handle mobile search textbox click
  const handleMobileSearchClick = () => {
    navigate("/desktopsearch"); // Navigate to the JobSearch page
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Search by job, company or skills"
        className="w-full p-4 rounded-full border border-gray-300 outline-none"
        onClick={handleMobileSearchClick}
      />
    </div>
  );
}

export default MobileView;
