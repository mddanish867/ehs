import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import jobsData from "../menuDtata/jobs.json";
import Loader from "../Loader/Loader";

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
  const [error, setError] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const searchInputRef = useRef(null);
  const locationInputRef = useRef(null);

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
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        locationInputRef.current &&
        !locationInputRef.current.contains(event.target)
      ) {
        setSearchSuggestions([]);
        setLocationSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filterJobs = () => {
    setLoading(true); // Start loading

    if (!searchTerm && !location && !jobType) {
      setFilteredJobs([]);
      setShowResults(true);
      setSelectedJobId(null);
      setLoading(false); // End loading
      return;
    }

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
    setShowResults(true);
    if (filtered.length === 0) {
      setSelectedJobId(null); // Deselect job if no jobs found
    } else if (filtered.length > 0) {
      setSelectedJobId(filtered[0].id); // Select the first job by default
    }
    
    setLoading(false); // End loading
  };

  const handleSearchTermChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Clear the error message if the user starts typing
    if (value.trim() !== "") {
      setError("");
      // Update search suggestions
      setSearchSuggestions(getSuggestions(value, jobs.map(job => job.title)));
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    // Update location suggestions
    setLocationSuggestions(getSuggestions(value, jobs.map(job => job.location)));
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      setError("Please enter a keyword.");
    } else {
      setError("");
      filterJobs(); // Filter jobs when search button is clicked
      setCurrentPage(1); // Reset to first page on new search
    }
  };

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

  const getSuggestions = (value, data) => {
    const lowerValue = value.toLowerCase();
    const suggestions = data.filter(item => item.toLowerCase().includes(lowerValue));
    // Remove duplicates
    return [...new Set(suggestions)];
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
          <div className="relative flex-grow" ref={searchInputRef}>
            <input
              type="text"
              placeholder={error ? "" : "Search by job, company or skills"}
              className={`w-full flex-grow lg:border-none border p-2 rounded outline-none ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            {error && (
              <div className="absolute top-1/2 p-2 transform -translate-y-1/2 text-red-500 text-sm">
                {error}
              </div>
            )}
            {searchSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-md mt-1 max-h-60 overflow-auto">
                {searchSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSearchTerm(suggestion);
                      setSearchSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="relative flex-grow" ref={locationInputRef}>
            <input
              type="text"
              placeholder="Location"
              className="w-full flex-grow p-2 rounded lg:border-none border border-gray-300 outline-none mt-1 sm:mt-0"
              value={location}
              onChange={handleLocationChange}
            />
            {locationSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-md mt-1 max-h-60 overflow-auto">
                {locationSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLocation(suggestion);
                      setLocationSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex-grow">
            <select
              className="w-full p-2 rounded outline-none text-gray-400 bg-white mt-1 sm:mt-0 pr-10 lg:border-none border border-gray-300"
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
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      {loading && <Loader/>} {/* Show loader when loading */}
      {!loading && !showResults && <p className="text-center text-gray-500">Please enter search criteria.</p>}
      {!loading && showResults && filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No jobs found</p>
      )}
      {!loading && showResults && filteredJobs.length > 0 && (
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
