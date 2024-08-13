import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import jobsData from "../menuDtata/jobs.json";
import Loader from "../Loader/Loader";

const JobSearch = () => {
  // State for filter values and their suggestions
  const [filters, setFilters] = useState({
    searchTerm: "",
    location: "",
    jobType: "",
  });
  const [status, setStatus] = useState({
    showResults: false,
    loading: false,
    error: "",
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    selectedJobId: null,
  });
  const [suggestions, setSuggestions] = useState({
    search: [],
    location: [],
  });
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const locationInputRef = useRef(null);

  // Initialize job data and filtered jobs on component mount
  useEffect(() => {
    setJobs(jobsData);
    setFilteredJobs(jobsData);
  }, []);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close suggestions when clicking outside of input fields
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        locationInputRef.current &&
        !locationInputRef.current.contains(event.target)
      ) {
        setSuggestions({
          search: [],
          location: [],
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter jobs based on the current filter values
  const filterJobs = () => {
    setStatus((prev) => ({ ...prev, loading: true }));

    const { searchTerm, location, jobType } = filters;
    
    if (!searchTerm && !location && !jobType) {
      setFilteredJobs([]);
      setStatus((prev) => ({ ...prev, showResults: true, loading: false }));
      setPagination((prev) => ({ ...prev, selectedJobId: null }));
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
    setStatus((prev) => ({
      ...prev,
      showResults: true,
      loading: false,
    }));
    setPagination((prev) => ({
      ...prev,
      selectedJobId: filtered.length > 0 ? filtered[0].id : null,
    }));
  };

  // Handle changes in filter inputs
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    if (name === "searchTerm") {
      if (value.trim() !== "") {
        setStatus((prev) => ({ ...prev, error: "" }));
        setSuggestions((prev) => ({
          ...prev,
          search: getSuggestions(value, jobs.map(job => job.title)),
        }));
      } else {
        setSuggestions((prev) => ({ ...prev, search: [] }));
      }
    } else if (name === "location") {
      setSuggestions((prev) => ({
        ...prev,
        location: getSuggestions(value, jobs.map(job => job.location)),
      }));
    }
  };

  // Trigger job filtering and reset pagination when search is clicked
  const handleSearchClick = () => {
    if (filters.searchTerm.trim() === "") {
      setStatus((prev) => ({ ...prev, error: "Please enter a keyword." }));
    } else {
      setStatus((prev) => ({ ...prev, error: "" }));
      filterJobs();
      setPagination((prev) => ({ ...prev, currentPage: 1 }));
    }
  };

  // Format job posting date into a relative time string
  const formatDate = (date) => {
    const now = new Date();
    const postedDate = new Date(date);
    const diff = now - postedDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    return `${days} days ago`;
  };

  // Format job description into a list format
  const formatDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <li key={index} className="text-gray-600">
        {line}
      </li>
    ));
  };

  // Handle job click for either navigation or pagination update
  const handleJobClick = (jobId) => {
    if (isMobile) {
      navigate(`/job/${jobId}`);
    } else {
      setPagination((prev) => ({ ...prev, selectedJobId: jobId }));
    }
  };

  // Generate suggestions for autocomplete
  const getSuggestions = (value, data) => {
    const lowerValue = value.toLowerCase();
    const suggestions = data.filter(item => item.toLowerCase().includes(lowerValue));
    return [...new Set(suggestions)];
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="font-bold text-4xl mt-4 lg:text-5xl lg:mt-10 sm:text-3xl sm:mt-6 sm:ml-4 sm:text-center">
        Find your dream <br className="block sm:hidden" /> employer
        <br className="block sm:hidden" /> now
      </h1>

      <p className="mt-6 mb-5 font-semibold text-left sm:text-center sm:ml-4">
        We are here to make the hiring easy
      </p>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 mb-5 sm:space-x-2 justify-center lg:w-[80%] lg:ml-28 lg:mt-10 lg:mb-16 lg:rounded-full lg:shadow-lg lg:bg-white lg:p-4">
        <div className="flex flex-col sm:flex-row w-full">
          {/* Search Input */}
          <div className="relative flex-grow" ref={searchInputRef}>
            <input
              type="text"
              name="searchTerm"
              placeholder={status.error ? "" : "Search by job, company or skills"}
              className={`w-full flex-grow lg:border-none border p-2 rounded outline-none lg:bg-white ${
                status.error ? "border-red-500" : "border-gray-300"
              }`}
              value={filters.searchTerm}
              onChange={handleFilterChange}
            />
            {status.error && (
              <div className="absolute top-1/2 p-2 transform -translate-y-1/2 text-red-500 text-sm">
                {status.error}
              </div>
            )}
            {suggestions.search.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-md mt-1 max-h-60 overflow-auto">
                {suggestions.search.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFilters((prev) => ({ ...prev, searchTerm: suggestion }));
                      setSuggestions((prev) => ({ ...prev, search: [] }));
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Location Input */}
          <div className="relative flex-grow" ref={locationInputRef}>
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full flex-grow p-2 rounded lg:border-l-1 lg:border-t-0 lg:border-b-0 lg:border-r-1 border border-gray-300 outline-none mt-1 sm:mt-0"
              value={filters.location}
              onChange={handleFilterChange}
            />
            {suggestions.location.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-md mt-1 max-h-60 overflow-auto">
                {suggestions.location.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFilters((prev) => ({ ...prev, location: suggestion }));
                      setSuggestions((prev) => ({ ...prev, location: [] }));
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* Job Type Dropdown */}
          <div className="flex-grow">
            <select
              name="jobType"
              className="w-full p-2 rounded outline-none text-gray-400 bg-white mt-1 sm:mt-0 pr-10 lg:border-none border border-gray-300"
              value={filters.jobType}
              onChange={handleFilterChange}
              style={{ appearance: "none" }}
            >
              <option value="">Job Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            className="p-2 lg:w-24 bg-blue-500 text-white lg:rounded-full mt-1 sm:mt-0 rounded"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      {status.loading && <Loader />} {/* Show loader when loading */}
      {!status.loading && !status.showResults && <p className="text-center text-gray-500">Please enter search criteria.</p>}
      {!status.loading && status.showResults && filteredJobs.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No jobs found</p>
      )}
      {!status.loading && status.showResults && filteredJobs.length > 0 && (
        <div className="flex flex-col sm:flex-row">
          {/* Job List */}
          <div className="w-full lg:w-1/3">
            <JobList
              jobs={filteredJobs}
              selectedJobId={pagination.selectedJobId}
              formatDescription={formatDescription}
              formatDate={formatDate}
              onJobClick={handleJobClick}
            />
          </div>

          {/* Job Details */}
          {!isMobile && pagination.selectedJobId && (
            <div className="w-full sm:w-2/3 pl-4">
              <JobDetails
                job={filteredJobs.find((job) => job.id === pagination.selectedJobId)}
                selectedJobId={pagination.selectedJobId}
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
