import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Registration = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
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
    setError("");
    setLoading(true);

    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passworsd do not match!");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      const isAdmin = email === "admin@gmail.com";

      allUsers.push({
        username,
        email,
        isAdmin,
      });
      localStorage.setItem("allUsers", JSON.stringify(allUsers));

      login({ username, email, isAdmin: email === "admin@gmail.com" });
      setLoading(false);
      navigate(isAdmin ? "/admin-dashboard" : "/profile");
    }, 1000);
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
        <h2 className="mt-5 text-center text-2xl font-bold">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
          <label htmlFor="username" className="text-sm font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            disabled={loading}
            className="w-full rounded-md bg-white px-3 py-2 outline-1 outline-gray-400 placeholder:text-gray-400 focus:outline-blue-600 sm:text-sm"
          />

          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled={loading}
            className="w-full rounded-md bg-white px-3 py-2  outline-1 outline-gray-400 placeholder:text-gray-400 focus:outline-blue-600 sm:text-sm"
          />

          <label className="text-sm font-medium">Password</label>
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            disabled={loading}
            className="w-full rounded-md bg-white px-3 py-2  outline-1 outline-gray-400 placeholder:text-gray-400 focus:outline-blue-600 sm:text-sm"
          />

          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm password
          </label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            disabled={loading}
            className="w-full rounded-md bg-white px-3 py-2  outline-1 outline-gray-400 placeholder:text-gray-400 focus:outline-blue-600 sm:text-sm"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              <span>{loading ? "Creating account..." : "Sign Up"}</span>
            </button>
          </div>
        </form>

        <div className="mt-10 flex items-center justify-between text-sm">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
