import React, { useContext, useState } from "react";
import { Link 
  
} from "react-router-dom";
import formLogo from "../assets/Icons/logo-48.svg";
import { ThemeContext } from "../Context/ThemeContext";
import { AlignJustify, Search, UserRoundPen, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } px-2 py-1.5 shadow-xl stransition-colors duration-300`}
    >
      <ul className="flex  items-center justify-between space-x-4 ">
        {/* Menubar, Logo */}
        <li className="flex items-center gap-x-2 cursor-pointer">
          <button className="cursor-pointer">
            <AlignJustify />
          </button>
          <button className="cursor-pointer flex items-center">
            <img src={formLogo} alt="Logo" />
            <span className="font-mono">Forms</span>
          </button>
        </li>
        {/* Search input */}
        <li>
          <div className="relative">
            <button className="absolute top-1/2 left-3 transform -translate-y-1/2 hover:bg-gray-300  hover:rounded-full cursor-pointer p-1">
              <Search />
            </button>
            <input
              type="text"
              placeholder="Search"
              className={`pl-10 py-1.5 rounded-3xl focus:outline-none focus:shadow transition-colors duration-300 ${
                theme
                  ? "bg-gray-800 text-white placeholder-gray-400 focus:bg-gray-700"
                  : "bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white"
              }`}
            />
          </div>
        </li>
        {/* Theme, Profile */}
        <li className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="cursor-pointer">
            {theme ? <Sun /> : <Moon />}
          </button>
          <button className="cursor-pointer">
            <UserRoundPen />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
