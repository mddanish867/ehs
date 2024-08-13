import React, { useState } from 'react';
import { FaLinkedin  } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /\S+@\S+\.\S+/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!termsAccepted) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle login logic here
      console.log('Login data submitted', formData);
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login
    console.log('Google login');
  };

  const handleWhatsAppLogin = () => {
    // Handle WhatsApp login
    console.log('WhatsApp login');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
    onClose(); // Close the login popup
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-40" 
        onClick={onClose}
      ></div>
      
      {/* Login popup */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative mx-4 sm:mx-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
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
          <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded focus:outline-blue-500 pl-3 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="relative mb-6">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 border focus:outline-blue-500  rounded pl-3 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs">
                  {errors.password}
                </div>
              )}
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I accept the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
              </label>
            </div>
            {errors.terms && (
              <div className="text-red-500 text-xs mb-4">
                {errors.terms}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-between my-6">
            <div className="w-full border-t border-gray-300"></div>
            <span className="text-gray-600 mx-4">OR</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center bg-white text-blue-500 py-2 rounded-lg border border-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Login with Google
            </button>

            <button
              onClick={handleWhatsAppLogin}
              className="w-full flex items-center justify-center bg-white text-blue-500 py-2 rounded-lg border border-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              Login with WhatsApp
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={handleRegisterRedirect}
                className="text-blue-500 hover:underline"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
