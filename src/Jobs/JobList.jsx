import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const JobList = ({ jobs, formatDescription, formatDate, onJobClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3; // Number of jobs to display per page
  // Pagination calculations
  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="p-4 cursor-pointer border rounded shadow-md hover:bg-gray-100"
            onClick={() => onJobClick(job.id)}
          >
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <p className="text-gray-700">{job.location}</p>
            <p className="text-gray-500">{job.type}</p>
            <ul className="list-disc pl-5 mb-2">
              {formatDescription(job.description)}
            </ul>
            <p className="text-gray-400">
              {job.companyType} - {formatDate(new Date(job.postedDate))}
            </p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center justify-center px-3 py-2 border-none border-gray-300 text-gray-500 rounded-l disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <FaChevronLeft className="text-lg" />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center px-3 py-1 border border-gray-300 text-gray-300 bg-white hover:bg-gray-900 hover:text-white ${currentPage === index + 1 ? 'bg-black text-white' : ''}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center justify-center px-3 py-2 border-none border-gray-300 text-gray-500 rounded-r disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              <FaChevronRight className="text-lg" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
      {/* Pagination */}
    </div>
  );
};

export default JobList;
