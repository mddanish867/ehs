import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "./JobList"; // Import JobList component
import JobDetails from "./JobDetails"; // Import JobDetails component
import { FaChevronDown } from "react-icons/fa6";
const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Amazon",
      location: "New York",
      type: "Full-time",
      description:
        "Develop and maintain software solutions.\nCollaborate with cross-functional teams.\nParticipate in code reviews.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Google",
      location: "San Francisco",
      type: "Part-time",
      description:
        "Manage product lifecycle from ideation to launch.\nConduct market research.\nDefine product vision and strategy.",
      companyType: "Tech",
      postedDate: new Date(), // Today
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Remote",
      type: "Contract",
      description:
        "Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Remote",
      type: "Contract",
      description:
        "Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Remote",
      type: "Contract",
      description:
        "Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Remote",
      type: "Contract",
      description:
        "Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: 7,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Remote",
      type: "Contract",
      description:
        "Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      id: 8,
      title: "Data Scientist",
      company: "Microsoft",
      location: "Remote",
      type: "Contract",
      description:
        "Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.",
      companyType: "Tech",
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
  ]);

  const filteredJobs = jobs.filter((job) => {
    return (
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.type.toLowerCase().includes(jobType.toLowerCase())
    );
  });

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
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

  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    if (isMobile) {
      // For mobile devices, navigate to the job details page
      navigate(`/job/${jobId}`);
    } else {
      // For larger devices, show details in the same page
      setSelectedJobId(jobId);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="mb-4 lg:bg-gradient-to-r lg:from-gray-600 lg:via-gray-900 lg:to-gray-600 lg:p-14">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-0 justify-center lg:rounded-full lg:shadow-lg lg:bg-white lg:p-2">
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
              className="flex-grow p-2 sm:border-none border border-gray-300 rounded outline-none mt-1 sm:mt-0"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <div className="relative flex-grow">
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

              {/* Custom dropdown icon */}
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                <FaChevronDown className="text-gray-400" />
              </div>
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
