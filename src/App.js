import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import JobDetails from './Jobs/JobDetails';
import Layout from './Layout/Layout';

function App() {
    return (
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails/>} />
        </Routes>
        </Layout>
      </Router>
  );
}
export default App;
