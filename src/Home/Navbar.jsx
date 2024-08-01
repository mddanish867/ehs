import React, { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaUser,
  FaBookmark,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { RiBookmark3Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { TbHelpSquareFilled } from "react-icons/tb";
import Login from "../Authentication/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); // State for login form

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLoginForm = () => setIsLoginFormOpen(!isLoginFormOpen); // Toggle login form

    return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-900 ml-4">
            <a href="/" className="flex items-center">
              <img src="./logo-black.png" alt="Logo" className="w-24" />
            </a>
          </div>
          <div className="hidden md:flex space-x-6 ml-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center">
                Organizations
                <FaAngleDown className="ml-2 group-hover:hidden" />
                <FaAngleUp className="ml-2 hidden group-hover:block" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg hidden group-hover:block">
                <div className="p-4">
                  <a
                    href="#"
                    className="flex items-center p-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="POST A JOB"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Post new jobs</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="FIND NEW TALENTS"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Find new talents</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 3"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 3</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center">
                Individuals
                <FaAngleDown className="ml-2 group-hover:hidden" />
                <FaAngleUp className="ml-2 hidden group-hover:block" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg hidden group-hover:block">
                <div className="p-4">
                  <a
                    href="#"
                    className="flex items-center p-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 1"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 1</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 2"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 2</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 3"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 3</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center">
                Resume
                <FaAngleDown className="ml-2 group-hover:hidden" />
                <FaAngleUp className="ml-2 hidden group-hover:block" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg hidden group-hover:block">
                <div className="p-4">
                  <a
                    href="#"
                    className="flex items-center p-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 1"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 1</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 2"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 2</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 3"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 3</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center">
                Solutions
                <FaAngleDown className="ml-2 group-hover:hidden" />
                <FaAngleUp className="ml-2 hidden group-hover:block" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg hidden group-hover:block">
                <div className="p-4">
                  <a
                    href="#"
                    className="flex items-center p-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 1"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 1</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 2"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 2</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-2 mt-2 hover:bg-gray-100"
                  >
                    <img
                      src="https://via.placeholder.com/100"
                      alt="Feature 3"
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4 text-gray-700">Feature 3</div>
                  </a>
                </div>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4 mr-8 lg:mr-20">
          <button 
          onClick={toggleLoginForm}
          className="text-gray-700 font-semibold py-2 px-6 hover:gray-900 focus:outline-none focus:ring-0 focus:ring-gray-700 focus:ring-opacity-50 transition duration-300 ease-in-out h-10">
            Login
          </button>
          <FaEnvelope className="text-gray-700 hover:text-gray-900 cursor-pointer w-6 h-6 lg:w-14" />
          <FaBell className="text-gray-700 hover:text-gray-900 cursor-pointer w-6 h-6 lg:w-14" />
          <div className="relative group">
            <FaUser className="text-gray-700 hover:text-gray-900 cursor-pointer w-6 h-6 lg:w-14" />
            <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg hidden group-hover:block">
              <div className="p-4">
                <div className="flex items-center space-x-2 mt-2">
                  <div className="text-gray-700 font-semibold">
                    mddanish867@gmail.com
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <SiGoogledocs className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Profile</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <FaBookmark className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">My Jobs</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <RiBookmark3Fill className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">My Reviews</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <IoSettingsSharp className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Settings</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <TbHelpSquareFilled className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Help Center</div>
                </div>
                <div className="border-t mt-4"></div>
                <a
                  href="#"
                  className="block text-center mt-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg p-2"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 flex flex-col bg-white shadow-lg z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          className="text-gray-700 hover:text-gray-900 focus:outline-none p-4"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="p-4">
          <div className="relative group mb-4">
            <button
              className="w-full text-gray-700 hover:text-gray-900 flex items-center justify-between"
              onClick={() =>
                document.getElementById("org-menu").classList.toggle("hidden")
              }
            >
              ORGANIZATIONS
              <FaAngleDown className="ml-2" />
            </button>
            <div id="org-menu" className="hidden bg-white shadow-lg">
              <a href="#" className="flex items-center p-2 hover:bg-gray-100">
                <img
                  src="https://via.placeholder.com/100"
                  alt="POST A JOB"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">POST A JOB</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="FIND NEW TALENTS"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">FIND NEW TALENTS</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 3"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 3</div>
              </a>
            </div>
          </div>
          <div className="relative group mb-4">
            <button
              className="w-full text-gray-700 hover:text-gray-900 flex items-center justify-between"
              onClick={() =>
                document.getElementById("ind-menu").classList.toggle("hidden")
              }
            >
              INDIVIDUALS
              <FaAngleDown className="ml-2" />
            </button>
            <div id="ind-menu" className="hidden bg-white shadow-lg">
              <a href="#" className="flex items-center p-2 hover:bg-gray-100">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 1"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 1</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 2"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 2</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 3"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 3</div>
              </a>
            </div>
          </div>
          <div className="relative group mb-4">
            <button
              className="w-full text-gray-700 hover:text-gray-900 flex items-center justify-between"
              onClick={() =>
                document
                  .getElementById("resume-menu")
                  .classList.toggle("hidden")
              }
            >
              RESUME
              <FaAngleDown className="ml-2" />
            </button>
            <div id="resume-menu" className="hidden bg-white shadow-lg">
              <a href="#" className="flex items-center p-2 hover:bg-gray-100">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 1"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 1</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 2"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 2</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 3"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 3</div>
              </a>
            </div>
          </div>
          <div className="relative group mb-4">
            <button
              className="w-full text-gray-700 hover:text-gray-900 flex items-center justify-between"
              onClick={() =>
                document
                  .getElementById("solutions-menu")
                  .classList.toggle("hidden")
              }
            >
              SOLUTIONS
              <FaAngleDown className="ml-2" />
            </button>
            <div id="solutions-menu" className="hidden bg-white shadow-lg">
              <a href="#" className="flex items-center p-2 hover:bg-gray-100">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 1"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 1</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 2"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 2</div>
              </a>
              <a
                href="#"
                className="flex items-center p-2 mt-2 hover:bg-gray-100"
              >
                <img
                  src="https://via.placeholder.com/100"
                  alt="Feature 3"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4 text-gray-700">Feature 3</div>
              </a>
            </div>
          </div>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            CONTACT US
          </a>
        </div>
      </div>
      {/* Login Form Modal */}
      {isLoginFormOpen && <Login onClose={toggleLoginForm} />} {/* Include LoginForm here */}
    </header>
  );
};

export default Navbar;
