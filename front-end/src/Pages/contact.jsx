// Pages/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext.jsx";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const { darkMode } = useDarkMode();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submission:", formData);
        // Add your contact form logic here
    };

    return (
        <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-4xl rounded-2xl shadow-2xl p-8 ${
                    darkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-200'
                }`}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.h2
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
                        >
                            Get In Touch
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                        >
                            Have questions about our e-classroom platform? We're here to help! Reach out to us and we'll get back to you as soon as possible.
                        </motion.p>

                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="flex items-start">
                                <div className={`p-3 rounded-lg mr-4 ${
                                    darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                                }`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email</h3>
                                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>support@smartschool.edu</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`p-3 rounded-lg mr-4 ${
                                    darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                                }`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Phone</h3>
                                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>(555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`p-3 rounded-lg mr-4 ${
                                    darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                                }`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Address</h3>
                                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>123 Education Street<br />Learning City, LC 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className={`p-3 rounded-lg mr-4 ${
                                    darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                                }`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Office Hours</h3>
                                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <motion.h3
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
                        >
                            Send us a Message
                        </motion.h3>
                        
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Name */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-200 ${
                                        darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400' 
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                                    }`}
                                    required
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.45 }}
                            >
                                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-200 ${
                                        darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400' 
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                                    }`}
                                    required
                                />
                            </motion.div>

                            {/* Subject */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                            >
                                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Subject
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-200 ${
                                        darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-400' 
                                        : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-500'
                                    }`}
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="billing">Billing Question</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.55 }}
                            >
                                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us how we can help you..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-200 resize-none ${
                                        darkMode 
                                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-400' 
                                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                                    }`}
                                    required
                                ></textarea>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                            >
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                                >
                                    Send Message
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;