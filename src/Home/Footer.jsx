import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import social media icons

const footerData = {
  organizations: [
    { title: "Post New Jobs", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Find New Talents", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Track Jobs", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Track Referrals", image: "https://via.placeholder.com/100", link: "#" }
  ],
  individuals: [
    { title: "Find Jobs", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Refer Your Friends", image: "https://via.placeholder.com/100", link: "#" },
    { title: "ATS Resume", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Resume Tailor", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Join Our Database", image: "https://via.placeholder.com/100", link: "#" }
  ],
  resume: [
    { title: "Resume Scan", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Resume Bullets Point Generator", image: "https://via.placeholder.com/100", link: "#" },
    { title: "AI Resume Tools", image: "https://via.placeholder.com/100", link: "#" },
    { title: "LinkedIn Optimization", image: "https://via.placeholder.com/100", link: "#" },
    { title: "ATS Resume", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Resume Tailor", image: "https://via.placeholder.com/100", link: "#" }
  ],
  coverLetter: [
    { title: "Cover Letter Generator", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Cover Letter Templates", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Cover Letter Formatter", image: "https://via.placeholder.com/100", link: "#" }
  ],
  careerSupport: [
    { title: "Interview Preparation", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Roadmaps", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Resources", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Projects", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Companies Reviews", image: "https://via.placeholder.com/100", link: "#" },
    { title: "Salary Guide", image: "https://via.placeholder.com/100", link: "#" }
  ]
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Links Sections */}
        <div className="flex flex-wrap md:flex-nowrap md:justify-between mb-6">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 capitalize">Organizations</h3>
            <ul className="text-sm">
              {footerData.organizations.map((item) => (
                <li key={item.title} className="mb-2">
                  <a href={item.link} className="flex items-center space-x-2 hover:underline">
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 capitalize">Individuals</h3>
            <ul className="text-sm">
              {footerData.individuals.map((item) => (
                <li key={item.title} className="mb-2">
                  <a href={item.link} className="flex items-center space-x-2 hover:underline">
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 capitalize">Resume</h3>
            <ul className="text-sm">
              {footerData.resume.map((item) => (
                <li key={item.title} className="mb-2">
                  <a href={item.link} className="flex items-center space-x-2 hover:underline">
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 capitalize">Cover Letter</h3>
            <ul className="text-sm">
              {footerData.coverLetter.map((item) => (
                <li key={item.title} className="mb-2">
                  <a href={item.link} className="flex items-center space-x-2 hover:underline">
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 capitalize">Career Support</h3>
            <ul className="text-sm">
              {footerData.careerSupport.map((item) => (
                <li key={item.title} className="mb-2">
                  <a href={item.link} className="flex items-center space-x-2 hover:underline">
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
