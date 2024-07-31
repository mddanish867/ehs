import React from 'react';

const JobDetails = ({ job, formatDescription, formatDate }) => {
  if (!job) return null;

  return (
    <div className="p-4 rounded bg-white shadow-md">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-700">{job.location}</p>
      <p className="text-gray-500">{job.type}</p>
      <ul className="list-disc pl-5 mb-2">
        {formatDescription(job.description)}
      </ul>
      <p className="text-gray-400">{job.companyType} - {formatDate(new Date(job.postedDate))}</p>
    </div>
  );
};

export default JobDetails;
