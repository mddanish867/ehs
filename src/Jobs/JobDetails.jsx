import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../menuDtata/jobs.json";
import { LiaEditSolid } from "react-icons/lia";
import {
  FaBookmark,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRupeeSign,
} from "react-icons/fa";
import useIsMobile from "../CustomeHooks/useIsMobile";
import useIsScroll from "../CustomeHooks/useIsScroll";
import RecommendedJobs from "../Recommendation/RecommendedJobs"; // Import the RecommendedJobs component

const JobDetails = ({
  formatDescription,
  formatDate,
  selectedJobId,
  formatBenefits = (benefits) =>
    benefits.split(".").map((line, index) => (
      <li key={index} className="text-gray-600">{line}</li>
    )),
  formatEducations = (education) =>
    education.split(".").map((line, index) => (
      <li key={index} className="text-gray-600">{line}</li>
    )),
  formatSkills = (skill) =>
    skill.split(".").map((line, index) => (
      <li key={index} className="text-gray-600">{line}</li>
    )),
}) => {
  const isMobile = useIsMobile();
  const [job, setJob] = useState(null);
  const { id } = useParams();
  const showBottomHeader = useIsScroll();

  useEffect(() => {
    let foundJob;
    if (isMobile) {
      foundJob = jobsData.find((job) => job.id === parseInt(id, 10));
    } else {
      foundJob = jobsData.find((job) => job.id === selectedJobId);
    }
    setJob(foundJob);
  }, [id, selectedJobId, isMobile]);

  if (!job) return <p>Job not found.</p>;

  const descriptionFormatter =
    formatDescription ||
    ((desc) =>
      desc.split(".").map((line, index) => (
        <li key={index} className="text-gray-600">
          {line}
        </li>
      )));

  const benefitsFormatter =
    formatBenefits ||
    ((benefits) =>
      benefits.split(".").map((line, index) => (
        <li key={index} className="text-gray-600">
          {line}
        </li>
      )));

  const educationFormatter =
    formatEducations ||
    ((education) =>
      education.split(".").map((line, index) => (
        <li key={index} className="text-gray-600">
          {line}
        </li>
      )));

  const skillFormatter =
    formatSkills ||
    ((skill) =>
      skill.split(".").map((line, index) => (
        <li key={index} className="text-gray-600">
          {line}
        </li>
      )));

  const dateFormatter =
    formatDate || ((date) => new Date(date).toLocaleDateString());

  return (
    <>
      <div className="p-4 rounded bg-white shadow-md mt-4">
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-gray-700 text-lg">{job.company}</p>
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
        <p className="text-gray-500 mt-4 p-0">
          Posted: {dateFormatter(new Date(job.postedDate))}
        </p>
        <div
          className={`flex flex-wrap space-x-4 mt-4 ${
            isMobile ? "hidden" : "block"
          }`}
        >
          <button className="flex items-center font-semibold space-x-2 lg:text-blue-500 border border-blue-500 lg:bg-white  lg:hover:text-blue-500 bg-blue-600 text-white mb-2 rounded p-2">
            <LiaEditSolid className="text-orange-600"/>
            <span className="hidden sm:inline">Power Edit</span>
            <span className="inline sm:hidden">Power Edit</span>
          </button>
          <button className="flex items-center font-semibold space-x-2 p-2 text-white lg:bg-blue-500  hover:bg-blue-500 hover:text-white rounded mb-2">
            <FaBookmark />
            <span className="hidden sm:inline">Save Job</span>
            <span className="inline sm:hidden">Save</span>
          </button>
          <button className="flex items-center font-semibold space-x-2 text-blue-500  hover:text-blue-600 mb-2">
            <FaPaperPlane />
            <span className="hidden sm:inline">Apply</span>
            <span className="inline sm:hidden">Apply</span>
          </button>        
        </div>
        <div
          className={`flex flex-wrap space-x-4 mt-4 font-semibold ${
            isMobile ? "block" : "hidden"
          }`}
        >
          <button className="flex items-center space-x-2 text-blue-500 bg-white hover:text-white hover:bg-blue-500 rounded border border-blue-300 hover:border-blue-500 p-2 mb-2 ">
            <LiaEditSolid className="text-orange-500" />
            <span className="hidden sm:inline">Power Edit</span>
            <span className="inline sm:hidden">Power Edit</span>
          </button>
          <button className="flex items-center space-x-2 p-2 text-white bg-blue-500 border border-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 rounded mb-2">
            <FaBookmark />
            <span className="hidden sm:inline">Save Job</span>
            <span className="inline sm:hidden">Save</span>
          </button>
        </div>
        {showBottomHeader && (
          <div
            className={`fixed bottom-0 left-0 w-full p-8 rounded-t-2xl bg-white shadow shadow-blue-500 flex text-center ${
              isMobile ? "block" : "hidden"
            }`}
          >
            <button className="flex items-center space-x-2 lg:text-blue-500 lg:bg-white lg:hover:text-blue-700 bg-orange-600 text-white mb-2 rounded p-3 w-full ">
              <FaPaperPlane className="ml-28" />
              <span className="hidden sm:inline">Apply</span>
              <span className="inline sm:hidden">Apply</span>
            </button>
          </div>
        )}
        <div className="border-t border-gray-300 mt-4"></div>
        <p className="text-gray-500 mt-6 hidden sm:block">{job.title}</p>
        <br />
        <p className="text-gray-500 -mt-5 hidden sm:block">{job.company}</p>
        <ul className="text-gray-500 list-disc pl-5 mb-2 mt-4">
          <b>Job Descriptions:</b> {descriptionFormatter(job.description)}
        </ul>
        <ul className="text-gray-500 list-disc pl-5 mb-2 mt-4">
          <b>Benefits:</b> {benefitsFormatter(job.benefits)}
        </ul>
        <div className="p-2">
          <p className="text-gray-500 mt-4">
            <b>Roll:</b> {job.title}
          </p>
          <p className="text-gray-500">
            <b>Location Type:</b> {job.location}
          </p>
          <p className="text-gray-500">
            <b>Experience Required:</b> {job.experience}
          </p>
          <p className="text-gray-500">
            <b>Schedule:</b> {job.shift}
          </p>
          <p className="text-gray-500">
            <b>Industry Type:</b> {job.companyType}
          </p>
          <p className="text-gray-500">
            <b>Department:</b> {job.department}
          </p>
          <p className="text-gray-500">
            <b>Employment Type:</b> {job.type}
          </p>
          <p className="text-gray-500">
            <b>Role Category:</b> {job.title}
          </p>
        </div>
        <div className="mt-4 p-2">
          <p className="text-gray-500">
            <b>Education:</b> {educationFormatter(job.education)}
          </p>
        </div>
        <div className="mt-4 p-2">
          <p className="text-gray-500">
            <b>Skills Required:</b> {skillFormatter(job.skills)}
          </p>
        </div>
        <div className="mt-4 p-2">
          <p className="text-gray-500">
            <b>Interested candidates can also share CV at: {job.email}</b>
          </p>
        </div>
        <div className="mt-10 p-2">
          <p className="text-gray-500">
            About Company:
            <br />
            {job.aboutcompany}
          </p>
        </div>        
        </div>
        {/* Add RecommendedJobs component */}
        <RecommendedJobs jobs={job} dateFormatter={dateFormatter}/>
    </>
  );
};

export default JobDetails;
