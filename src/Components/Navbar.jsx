import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import formLogo from "../assets/Icons/logo-48.svg";
import { ThemeContext } from "../Context/ThemeContext";
import { AlignJustify, Search, UserCircle, Sun, Moon, X } from "lucide-react";

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Tables", path: "/tables" },
  { name: "Presentations", path: "/presentations" },
  { name: "Documents", path: "/documents" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div
      className={`flex  items-center justify-between mx-auto p-5 ${
        theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } px-2 py-1.5 shadow-xl transition-colors hover:duration-400`}
    >
      {/* Menu bar , Logo */}
      <div className="flex items-center gap-x-4">
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl cursor-pointer"
        >
          {menuOpen ? <X /> : <AlignJustify />}
        </button>
        <Link to="/" className="flex items-center cursor-pointer gap-x-2">
          <img src={formLogo} alt="Logo" />
          <span className="font-mono text-lg">Forms</span>
        </Link>
      </div>

      {/* Desctop Menu Links*/}
      <ul className="hidden lg:flex items-center space-x-6">
        {menuLinks.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="relative group px-2 py-1 transition-colors duration-300"
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                  theme ? "bg-orange-400" : "bg-purple-600"
                }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Search input */}
      <div className="relative  lg-block">
        <button className="absolute top-1/2 left-3 transform -translate-y-1/2 hover:rounded-full hover:text-gray-500 cursor-pointer">
          <Search />
        </button>
        <input
          type="text"
          placeholder="Search forms"
          className={`w-auto pl-10 py-1.5 rounded-3xl border ${
            theme
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-gray-900 border-gray-300"
          } focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors`}
        />
      </div>

      {/* Theme and Profile */}
      <div className="flex items-center gap-x-3">
        <button
          className={`rounded-full cursor-pointer ${
            theme ? "hover:text-yellow-400" : "hover:text-purple-700"
          } transition-colors`}
          onClick={toggleTheme}
        >
          {theme ? <Sun /> : <Moon />}
        </button>

        <Link
          to="/profile"
          className="hover:underline hover:text-purple-600 hover:duration-400"
        >
          <UserCircle />
        </Link>
      </div>

      {/* Sidebar menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 left-0 w-1/5 sm:w-1/5 h-full ${
            theme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          } shadow-xl p-6 transition-transform duration-500`}
        >
          <div className="flex items-center justify-between mb-10">
            <h2>Menu</h2>
            <button onClick={toggleMenu} className="cursor-pointer">
              <X />
            </button>
          </div>

          <ul className="flex flex-col space-y-5">
            {menuLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block text-lg hover:text-purple-600 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <h4 className="hover:bg-gray-800 p-1.5 rounded-md">
                    {item.name}
                  </h4>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
