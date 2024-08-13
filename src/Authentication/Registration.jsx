import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    resume: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle registration logic here
      console.log("Form data submitted", formData);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md -mt-52 sm:-mt-12">
        <h2 className="text-2xl font-bold mb-6 lg:text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs ${!errors.name ? 'invisible' : ''}`}>
              {errors.name}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-blue-500 pl-3 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={!errors.name ? "Name" : ""}
            />
          </div>
          <div className="relative mb-4">
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs ${!errors.email ? 'invisible' : ''}`}>
              {errors.email}
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-blue-500 pl-3 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={!errors.email ? "Email" : ""}
            />
          </div>
          <div className="relative mb-4">
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs ${!errors.password ? 'invisible' : ''}`}>
              {errors.password}
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-blue-500 pl-3 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={!errors.password ? "Password" : ""}
            />
          </div>
          <div className="relative mb-4">
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs ${!errors.confirmPassword ? 'invisible' : ''}`}>
              {errors.confirmPassword}
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-blue-500 pl-3 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={!errors.confirmPassword ? "Confirm Password" : ""}
            />
          </div>
          <div className="relative mb-4">
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs ${!errors.mobile ? 'invisible' : ''}`}>
              {errors.mobile}
            </div>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className={`w-full p-2 border rounded focus:outline-blue-500 pl-3 ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={!errors.mobile ? "Mobile Number" : ""}
            />
          </div>
          <div className="relative mb-4">
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className={`w-full p-2 border focus:outline-blue-500 rounded ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}
            />
            <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 px-2 text-red-500 text-xs ${!errors.resume ? 'invisible' : ''}`}>
              {errors.resume}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className={`mr-2 focus:outline-blue-500 ${errors.terms ? 'border-red-500' : 'border-gray-300'}`}
            />
            <label htmlFor="terms" className={`text-sm ${errors.terms ? 'text-red-500' : 'text-gray-700'}`}>
              <span className="text-gray-700">I agree to the</span> <a href="#" className="text-blue-500 hover:underline">terms</a> <span className="text-gray-700 mr-1">and</span>
              <a href="#" className="text-blue-500 hover:underline">conditions</a>
            </label>
            {errors.terms && (
              <div className="text-red-500 text-xs ml-2">
                {errors.terms}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Register
          </button>
        </form>
        {/* <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={handleLoginRedirect}
              className="text-blue-500 hover:underline"
            >
              Login here
            </button>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Registration;
