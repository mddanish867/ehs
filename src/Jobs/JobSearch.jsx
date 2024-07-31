import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobList from './JobList'; // Import JobList component
import JobDetails from './JobDetails'; // Import JobDetails component

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const jobsPerPage = 3; // Number of jobs to display per page

  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Amazon',
      location: 'New York',
      type: 'Full-time',
      description: 'Develop and maintain software solutions.\nCollaborate with cross-functional teams.\nParticipate in code reviews.',
      companyType: 'Tech',
      postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Google',
      location: 'San Francisco',
      type: 'Part-time',
      description: 'Manage product lifecycle from ideation to launch.\nConduct market research.\nDefine product vision and strategy.',
      companyType: 'Tech',
      postedDate: new Date() // Today
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Remote',
      type: 'Contract',
      description: 'Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.',
      companyType: 'Tech',
      postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
    },
    // More job data...
  ]);

  const filteredJobs = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.type.toLowerCase().includes(jobType.toLowerCase())
    );
  });

  const formatDate = (date) => {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <li key={index} className="text-gray-600">{line}</li>
    ));
  };

  // Pagination calculations
  const totalJobs = filteredJobs.length;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    if (window.innerWidth <= 768) { // For small devices
      navigate(`/job/${jobId}`);
    } else {
      setSelectedJobId(jobId);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Conditionally render the banner */}
      {!showResults && (
        <div className="mb-6 p-4 bg-blue-100 rounded flex flex-col sm:flex-row items-center">
          <div className="flex-1 text-left">
            <h1 className="text-2xl font-bold text-blue-700">Join Our Team!</h1>
            <p className="text-blue-600">We are looking for talented individuals to join our amazing team. Explore job opportunities and apply now.</p>
          </div>
          <div className="hidden sm:block flex-1">
            <img src="https://via.placeholder.com/400x200" alt="Hiring" className="w-full h-auto object-cover rounded" />
          </div>
        </div>
      )}

      {/* Filter Section */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
          <input
            type="text"
            placeholder="Search job titles"
            className="w-full sm:max-w-xs p-2 border border-gray-300 rounded sm:border-r sm:rounded-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full sm:max-w-xs p-2 border border-gray-300 rounded sm:border-r sm:rounded-none outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="w-full sm:max-w-xs p-2 border border-gray-300 rounded sm:border-r sm:rounded-none outline-none"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
          <button
            className="p-2 lg:w-24 bg-gray-700 text-white rounded"
            onClick={() => {
              setShowResults(true);
              setCurrentPage(1); // Reset to first page on new search
              if (currentJobs.length > 0) {
                setSelectedJobId(currentJobs[0].id); // Select the first job by default
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
          <div className="w-full sm:w-1/3 pr-4">
            <JobList
              jobs={currentJobs}
              selectedJobId={selectedJobId}
              onJobClick={handleJobClick}
            />
          </div>
          
          {/* Job Details */}
          <div className="w-full sm:w-2/3 pl-4">
            {selectedJobId && !window.location.pathname.includes('/job/') && (
              <JobDetails
                job={filteredJobs.find(job => job.id === selectedJobId)}
                formatDescription={formatDescription}
                formatDate={formatDate}
              />
            )}
          </div>
        </div>
      )}

      {/* Pagination */}
      {showResults && (
        <div className="flex justify-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="inline-flex -space-x-px">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3 py-1.5 border border-gray-300 text-gray-500 bg-white rounded-l hover:bg-gray-900 hover:text-white disabled:opacity-50"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-3 py-1.5 border border-gray-300 text-gray-300 bg-white hover:bg-gray-900 hover:text-white ${currentPage === index + 1 ? 'bg-gray-700 hover:bg-gray-900 hover:text-white' : ''}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3 py-1.5 border border-gray-300 text-gray-500 bg-white rounded-r hover:bg-gray-900 hover:text-white disabled:opacity-50"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default JobSearch;
