import React from "react";

import useIsMobile from "../CustomeHooks/useIsMobile"; // Import the custom hook
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const JobSearch = () => {
  const isMobile = useIsMobile(); // Use the custom hook

  return <div>
    {isMobile ? <MobileView /> : <DesktopView />}
    </div>;
};

export default JobSearch;
