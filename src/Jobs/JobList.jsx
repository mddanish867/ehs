import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, currentPage, jobsPerPage, onJobClick, onPageChange }) => {
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

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="inline-flex -space-x-px">
            <li>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1.5 border border-gray-300 text-gray-500 bg-white rounded-l hover:bg-gray-900 hover:text-white disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => onPageChange(index + 1)}
                  className={`px-3 py-1.5 border border-gray-300 text-gray-300 bg-white hover:bg-gray-900 hover:text-white ${currentPage === index + 1 ? 'bg-gray-700 hover:bg-gray-900 hover:text-white' : ''}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-1.5 border border-gray-300 text-gray-500 bg-white rounded-r hover:bg-gray-900 hover:text-white disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default JobList;
