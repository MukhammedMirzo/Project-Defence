import React, { useContext, useState } from "react";
import { AlignJustify, Search, UserRoundPen, Sun, Moon } from "lucide-react";
import formLogo from "../assets/Icons/logo-48.svg";
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-xl stransition-colors duration-300`}
    >
      <ul className="flex  items-center justify-between space-x-4">
        <li>
          <AlignJustify />
        </li>
        <li>
          <button className="cursor-pointer flex items-center">
            <img src={formLogo} alt="Logo" />
            <span>Forms</span>
          </button>
        </li>
        <li>
          <div className="relative">
            <button className="absolute top-1/2 left-3 transform -translate-y-1/2 hover:bg-gray-300  hover:rounded-full cursor-pointer p-1">
              <Search />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 pl-10 py-1.5 rounded-3xl focus:outline-none focus:bg-white focus:shadow"
            />
          </div>
        </li>
        <li>
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
