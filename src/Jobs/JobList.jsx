import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRupeeSign 
} from "react-icons/fa";

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
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="p-4 cursor-pointer border rounded shadow-md bg-white"
            onClick={() => onJobClick(job.id)}
          >
            <h2 className="text-1xl font-semibold">{job.title}</h2>
            <p className="text-gray-700">{job.company}</p>
            <div className="flex items-center text-gray-500 mt-4">
              <FaMapMarkerAlt className="mr-2" />
              <p>{job.location}</p>
              <p className="ml-10">{job.type}</p>
            </div>
            <div className="flex items-center text-gray-500 mt-1">
              <FaRupeeSign className="mr-2" />
              <p>{job.salary}</p>
            </div>
            <div className="flex items-center text-gray-500 mt-1">
              <FaBriefcase className="mr-2" />
              <p>{job.experience}</p>
            </div>

            <ul className="list-disc pl-5 mb-2 mt-2">
              {formatDescription(job.description, 3)}
            </ul>
            <div className="border border-t-0 mt-4"></div>
            <div className="flex items-center text-gray-400 mt-4">
          <p className="mr-10">Openings: {job.opening}</p>
          <p>Applicants: {job.application}</p>
        </div>
        <p className="text-gray-400 mt-4">
          Posted: {formatDate(new Date(job.postedDate))}
        </p>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {currentJobs && (
        <div className="flex justify-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="flex items-center justify-center px-3 py-2 border-none border-orange-300 text-orange-600 rounded-l disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft className="text-lg" />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className="list-none">
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`flex items-center justify-center px-3 py-1 border ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-blue-500 border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="flex items-center justify-center px-3 py-2 border-none border-orange-300 text-orange-600 rounded-r disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight className="text-lg" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* Pagination */}
    </div>
  );
};

export default JobList;
