import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import formLogo from "../assets/Icons/logo-48.svg";
import {
  Star,
  Palette,
  Eye,
  Redo2,
  PlusCircle,
  Undo2,
  Link2,
} from "lucide-react";
import { ThemeContext } from "../Context/ThemeContext";

const CreateTemplate = () => {
  const { theme } = useContext(ThemeContext);
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    setQuestions((prev) => !prev);
  };

  return (
    <div
      className={` min-h-screen rounded-md ${
        theme ? `text-white bg-gray-800 ` : ` bg-purple-50 text-gray-900`
      }`}
    >
      {/* Tools */}
      <div
        className={`stick y mx-auto p-4 flex items-center justify-between ${
          theme ? `text-white bg-blue-800 ` : `text-white bg-purple-500`
        }`}
      >
        {/* Left side */}
        <ul className="flex items-center gap-x-5">
          <li className="flex items-center cursor-pointer text-white">
            <img src={formLogo} alt="Logo" />
            <span>New form</span>
          </li>
          <li className="cursor-pointer text-white hover:text-gray-300">
            <Star />
          </li>
          <li></li>
        </ul>
        {/* Center side */}
        <ul className="flex items-end gap-x-5">
          <Link to="/questions">Questions</Link>
          <Link to="/answers">Answers</Link>
          <Link to="/settings">Settings</Link>
        </ul>
        {/* Right side */}
        <ul className="flex items-center gap-x-5">
          <li className="cursor-pointer text-white hover:text-gray-300">
            <Palette />
          </li>
          <li className="cursor-pointer text-white hover:text-gray-300">
            <Eye />
          </li>
          <li className="cursor-pointer text-white hover:text-gray-300">
            <Undo2 />
          </li>
          <li className="cursor-pointer text-white hover:text-gray-300">
            <Redo2 />
          </li>
          <li className="cursor-pointer text-white hover:text-gray-300">
            <Link2 />
          </li>
        </ul>
      </div>
      <h2 className="text-center font-sans text-xl mb-5">
        Create your templates
      </h2>
      <form
        action=""
        className={` w-[700px] max-w-full mx-auto p-4 ${
          theme ? `bg-gray-900` : `bg-purple-50`
        } flex items-center flex-col rounded-md shadow-sm border-t-8 border-l-5 ${
          theme
            ? `border-t-orange-500 border-l-orange-300`
            : `border-t-indigo-700 border-l-indigo-400`
        }`}
      >
        <input
          type="text"
          placeholder="Add New form"
          className={`border-b ${
            theme
              ? "border-gray-400 focus:border-yellow-400"
              : "border-gray-300 focus:border-indigo-500"
          } focus:border-b-2 focus:outline-none w-full p-2 mb-4 bg-transparent`}
        />
        <textarea
          name=""
          id=""
          className={`border-b ${
            theme
              ? "border-gray-400 focus:border-yellow-400"
              : "border-gray-300 focus:border-indigo-800"
          } focus:border-b-2 focus:outline-none w-full p-2 mb-4 bg-transparent`}
        >
          Add description
        </textarea>

        <input
          type="text"
          placeholder="Add New form"
          className={`border-b ${
            theme
              ? "border-gray-400 focus:border-yellow-400"
              : "border-gray-300 focus:border-indigo-500"
          } focus:border-b-2 focus:outline-none w-full p-2 mb-4 bg-transparent`}
        />
      </form>
      {/*Tools, add questions */}
      <div className="bg-gray-300 ">
        <button
          onClick={handleAddQuestion}
          className="cursor-pointer text-gray-500 hover:text-gray-400"
        >
          <PlusCircle />
        </button>
      </div>
    </div>
  );
};

export default CreateTemplate;
