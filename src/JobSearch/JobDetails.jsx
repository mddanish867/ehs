import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  
  // You might fetch job details from an API or state. For now, using static data.
  const job = {
    id: parseInt(id, 10),
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    type: 'Job Type',
    description: 'Job description details go here.',
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
      <div className="p-4 rounded bg-white shadow-md text-left">
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
