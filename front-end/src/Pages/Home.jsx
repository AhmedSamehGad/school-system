import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function Home() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`min-h-screen flex flex-col items-center py-10 px-4 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`w-full max-w-3xl rounded-3xl shadow-2xl p-8 mb-8 flex flex-col items-center ${
                    darkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-200'
                }`}
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-extrabold mb-4 text-center text-indigo-600 dark:text-indigo-400"
                >
                    Welcome to Your School E-Classroom
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className={`text-lg mb-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                    Discover a new way to learn, connect, and grow. E-schools empower students and teachers to collaborate, share resources, and inspire each other beyond the classroom walls. Experience the future of education—where every lesson is just a click away, and every student can shine.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center w-full"
                >
                    <Link to="/classes">
                        <button
                            className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            Get Started
                        </button>
                    </Link>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-12"
                >
                    <div className={`rounded-xl p-6 flex flex-col items-center shadow-md ${
                        darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                    }`}>
                        <motion.div
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 text-indigo-600 dark:text-indigo-400"
                        >
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </motion.div>
                        <h2 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Engaging Lessons</h2>
                        <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Interactive materials and activities make learning fun and effective for everyone.
                        </p>
                    </div>
                    <div className={`rounded-xl p-6 flex flex-col items-center shadow-md ${
                        darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                    }`}>
                        <motion.div
                            initial={{ rotate: 10 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4 text-indigo-600 dark:text-indigo-400"
                        >
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a5 5 0 00-10 0v2" />
                                <rect x="5" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </motion.div>
                        <h2 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Connected Community</h2>
                        <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Collaborate with classmates and teachers, share ideas, and build lasting friendships.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-8 w-full"
                >
                    <div className={`rounded-xl p-6 text-center shadow-lg ${
                        darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                    }`}>
                        <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">Why E-Schools Matter?</h3>
                        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            E-schools break barriers, making education accessible, flexible, and engaging. They foster creativity, curiosity, and lifelong learning for every student, everywhere.
                        </p>
                    </div>
                </motion.div>

                {/* Quick Login Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className={`mt-12 p-8 rounded-2xl w-full max-w-md ${
                        darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-300'
                    }`}
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">Quick Access</h2>
                    <div className="flex flex-col gap-4">
                        <Link to="/login">
                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:scale-105 transition-all duration-200">
                                Student Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className={`w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:scale-105 transition-all duration-200 ${
                                darkMode 
                                ? 'bg-gray-600 text-white border border-gray-500 hover:bg-gray-500' 
                                : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
                            }`}>
                                Create Account
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home;