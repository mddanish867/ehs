import React from 'react';

const JobList = ({ jobs, jobsPerPage, onJobClick, }) => {
  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 cursor-pointer border rounded shadow-md hover:bg-gray-100"
            onClick={() => onJobClick(job.id)}
          >
            <h2 className="text-lg font-bold">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default JobList;
