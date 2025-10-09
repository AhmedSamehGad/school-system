// Pages/About.jsx
import { motion } from "framer-motion";
import { useDarkMode } from "../contexts/DarkModeContext.jsx";

function About() {
    const { darkMode } = useDarkMode();

    const teamMembers = [
        {
            name: "Dr. Sarah Johnson",
            role: "Founder & CEO",
            description: "Education specialist with 15+ years of experience in digital learning",
            icon: "👩‍🏫"
        },
        {
            name: "Michael Chen",
            role: "CTO",
            description: "Technology expert passionate about educational innovation",
            icon: "👨‍💻"
        },
        {
            name: "Emily Rodriguez",
            role: "Head of Curriculum",
            description: "Curriculum developer focused on engaging learning experiences",
            icon: "📚"
        },
        {
            name: "David Thompson",
            role: "Student Success Manager",
            description: "Dedicated to ensuring every student reaches their potential",
            icon: "🌟"
        }
    ];

    const features = [
        {
            title: "Interactive Learning",
            description: "Engaging multimedia content and interactive exercises",
            icon: "🎮"
        },
        {
            title: "Personalized Paths",
            description: "Adaptive learning tailored to each student's needs",
            icon: "🎯"
        },
        {
            title: "Real-time Collaboration",
            description: "Live classrooms and group projects with peers",
            icon: "👥"
        },
        {
            title: "Progress Tracking",
            description: "Comprehensive analytics and progress reports",
            icon: "📊"
        }
    ];

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-center mb-16 rounded-2xl p-8 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <motion.h1
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
                    >
                        About Smart School
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        Empowering the next generation of learners through innovative technology and personalized education experiences.
                    </motion.p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className={`rounded-2xl p-8 ${
                            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}
                    >
                        <div className="text-4xl mb-4">🎯</div>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Our Mission</h2>
                        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            To make quality education accessible to every student, everywhere. We believe that learning should be engaging, 
                            personalized, and available 24/7, breaking down traditional barriers to education.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`rounded-2xl p-8 ${
                            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}
                    >
                        <div className="text-4xl mb-4">🚀</div>
                        <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Our Vision</h2>
                        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            To create a world where every student can learn at their own pace, explore their interests, 
                            and develop the skills needed for success in the 21st century through cutting-edge technology.
                        </p>
                    </motion.div>
                </div>

                {/* Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`rounded-2xl p-8 mb-16 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">
                        What Makes Us Different
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                className={`text-center p-6 rounded-xl ${
                                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                                }`}
                            >
                                <div className="text-3xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                                    {feature.title}
                                </h3>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className={`rounded-2xl p-8 mb-16 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                className={`text-center p-6 rounded-xl ${
                                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                                }`}
                            >
                                <div className="text-4xl mb-4">{member.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                                    {member.name}
                                </h3>
                                <p className={`font-medium mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {member.role}
                                </p>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                                    {member.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className={`rounded-2xl p-8 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">
                        Our Impact
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.0 }}
                        >
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10,000+</div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Students Enrolled</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.1 }}
                        >
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">500+</div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Expert Teachers</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 }}
                        >
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">95%</div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Success Rate</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.3 }}
                        >
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
                            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Learning Support</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About;