// components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={darkMode ? "bg-gray-900 text-white px-6 py-4 shadow-md" : "bg-white text-gray-900 px-6 py-4 shadow-md"}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className={darkMode ? "text-2xl font-bold text-indigo-400" : "text-2xl font-bold text-indigo-600"}>
          Smart School
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>Home</Link>
          <Link to="/about" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>About</Link>
          <Link to="/courses" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>Courses</Link>
          <Link to="/contact" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>Contact</Link>
          <Link to="/login" className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">Login</Link>
          <Link to="/register" className="ml-2 px-6 py-2 bg-white text-indigo-500 rounded-full shadow-lg border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-all duration-200">Register</Link>
          <button
            onClick={toggleDarkMode}
            className={darkMode ? "ml-4 p-2 rounded-full border border-indigo-400 bg-gray-800 hover:bg-gray-700 transition" : "ml-4 p-2 rounded-full border border-indigo-400 bg-white hover:bg-indigo-50 transition"}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M6.34 17.66l-.71-.71" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
        </div>
        <button
          className={darkMode ? "md:hidden text-gray-300 hover:text-white focus:outline-none" : "md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col">
          <Link to="/" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>Home</Link>
          <Link to="/about" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>About</Link>
          <Link to="/courses" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>Courses</Link>
          <Link to="/contact" className={darkMode ? "hover:text-indigo-400 transition" : "hover:text-indigo-600 transition"}>Contact</Link>
          <Link to="/login" className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">Login</Link>
          <Link to="/register" className="px-6 py-2 bg-white text-indigo-500 rounded-full shadow-lg border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-all duration-200">Register</Link>
          <button
            onClick={toggleDarkMode}
            className={darkMode ? "mt-2 p-2 rounded-full border border-indigo-400 bg-gray-800 hover:bg-gray-700 transition self-start" : "mt-2 p-2 rounded-full border border-indigo-400 bg-white hover:bg-indigo-50 transition self-start"}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66l-.71.71M4.05 4.05l-.71.71M21 12h-1M4 12H3m16.24 4.24l-.71-.71M6.34 17.66l-.71-.71" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-indigo-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}