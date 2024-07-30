import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
    {
        id: 4,
        title: 'Data Scientist',
        company: 'Microsoft',
        location: 'Remote',
        type: 'Contract',
        description: 'Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.',
        companyType: 'Tech',
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        id: 5,
        title: 'Data Scientist',
        company: 'Microsoft',
        location: 'Remote',
        type: 'Contract',
        description: 'Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.',
        companyType: 'Tech',
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        id: 6,
        title: 'Data Scientist',
        company: 'Microsoft',
        location: 'Remote',
        type: 'Contract',
        description: 'Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.',
        companyType: 'Tech',
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        id: 7,
        title: 'Data Scientist',
        company: 'Microsoft',
        location: 'Remote',
        type: 'Contract',
        description: 'Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.',
        companyType: 'Tech',
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        id: 8,
        title: 'Data Scientist',
        company: 'Microsoft',
        location: 'Remote',
        type: 'Contract',
        description: 'Analyze data and build predictive models.\nDevelop data pipelines.\nPresent insights to stakeholders.',
        companyType: 'Tech',
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
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

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="Search job titles"
            className="flex-grow p-2 border border-gray-300 rounded sm:border-r sm:rounded-none outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-grow p-2 border border-gray-300 rounded sm:border-r sm:rounded-none outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="flex-grow p-2 border border-gray-300 rounded sm:border-r sm:rounded-none outline-none"
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
            className="p-2 bg-gray-700 text-white rounded"
            onClick={() => {
              setShowResults(true);
              setCurrentPage(1); // Reset to first page on new search
            }}
          >
            Search
          </button>
        </div>
      </div>
      {showResults && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <Link key={job.id} to={`/job/${job.id}`} className="p-4 rounded bg-white shadow-md text-left no-underline hover:no-underline">
                  <div className="cursor-pointer">
                    <h2 className="text-lg font-bold">{job.title}</h2>
                    <p className="text-gray-700">{job.company}</p>
                    <p className="text-gray-700">{job.location}</p>
                    <p className="text-gray-500">{job.type}</p>
                    <ul className="list-disc pl-5 mb-2">
                      {formatDescription(job.description)}
                    </ul>
                    <p className="text-gray-400">{job.companyType} - {formatDate(new Date(job.postedDate))}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No jobs found</p>
            )}
          </div>
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
        </>
      )}
    </div>
  );
};

export default JobSearch;
