import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import CreateTemplate from "./CreateTemplate";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "lucide-react";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleCreateForm = () => {
    navigate("/create-template");
  };
  return (
    <div
      className={`min-h-screen p-5 ${
        theme ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Create form */}
      <h2 className="font-semibold text-start text-lg mb-2">Create form</h2>
      <button
        onClick={handleCreateForm}
        className={`w-40 h-32 flex flex-col items-center justify-center rounded-md border-2 mb-10 ${
          theme
            ? "border-gray-400 hover:border-yellow-400"
            : "border-gray-400 hover:border-blue-500"
        } p-4 cursor-pointer transition-colors duration-300`}
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span
            className={`absolute h-2 w-12 rounded-md ${
              theme ? "bg-orange-500" : "bg-blue-500"
            }`}
          ></span>
          <span
            className={`absolute w-2 h-12 rounded-md ${
              theme ? "bg-orange-500" : "bg-blue-500"
            } `}
          ></span>
        </span>
      </button>
      {/* Recent forms */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Recent Forms</h2>
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              theme
                ? "bg-blue-700 hover:bg-blue-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } transition-colors duration-200`}
          >
            <Table />
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div
            className={`p-4 rounded-md shadow-sm ${
              theme ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            } border hover:shadow-md cursor-pointer transition-shadow duration-200`}
          >
            <h3 className="font-semibold">Form Title</h3>
            <p className="text-sm mt-2">Form description or date</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
