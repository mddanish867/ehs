import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../menuDtata/jobs.json";

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
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-700">{job.location}</p>
      <p className="text-gray-500">{job.type}</p>
      <ul className="list-disc pl-5 mb-2">
        {descriptionFormatter(job.description)}
      </ul>
      <p className="text-gray-400">
        {job.companyType} - {dateFormatter(new Date(job.postedDate))}
      </p>
    </div>
  );
};

export default JobDetails;
