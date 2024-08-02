import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import jobsData from "../menuDtata/jobs.json";

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      return (
        (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        job.type.toLowerCase().includes(jobType.toLowerCase())
      );
    });
    setFilteredJobs(filtered);
  }, [searchTerm, location, jobType, jobs]);

  const formatDate = (date) => {
    const now = new Date();
    const postedDate = new Date(date);
    const diff = now - postedDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  const formatDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <li key={index} className="text-gray-600">
        {line}
      </li>
    ));
  };

  const handleJobClick = (jobId) => {
    if (isMobile) {
      navigate(`/job/${jobId}`);
    } else {
      setSelectedJobId(jobId);
    }
  };

  return (
    <div className="p-6">
      <h1 className="font-bold text-4xl mt-4 lg:text-5xl lg:mt-10 sm:text-3xl sm:mt-6 sm:ml-4 sm:text-center">
        Find your dream <br className="block sm:hidden" /> employer{" "}
        <br className="block sm:hidden" /> now
      </h1>

      <p className="mt-6 mb-5 font-semibold text-left sm:text-center sm:ml-4">
        We are here to make the hiring easy
      </p>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 mb-5 sm:space-x-2 justify-center lg:w-[80%] lg:ml-28 lg:mt-10 lg:mb-16 lg:rounded-full lg:shadow-lg lg:bg-white lg:p-4">
        <div className="flex flex-col sm:flex-row w-full">
          <input
            type="text"
            placeholder="Search by job, company or skills"
            className="flex-grow p-2 sm:border-none border border-gray-300 rounded outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-grow p-2 border border-gray-300 rounded outline-none mt-1 sm:mt-0 lg:border-b-0 lg:border-t-0 lg:border-gray-300"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="flex-grow">
            <select
              className="w-full p-2 sm:border-none border border-gray-300 rounded outline-none text-gray-400 bg-white mt-1 sm:mt-0 pr-10"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              style={{ appearance: "none" }}
            >
              <option value="">Job Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <button
            className="p-2 lg:w-24 bg-gray-700 text-white lg:rounded-full mt-1 sm:mt-0 sm:rounded"
            onClick={() => {
              setShowResults(true);
              setCurrentPage(1); // Reset to first page on new search
              if (filteredJobs.length > 0) {
                setSelectedJobId(filteredJobs[0].id); // Select the first job by default
              }
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      {showResults && (
        <div className="flex flex-col sm:flex-row">
          {/* Job List */}
          <div className="w-full lg:w-1/3">
            <JobList
              jobs={filteredJobs}
              selectedJobId={selectedJobId}
              formatDescription={formatDescription}
              formatDate={formatDate}
              onJobClick={handleJobClick}
            />
          </div>

          {/* Job Details */}
          {!isMobile && selectedJobId && (
            <div className="w-full sm:w-2/3 pl-4">
              <JobDetails
                job={filteredJobs.find((job) => job.id === selectedJobId)}
                selectedJobId={selectedJobId}
                formatDescription={formatDescription}
                formatDate={formatDate}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearch;
