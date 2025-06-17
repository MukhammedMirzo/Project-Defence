import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Registration = () => {
  const { login, user } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    login({ username: formData.username, email: formData.email });
  };

  if (user) {
    return (
      <div>
        <h2>Welcome, {user.username}</h2>
        <p>You are logged in with {user.email}</p>
      </div>
    );
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center font-semibold text-amber-600">MyForm</h2>
        <h2 className="mt-5 text-center text-2xl font-bold ">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <label htmlFor="username" className=" text-sm font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full rounded-md bg-white px-3 py-2  outline-1  outline-gray-400 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
          />
          <label htmlFor="email" className=" text-sm font-medium">
            Email address
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-md bg-white px-3 py-2  outline-1  outline-gray-400 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
          />

          <label className="text-sm font-medium">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full rounded-md bg-white px-3 py-2   outline-1  outline-gray-400 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
          />
          <label htmlFor="confirm-passsword" className=" text-sm font-medium">
            Confirm password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmpassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full rounded-md bg-white px-3 py-2   outline-1  outline-gray-400 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
          />
          {error && <p>{error}</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-10 flex items-center justify-between text-sm ">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            Sing In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
