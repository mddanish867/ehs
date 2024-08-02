import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import JobDetails from "./Jobs/JobDetails";
import Layout from "./Layout/Layout";
import Registration from "./Authentication/Registration";
import Login from "./Authentication/Login";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const openLoginPopup = () => setLoginOpen(true);
  const closeLoginPopup = () => setLoginOpen(false);

  return (
    <Router>
      <div>
        {isLoginOpen && <Login onClose={closeLoginPopup} />}
        <Layout>
          <Routes>
            <Route
              path="/login"
              element={<Login onClose={closeLoginPopup} />}
            />
            <Route
              path="/register"
              element={<Registration onLoginClick={openLoginPopup} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/job/:id" element={<JobDetails />} />

            {/* Add other routes here */}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
