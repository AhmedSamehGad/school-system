// Navbar.jsx
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-400">
          Smart School
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/courses" className="hover:text-indigo-400 transition">Courses</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
          <Link to="/login" className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">Login</Link>
          <Link to="/register" className="ml-2 px-6 py-2 bg-white text-indigo-500 rounded-full shadow-lg border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-all duration-200">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 flex flex-col">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/courses" className="hover:text-indigo-400 transition">Courses</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
          <Link to="/login" className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">Login</Link>
          <Link to="/register" className="px-6 py-2 bg-white text-indigo-500 rounded-full shadow-lg border border-indigo-200 hover:bg-indigo-50 hover:scale-105 transition-all duration-200">Register</Link>
        </div>
      )}
    </nav>
  )
}
