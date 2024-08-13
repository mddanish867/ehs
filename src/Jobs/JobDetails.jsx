import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../menuDtata/jobs.json";
import { FcFlashAuto } from "react-icons/fc";

import {
  FaBookmark,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa"; // Import icons

const JobDetails = ({ formatDescription, formatDate, selectedJobId }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [job, setJob] = useState(null); // Initialize as null
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let foundJob;
    if (isMobile) {
      foundJob = jobsData.find((job) => job.id === parseInt(id, 10));
    } else {
      foundJob = jobsData.find((job) => job.id === selectedJobId);
    }
    setJob(foundJob);
  }, [id, selectedJobId, isMobile]); // Dependencies for the effect

  if (!job) return <p>Job not found.</p>;

  const descriptionFormatter =
    formatDescription ||
    ((desc) =>
      desc.split("\n").map((line, index) => (
        <li key={index} className="text-gray-600">
          {line}
        </li>
      )));
  const dateFormatter =
    formatDate || ((date) => new Date(date).toLocaleDateString());

  return (    
    <div className="p-4 rounded bg-white shadow-md">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-700 text-xl font-semibold">{job.company}</p>
      <div className="flex items-center text-gray-500 mt-4">
        <FaMapMarkerAlt className="mr-2" />
        <p>{job.location}</p>
      </div>
      <div className="flex items-center text-gray-500">
        <FaBriefcase className="mr-2" />
        <p>{job.type}</p>
      </div>

      {/* Buttons in a row for desktop */}
      <div
        className={`flex flex-wrap space-x-4 mt-4 ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <button className="flex items-center space-x-2 lg:text-white lg:bg-blue-500 lg:hover:text-white bg-blue-600 text-white mb-2 rounded p-3">
          <FcFlashAuto />
          <span className="hidden sm:inline">Power Edit</span>
          <span className="inline sm:hidden">Power Edit</span>
        </button>
        <button className="flex items-center space-x-2 p-2 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded mb-2">
          <FaBookmark />
          <span className="hidden sm:inline">Save Job</span>
          <span className="inline sm:hidden">Save</span>
        </button>
        <button className="flex items-center space-x-2 text-blue-500  hover:text-blue-600 mb-2">
          <FaPaperPlane />
          <span className="hidden sm:inline">Apply</span>
          <span className="inline sm:hidden">Apply</span>
        </button>
      </div>

      {/* Buttons in mobile view */}
      <div
        className={`flex flex-wrap space-x-4 mt-4 ${
          isMobile ? "block" : "hidden"
        }`}
      >
        <button className="flex items-center space-x-2 text-blue-500 bg-white hover:text-white hover:bg-blue-500 border border-blue-300 hover:border-blue-500 p-2 mb-2 ">
          <FcFlashAuto />
          <span className="hidden sm:inline">Power Edit</span>
          <span className="inline sm:hidden">Power Edit</span>
        </button>
        <button className="flex items-center space-x-2 p-2 text-white bg-blue-500 border border-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 rounded mb-2">
          <FaBookmark />
          <span className="hidden sm:inline">Save Job</span>
          <span className="inline sm:hidden">Save</span>
        </button>
        
      </div>

      {/* Fixed bottom button for mobile */}
      <div
        className={`fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300 flex justify-center ${
          isMobile ? "block" : "hidden"
        }`}
      >
        <button className="flex items-center space-x-2 lg:text-blue-500 lg:bg-white lg:hover:text-blue-700 bg-orange-600 text-white mb-2 rounded p-3 w-full">
          <FaPaperPlane className="ml-28" />
          <span className="hidden sm:inline">Apply</span>
          <span className="inline sm:hidden">Apply</span>
        </button>
      </div>

      <div className="border-t border-gray-300 mt-4"></div> {/* Horizontal border */}
      <p className="text-gray-500 mt-6 hidden sm:block">{job.title}</p>
      <br />
      <p className="text-gray-500 -mt-5 hidden sm:block">{job.company}</p>
      <ul className="list-disc pl-5 mb-2 mt-4">
        {descriptionFormatter(job.description)}
      </ul>
      <p className="text-gray-400">
        {job.companyType} - {dateFormatter(new Date(job.postedDate))}
      </p>
    </div>
  );
};

export default JobDetails;
