import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import JobDetails from "./Jobs/JobDetails";
import Layout from "./Layout/Layout";
import Registration from "./Authentication/Registration";
import Login from "./Authentication/Login";
import DesktopView from "./Jobs/DesktopView";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLoginPopup = () => setLoginOpen(true);
  const closeLoginPopup = () => setLoginOpen(false);

  return (
    <Router>
      <div>
        {isLoginOpen && <Login onClose={closeLoginPopup} />}
        <Routes>
          {/* Layout routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/desktopsearch" element={<DesktopView />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Route>

          {/* Routes outside of Layout */}
          <Route
            path="/login"
            element={<Login onClose={closeLoginPopup} />}
          />
          <Route
            path="/register"
            element={<Registration onLoginClick={openLoginPopup} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
