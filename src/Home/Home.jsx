import React from 'react';
import Navbar from './Navbar';
import JobSearch from '../JobSearch/JobSearch';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <JobSearch/>
    </div>
  );
};

export default Home;
