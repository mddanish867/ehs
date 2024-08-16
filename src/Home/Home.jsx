import React from 'react';
import JobSearch from '../Jobs/JobSearch';

const Home = () => {  
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <h1 className="font-bold text-4xl mt-4 lg:text-5xl lg:mt-10 sm:text-3xl sm:mt-6 sm:ml-4 sm:text-center">
        Find your dream <br className="block sm:hidden" /> employer
        <br className="block sm:hidden" /> now
      </h1>

      <p className="mt-6 mb-5 font-semibold text-left sm:text-center sm:ml-4">
        We are here to make the hiring easy
      </p>
      <JobSearch/>
    </div>
  );
};

export default Home;
