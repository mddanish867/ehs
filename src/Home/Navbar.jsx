import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import BottomHeader from "./BottomHeader"; // Import the BottomHeader component
import useIsMobile from "../CustomeHooks/useIsMobile"; // Import the custom hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); // State for login form
  const [activeMenu, setActiveMenu] = useState(null); // Track the currently open menu in mobile view
  const [showBottomHeader, setShowBottomHeader] = useState(true); // State for showing/hiding BottomHeader
  const isMobile = useIsMobile(); // Use the custom hook

  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
    setIsOpen(false);
  }; // Toggle login form

  const handleMenuClick = (menuKey) => {
    setActiveMenu(activeMenu === menuKey ? null : menuKey);
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
    if (isMobile) {
      setIsOpen(false);
    }
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

  // Scrolling function
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setShowBottomHeader(false);
      } else {
        // Scrolling up
        setShowBottomHeader(true);
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between lg:py-0 h-20">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-900 ml-6">
            <a href="/" className="flex items-center">
              <img src="./logo-no-background.png" alt="Logo" className="w-16" />
            </a>
          </div>
          <div className="hidden md:flex space-x-6 ml-14">
            {[
              "organizations",
              "individuals",
              "resume",
              "cover letter",
              "career support",
            ].map((menuKey) => (
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
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4 mr-8 lg:mr-20">
          {/* Buttons for desktop view */}
          <div className="hidden md:flex items-center justify-center space-x-4 bg-orange-600 rounded-full px-4 py-1">
            <button
              onClick={toggleLoginForm}
              className="text-white font-semibold py-1 text-center focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Login
            </button>

            <span className="text-white">/</span>

            <button
              onClick={handleRegisterRedirect}
              className="text-white font-semibold py-1 text-center focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div>

          <div className="hidden md:flex relative group">
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
                  <FaBell className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Notifications</div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <FaEnvelope className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Message</div>
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
                  href="/"
                  className="block text-center mt-2 text-sm text-white bg-blue-500 hover:bg-blue-500 rounded-lg p-2"
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
        <div className="flex justify-between items-center px-4">
          <div className="text-2xl font-bold text-gray-900 -ml-4">
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
        {/* Buttons for mobile view */}
        <div className="flex items-center justify-center space-x-4 rounded-full py-2">
          <button
            onClick={toggleLoginForm}
            className="text-blue-500 bg-white border border-blue-500 rounded-full p-10 font-semibold py-1 text-center focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Login
          </button>

          <span className="text-white">/</span>

          <button
            onClick={handleRegisterRedirect}
            className="text-orange-600 bg-white border border-orange-600 rounded-full p-10 font-semibold py-1 text-center focus:outline-none focus:ring-0 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
          >
            Register
          </button>
        </div>

        {/* profile for mobile view*/}
        {/* <div className="flex group ml-4">
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
                  <FaBell className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Notifications</div>
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <FaEnvelope className="text-gray-700 w-6 h-6" />
                  <div className="ml-2 text-gray-700">Message</div>
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
                  className="block text-center mt-2 text-sm text-white bg-blue-500 hover:bg-blue-500 rounded-lg p-2"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div> */}

        {/* menus for mobile view*/}
        <div className="flex flex-col p-4 space-y-4">
          {[
            "organizations",
            "individuals",
            "resume",
            "cover letter",
            "career support",
          ].map((menuKey) => (
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
          ))}
        </div>
      </div>

      {/* Login Popup */}
      {isLoginFormOpen && <Login onClose={toggleLoginForm} />}

      {/* Bottom Header */}
      {showBottomHeader && <BottomHeader toggleLoginForm={toggleLoginForm} />}
    </header>
  );
};

export default Navbar;
