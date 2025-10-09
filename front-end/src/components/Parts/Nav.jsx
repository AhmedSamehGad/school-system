// components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  // Function to check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Active link styles
  const activeLinkStyle = darkMode 
    ? "text-indigo-400 font-semibold border-b-2 border-indigo-400" 
    : "text-indigo-600 font-semibold border-b-2 border-indigo-600";

  const inactiveLinkStyle = darkMode 
    ? "hover:text-indigo-400 transition" 
    : "hover:text-indigo-600 transition";

  // Mobile active link styles
  const mobileActiveLinkStyle = darkMode 
    ? "text-indigo-400 font-semibold bg-gray-800" 
    : "text-indigo-600 font-semibold bg-indigo-50";

  const mobileInactiveLinkStyle = darkMode 
    ? "hover:text-indigo-400 transition" 
    : "hover:text-indigo-600 transition";

  return (
    <nav className={darkMode ? "bg-gray-900 text-white px-6 py-4 shadow-md" : "bg-white text-gray-900 px-6 py-4 shadow-md"}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className={darkMode ? "text-2xl font-bold text-indigo-400" : "text-2xl font-bold text-indigo-600"}>
          Smart School
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link 
            to="/" 
            className={`pb-1 ${isActiveLink("/") ? activeLinkStyle : inactiveLinkStyle}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`pb-1 ${isActiveLink("/about") ? activeLinkStyle : inactiveLinkStyle}`}
          >
            About
          </Link>
          <Link 
            to="/courses" 
            className={`pb-1 ${isActiveLink("/courses") ? activeLinkStyle : inactiveLinkStyle}`}
          >
            Courses
          </Link>
          <Link 
            to="/contact" 
            className={`pb-1 ${isActiveLink("/contact") ? activeLinkStyle : inactiveLinkStyle}`}
          >
            Contact
          </Link>
          
          <Link 
            to="/login" 
            className={`ml-4 px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200 ${
              isActiveLink("/login") 
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold" 
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
            }`}
          >
            Login
          </Link>
          
          <Link 
            to="/register" 
            className={`ml-2 px-6 py-2 rounded-full shadow-lg border hover:scale-105 transition-all duration-200 ${
              isActiveLink("/register")
                ? darkMode
                  ? "bg-indigo-400 text-white border-indigo-400 font-semibold"
                  : "bg-indigo-600 text-white border-indigo-600 font-semibold"
                : darkMode
                  ? "bg-gray-800 text-indigo-400 border-indigo-400 hover:bg-gray-700"
                  : "bg-white text-indigo-500 border-indigo-200 hover:bg-indigo-50"
            }`}
          >
            Register
          </Link>
          
          <button
            onClick={toggleDarkMode}
            className={`ml-4 p-2 rounded-full border transition ${
              darkMode 
                ? "border-indigo-400 bg-gray-800 hover:bg-gray-700" 
                : "border-indigo-400 bg-white hover:bg-indigo-50"
            }`}
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

        {/* Mobile menu button */}
        <button
          className={darkMode ? "md:hidden text-gray-300 hover:text-white focus:outline-none" : "md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-lg ${isActiveLink("/") ? mobileActiveLinkStyle : mobileInactiveLinkStyle}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 rounded-lg ${isActiveLink("/about") ? mobileActiveLinkStyle : mobileInactiveLinkStyle}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/courses" 
            className={`px-4 py-2 rounded-lg ${isActiveLink("/courses") ? mobileActiveLinkStyle : mobileInactiveLinkStyle}`}
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link 
            to="/contact" 
            className={`px-4 py-2 rounded-lg ${isActiveLink("/contact") ? mobileActiveLinkStyle : mobileInactiveLinkStyle}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          
          <Link 
            to="/login" 
            className={`px-4 py-2 rounded-full text-center shadow-lg hover:scale-105 transition-all duration-200 ${
              isActiveLink("/login") 
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold" 
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          
          <Link 
            to="/register" 
            className={`px-4 py-2 rounded-full text-center shadow-lg border hover:scale-105 transition-all duration-200 ${
              isActiveLink("/register")
                ? darkMode
                  ? "bg-indigo-400 text-white border-indigo-400 font-semibold"
                  : "bg-indigo-600 text-white border-indigo-600 font-semibold"
                : darkMode
                  ? "bg-gray-800 text-indigo-400 border-indigo-400 hover:bg-gray-700"
                  : "bg-white text-indigo-500 border-indigo-200 hover:bg-indigo-50"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          
          <button
            onClick={toggleDarkMode}
            className={`mt-2 p-2 rounded-full border self-start ${
              darkMode 
                ? "border-indigo-400 bg-gray-800 hover:bg-gray-700" 
                : "border-indigo-400 bg-white hover:bg-indigo-50"
            } transition`}
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