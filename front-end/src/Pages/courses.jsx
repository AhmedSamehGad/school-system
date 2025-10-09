// Pages/Courses.jsx
import { motion } from "framer-motion";
import { useDarkMode } from "../contexts/DarkModeContext.jsx";

function Courses() {
    const { darkMode } = useDarkMode();

    const upcomingCourses = [
        {
            id: 1,
            title: "Advanced Mathematics",
            instructor: "Dr. Robert Kim",
            duration: "8 weeks",
            startDate: "June 15, 2024",
            level: "Advanced",
            description: "Deep dive into calculus, algebra, and mathematical reasoning",
            image: "🧮",
            category: "Mathematics",
            seats: 24,
            enrolled: 18
        },
        {
            id: 2,
            title: "Creative Writing Workshop",
            instructor: "Prof. Amanda Foster",
            duration: "6 weeks",
            startDate: "June 20, 2024",
            level: "Intermediate",
            description: "Develop your writing skills and creative expression",
            image: "✍️",
            category: "Language Arts",
            seats: 20,
            enrolled: 15
        },
        {
            id: 3,
            title: "Computer Programming Basics",
            instructor: "Mr. Carlos Rodriguez",
            duration: "10 weeks",
            startDate: "July 1, 2024",
            level: "Beginner",
            description: "Introduction to Python and computational thinking",
            image: "💻",
            category: "Computer Science",
            seats: 30,
            enrolled: 22
        },
        {
            id: 4,
            title: "Environmental Science",
            instructor: "Dr. Lisa Chen",
            duration: "8 weeks",
            startDate: "June 25, 2024",
            level: "Intermediate",
            description: "Explore ecosystems, sustainability, and climate science",
            image: "🌍",
            category: "Science",
            seats: 25,
            enrolled: 20
        }
    ];

    const summerPrograms = [
        {
            id: 1,
            title: "Summer Coding Camp",
            instructor: "Tech Masters Academy",
            duration: "2 weeks",
            startDate: "July 10-23, 2024",
            level: "All Levels",
            description: "Intensive coding bootcamp for young developers",
            image: "🚀",
            category: "Technology",
            price: "$299",
            spots: "Limited"
        },
        {
            id: 2,
            title: "Art & Design Workshop",
            instructor: "Creative Arts Studio",
            duration: "3 weeks",
            startDate: "July 15-Aug 5, 2024",
            level: "Beginner",
            description: "Explore various art techniques and digital design",
            image: "🎨",
            category: "Arts",
            price: "$249",
            spots: "Available"
        },
        {
            id: 3,
            title: "Sports Leadership Camp",
            instructor: "Champion Coaching",
            duration: "4 weeks",
            startDate: "June 20-July 15, 2024",
            level: "Intermediate",
            description: "Develop leadership skills through sports and teamwork",
            image: "⚽",
            category: "Sports",
            price: "$349",
            spots: "Filling Fast"
        }
    ];

    const activities = [
        {
            id: 1,
            title: "Science Fair Project",
            course: "Environmental Science",
            dueDate: "August 15, 2024",
            status: "Upcoming",
            type: "Project",
            points: 100,
            image: "🔬"
        },
        {
            id: 2,
            title: "Programming Challenge",
            course: "Computer Programming Basics",
            dueDate: "July 30, 2024",
            status: "Active",
            type: "Assignment",
            points: 50,
            image: "⚡"
        },
        {
            id: 3,
            title: "Creative Writing Contest",
            course: "Creative Writing Workshop",
            dueDate: "July 20, 2024",
            status: "Active",
            type: "Competition",
            points: 75,
            image: "🏆"
        },
        {
            id: 4,
            title: "Math Olympiad Practice",
            course: "Advanced Mathematics",
            dueDate: "August 5, 2024",
            status: "Upcoming",
            type: "Practice",
            points: 25,
            image: "🎯"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'text-green-600 dark:text-green-400';
            case 'Upcoming':
                return 'text-blue-600 dark:text-blue-400';
            case 'Completed':
                return 'text-gray-600 dark:text-gray-400';
            default:
                return 'text-gray-600 dark:text-gray-400';
        }
    };

    const getLevelColor = (level) => {
        switch (level) {
            case 'Beginner':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'Intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Advanced':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
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
                        Courses & Programs
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        Discover our comprehensive curriculum, summer programs, and exciting learning activities designed to inspire and challenge every student.
                    </motion.p>
                </motion.div>

                {/* Upcoming Courses Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`rounded-2xl p-8 mb-16 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                            Upcoming Courses
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                        }`}>
                            {upcomingCourses.length} courses available
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {upcomingCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                className={`rounded-xl p-6 ${
                                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                                } transition-all duration-300 cursor-pointer border ${
                                    darkMode ? 'border-gray-600' : 'border-gray-200'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl">{course.image}</div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                                        {course.level}
                                    </span>
                                </div>
                                
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                                    {course.title}
                                </h3>
                                
                                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {course.description}
                                </p>
                                
                                <div className={`space-y-2 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <div className="flex items-center text-sm">
                                        <span className="font-medium mr-2">Instructor:</span>
                                        {course.instructor}
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="font-medium mr-2">Duration:</span>
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="font-medium mr-2">Starts:</span>
                                        {course.startDate}
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {course.enrolled}/{course.seats} enrolled
                                    </span>
                                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200">
                                        Enroll Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Summer Programs Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className={`rounded-2xl p-8 mb-16 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
                        Summer Programs 2024
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {summerPrograms.map((program, index) => (
                            <motion.div
                                key={program.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                className={`rounded-xl p-6 ${
                                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                                } transition-all duration-300 cursor-pointer border ${
                                    darkMode ? 'border-gray-600' : 'border-gray-200'
                                }`}
                            >
                                <div className="text-4xl mb-4">{program.image}</div>
                                
                                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                                    {program.title}
                                </h3>
                                
                                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {program.description}
                                </p>
                                
                                <div className={`space-y-2 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <div className="flex justify-between text-sm">
                                        <span>Instructor:</span>
                                        <span>{program.instructor}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Duration:</span>
                                        <span>{program.duration}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Date:</span>
                                        <span>{program.startDate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Price:</span>
                                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{program.price}</span>
                                    </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className={`text-sm ${
                                        program.spots === 'Limited' ? 'text-red-600 dark:text-red-400' :
                                        program.spots === 'Filling Fast' ? 'text-yellow-600 dark:text-yellow-400' :
                                        'text-green-600 dark:text-green-400'
                                    }`}>
                                        {program.spots}
                                    </span>
                                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200">
                                        Register
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Activities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className={`rounded-2xl p-8 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
                        Course Activities & Assignments
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                                className={`rounded-xl p-6 ${
                                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                                } transition-all duration-300 cursor-pointer border ${
                                    darkMode ? 'border-gray-600' : 'border-gray-200'
                                }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-3xl">{activity.image}</div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                                        {activity.status}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                                    {activity.title}
                                </h3>
                                
                                <div className={`space-y-2 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <div className="flex justify-between text-sm">
                                        <span>Course:</span>
                                        <span>{activity.course}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Type:</span>
                                        <span>{activity.type}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Due Date:</span>
                                        <span>{activity.dueDate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Points:</span>
                                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">{activity.points} pts</span>
                                    </div>
                                </div>
                                
                                <div className="flex space-x-2">
                                    <button className="flex-1 px-3 py-2 bg-indigo-500 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-all duration-200">
                                        View Details
                                    </button>
                                    {activity.status === 'Active' && (
                                        <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-all duration-200">
                                            Start Now
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Courses;