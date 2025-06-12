import React, { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() && password.trim().length >= 4) {
      login({ username: userName });
      navigate("/profile");
    } else {
      alert("Please enter valid username and password (min 4 characters)");
    }
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center font-semibold text-amber-600">MyForm</h2>
        <h2 className="mt-5 text-center text-2xl font-bold ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="POST" className="space-y-5">
          <div>
            <label htmlFor="email" className=" text-sm font-medium">
              Email address
            </label>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-md bg-white px-3 py-2  outline-1  outline-gray-400 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className=" text-sm font-medium">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-md bg-white px-3 py-2   outline-1  outline-gray-400 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-10 flex items-center justify-between text-sm ">
          Don't have an account?
          <a
            href="#"
            className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
          >
            Sing up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
