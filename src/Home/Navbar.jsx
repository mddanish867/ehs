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
import menuData from "../menuDtata/menuData.json"; // Import the JSON data
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); // State for login form
  const [activeMenu, setActiveMenu] = useState(null); // Track the currently open menu in mobile view
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLoginForm = () => setIsLoginFormOpen(!isLoginFormOpen); // Toggle login form

  const handleMenuClick = (menuKey) => {
    setActiveMenu(activeMenu === menuKey ? null : menuKey);
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
    //onClose(); // Close the login popup
  };


  const renderMenuItems = (menuKey) => {
    return menuData[menuKey].map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="flex items-center p-2 hover:bg-gray-100"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-cover"
        />
        <div className="ml-4 text-gray-700">{item.title}</div>
      </a>
    ));
  };

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
            {["organizations", "individuals", "resume", "cover letter", "career support"].map(
              (menuKey) => (
                <div key={menuKey} className="relative group">
                  <button className="text-gray-700 hover:text-gray-900 focus:outline-none flex items-center">
                    {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                    <FaAngleDown className="ml-2 group-hover:hidden" />
                    <FaAngleUp className="ml-2 hidden group-hover:block" />
                  </button>
                  <div className="absolute left-0 mt-2 w-96 bg-white shadow-lg hidden group-hover:block">
                    <div className="p-4">{renderMenuItems(menuKey)}</div>
                  </div>
                </div>
              )
            )}            
          </div>
        </div>
        <div className="flex items-center space-x-4 mr-8 lg:mr-20">
          <button
            onClick={toggleLoginForm}
            className="text-blue-500 border border-blue-500 rounded-full font-semibold py-2 px-6 hover:bg-blue-500 hover:text-white text-center focus:outline-none focus:ring-0 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out h-10"
          >
            Login
          </button>
          <button
            onClick={handleRegisterRedirect}
            className="text-white bg-orange-600 rounded-full font-semibold py-2 px-6 hover:bg-white hover:text-orange-600 hover:border hover:border-orange-600 text-center focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out h-10"
          >
            Register
          </button>
          <FaEnvelope className="text-blue-500 hover:text-blue-600 cursor-pointer w-6 h-6 lg:w-14" />
          <FaBell className="text-blue-500 hover:text-blue-600 cursor-pointer w-6 h-6 lg:w-14" />
          <div className="relative group">
            <FaUser className="text-blue-500 hover:text-blue-600 cursor-pointer w-6 h-6 lg:w-14" />
            <div className="absolute right-0 mt-3 w-72 bg-white shadow-lg hidden group-hover:block">
              <div className="p-8">
                <div className="flex items-center space-x-2 mt-2">
                  <div className="text-gray-700 font-semibold">
                    mddanish867@gmail.com
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <SiGoogledocs className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Profile</div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <FaBookmark className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">My Jobs</div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <RiBookmark3Fill className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">My Reviews</div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <IoSettingsSharp className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Settings</div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
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
        className={`fixed inset-0 flex flex-col bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-900">
            <a href="/" className="flex items-center">
              <img src="./logo-black.png" alt="Logo" className="w-24" />
            </a>
          </div>
          <button onClick={toggleMenu} className="text-gray-700">
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
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {["organizations", "individuals", "resume", "cover letter", "career support"].map(
            (menuKey) => (
              <div key={menuKey} className="relative">
                <button
                  onClick={() => handleMenuClick(menuKey)}
                  className="text-gray-700 hover:text-gray-900 flex items-center justify-between w-full"
                >
                  {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                  {activeMenu === menuKey ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {activeMenu === menuKey && (
                  <div className="flex flex-col mt-2 bg-white shadow-lg">
                    {renderMenuItems(menuKey)}
                  </div>
                )}
              </div>
            )
          )}          
        </div>
      </div>

      {/* Login Popup */}
      {isLoginFormOpen && <Login onClose={toggleLoginForm} />}
    </header>
  );
};

export default Navbar;
