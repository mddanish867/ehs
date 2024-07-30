import React from 'react';
import Navbar from './Navbar';
import JobSearch from '../JobSearch/JobSearch';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <JobSearch/>
      {/* <main className="container mx-auto p-6 mt-36 md:mt-36">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Employee Hiring System</h1>
          <p className="mt-4 text-gray-700">Manage your referrals efficiently and effectively.</p>
        </div>
      </main> */}
    </div>
  );
};

export default Home;
