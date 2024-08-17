import React from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign } from 'react-icons/fa';
import useIsMobile from "../CustomeHooks/useIsMobile"; // Import the custom hook
import { useNavigate } from "react-router-dom";

const RecommendedJobs = ({ jobs = [], currentJobId, onJobClick, formatDescription, formatDate }) => {
  const isMobile = useIsMobile(); // Use the custom hook
  const navigate = useNavigate();

  // Handle job click for either navigation or pagination update
  const handleJobClick = (jobId) => {
    if (isMobile) {
      navigate(`/job/${jobId}`);
    } else {
      onJobClick(jobId); // Call onJobClick for desktop
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Similar Jobs</h2>
      <div className="flex flex-col space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="p-4 cursor-pointer border rounded shadow-md bg-white"
              onClick={() => handleJobClick(job.id)}
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

              <div className="border border-t-0 mt-4"></div>
              <div className="flex items-center text-gray-400 mt-4">
                <p className="mr-10">Openings: {job.opening}</p>
                <p>Applicants: {job.application}</p>
              </div>
              <p className="text-gray-400 mt-4">
                Posted: {formatDate(new Date(job.postedDate))}
              </p>
            </div>
          ))
        ) : (
          <p>No recommended jobs available.</p>
        )}
      </div>
    </div>
  );
};

RecommendedJobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      opening: PropTypes.number,
      application: PropTypes.number,
      postedDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentJobId: PropTypes.number.isRequired,
  onJobClick: PropTypes.func.isRequired,
  formatDescription: PropTypes.func.isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default RecommendedJobs;
