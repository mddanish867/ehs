import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // You might fetch job details from an API or state. For now, using static data.
  const job = {
    id: parseInt(id, 10),
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    type: 'Job Type',
    description: 'Job description details go here.\nMore details about the job description.',
    companyType: 'Company Type',
    postedDate: new Date()
  };

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center p-2 text-gray-700 hover:text-gray-900 focus:outline-none font-semibold"
      >
        <IoIosArrowBack className="mr-2 text-orange-600 font-semibold"/>
        Back To Search
      </button>
      <div className="border-t mt-4"></div>
      <div className="bg-white text-left p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-700 mb-2">{job.company}</p>
        <p className="text-gray-700 mb-2">{job.location}</p>
        <p className="text-gray-500 mb-2">{job.type}</p>
        <ul className="list-disc pl-5 mb-2">
          {job.description.split('\n').map((line, index) => (
            <li key={index} className="text-gray-600">{line}</li>
          ))}
        </ul>
        <p className="text-gray-400">{job.companyType} - {formatDate(new Date(job.postedDate))}</p>
      </div>
    </div>
  );
};

export default JobDetails;
