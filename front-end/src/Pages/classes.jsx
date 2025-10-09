// Pages/Classes.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext.jsx";

function Classes() {
    const { darkMode } = useDarkMode();
    const [selectedSubject, setSelectedSubject] = useState("all");

    const subjects = [
        { id: "math", name: "Mathematics", icon: "🧮", color: "from-blue-500 to-blue-600", count: 3 },
        { id: "science", name: "Science", icon: "🔬", color: "from-green-500 to-green-600", count: 2 },
        { id: "computer", name: "Computer Science", icon: "💻", color: "from-purple-500 to-purple-600", count: 2 },
        { id: "english", name: "English", icon: "📚", color: "from-red-500 to-red-600", count: 2 },
        { id: "history", name: "History", icon: "🏛️", color: "from-amber-500 to-amber-600", count: 1 },
        { id: "art", name: "Art & Design", icon: "🎨", color: "from-pink-500 to-pink-600", count: 1 }
    ];

    const classes = [
        {
            id: 1,
            name: "Advanced Calculus",
            subject: "math",
            teacher: "Dr. Robert Kim",
            code: "MATH-2024",
            students: 24,
            assignments: 3,
            color: "from-blue-500 to-blue-600",
            icon: "📊",
            recentActivity: "New assignment: Limits & Derivatives",
            dueDate: "Due Tomorrow"
        },
        {
            id: 2,
            name: "Algebra Basics",
            subject: "math",
            teacher: "Ms. Sarah Johnson",
            code: "MATH-101",
            students: 30,
            assignments: 5,
            color: "from-blue-500 to-blue-600",
            icon: "➗",
            recentActivity: "Quiz results posted",
            dueDate: "No upcoming deadlines"
        },
        {
            id: 3,
            name: "Geometry & Trigonometry",
            subject: "math",
            teacher: "Mr. David Chen",
            code: "MATH-201",
            students: 28,
            assignments: 2,
            color: "from-blue-500 to-blue-600",
            icon: "📐",
            recentActivity: "New material: Trigonometric functions",
            dueDate: "Due in 3 days"
        },
        {
            id: 4,
            name: "Physics Laboratory",
            subject: "science",
            teacher: "Dr. Lisa Wang",
            code: "SCI-301",
            students: 20,
            assignments: 4,
            color: "from-green-500 to-green-600",
            icon: "⚛️",
            recentActivity: "Lab report submission open",
            dueDate: "Due Friday"
        },
        {
            id: 5,
            name: "Biology - Cell Structure",
            subject: "science",
            teacher: "Prof. Maria Rodriguez",
            code: "SCI-202",
            students: 25,
            assignments: 1,
            color: "from-green-500 to-green-600",
            icon: "🔬",
            recentActivity: "Chapter 3 discussion started",
            dueDate: "No upcoming deadlines"
        },
        {
            id: 6,
            name: "Python Programming",
            subject: "computer",
            teacher: "Mr. Carlos Martinez",
            code: "CS-101",
            students: 35,
            assignments: 6,
            color: "from-purple-500 to-purple-600",
            icon: "🐍",
            recentActivity: "New coding exercise available",
            dueDate: "Due Today"
        },
        {
            id: 7,
            name: "Web Development",
            subject: "computer",
            teacher: "Ms. Emily Chen",
            code: "CS-301",
            students: 22,
            assignments: 2,
            color: "from-purple-500 to-purple-600",
            icon: "🌐",
            recentActivity: "Project submission reminder",
            dueDate: "Due in 2 weeks"
        },
        {
            id: 8,
            name: "Literature & Composition",
            subject: "english",
            teacher: "Dr. James Wilson",
            code: "ENG-201",
            students: 18,
            assignments: 3,
            color: "from-red-500 to-red-600",
            icon: "📖",
            recentActivity: "Essay feedback available",
            dueDate: "No upcoming deadlines"
        },
        {
            id: 9,
            name: "Creative Writing",
            subject: "english",
            teacher: "Ms. Amanda Foster",
            code: "ENG-102",
            students: 15,
            assignments: 1,
            color: "from-red-500 to-red-600",
            icon: "✍️",
            recentActivity: "New writing prompt posted",
            dueDate: "Due Monday"
        },
        {
            id: 10,
            name: "World History",
            subject: "history",
            teacher: "Prof. Thomas Brown",
            code: "HIS-101",
            students: 28,
            assignments: 2,
            color: "from-amber-500 to-amber-600",
            icon: "🌍",
            recentActivity: "Research paper assigned",
            dueDate: "Due in 10 days"
        },
        {
            id: 11,
            name: "Digital Art Studio",
            subject: "art",
            teacher: "Ms. Sophia Lee",
            code: "ART-201",
            students: 12,
            assignments: 4,
            color: "from-pink-500 to-pink-600",
            icon: "🎨",
            recentActivity: "Portfolio review scheduled",
            dueDate: "Due Next Week"
        }
    ];

    const filteredClasses = selectedSubject === "all" 
        ? classes 
        : classes.filter(cls => cls.subject === selectedSubject);

    const getSubjectName = (subjectId) => {
        return subjects.find(sub => sub.id === subjectId)?.name || subjectId;
    };

    return (
        <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-2xl p-8 mb-8 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <motion.h1
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="text-4xl font-bold mb-2 text-indigo-600 dark:text-indigo-400"
                            >
                                My Classes
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                                Manage your courses, assignments, and classroom activities
                            </motion.p>
                        </div>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mt-4 lg:mt-0 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Join New Class
                        </motion.button>
                    </div>
                </motion.div>

                {/* Subject Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`rounded-2xl p-6 mb-8 ${
                        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                    }`}
                >
                    <h2 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                        Filter by Subject
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={() => setSelectedSubject("all")}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                selectedSubject === "all"
                                    ? "bg-indigo-500 text-white shadow-lg"
                                    : darkMode
                                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            All Subjects
                        </button>
                        {subjects.map((subject, index) => (
                            <motion.button
                                key={subject.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                onClick={() => setSelectedSubject(subject.id)}
                                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                                    selectedSubject === subject.id
                                        ? `bg-gradient-to-r ${subject.color} text-white shadow-lg`
                                        : darkMode
                                        ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                <span className="mr-2">{subject.icon}</span>
                                {subject.name}
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                    selectedSubject === subject.id
                                        ? "bg-white bg-opacity-20"
                                        : darkMode
                                        ? "bg-gray-600"
                                        : "bg-gray-300"
                                }`}>
                                    {subject.count}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Classes Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredClasses.map((classItem, index) => (
                        <motion.div
                            key={classItem.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className={`rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                                darkMode ? 'bg-gray-800' : 'bg-white'
                            } shadow-lg border ${
                                darkMode ? 'border-gray-700' : 'border-gray-200'
                            }`}
                        >
                            {/* Class Header with Gradient */}
                            <div className={`h-4 bg-gradient-to-r ${classItem.color}`}></div>
                            
                            <div className="p-6">
                                {/* Class Icon and Code */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-3xl">{classItem.icon}</div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                                    }`}>
                                        {classItem.code}
                                    </span>
                                </div>

                                {/* Class Name */}
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {classItem.name}
                                </h3>

                                {/* Teacher */}
                                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {classItem.teacher}
                                </p>

                                {/* Recent Activity */}
                                <div className={`mb-4 p-3 rounded-lg ${
                                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                                }`}>
                                    <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {classItem.recentActivity}
                                    </p>
                                    <p className={`text-xs ${
                                        classItem.dueDate.includes('Today') || classItem.dueDate.includes('Tomorrow')
                                            ? 'text-red-500 dark:text-red-400'
                                            : darkMode ? 'text-gray-500' : 'text-gray-600'
                                    }`}>
                                        {classItem.dueDate}
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center space-x-4">
                                        <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            👥 {classItem.students}
                                        </span>
                                        <span className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            📝 {classItem.assignments}
                                        </span>
                                    </div>
                                    <button className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
                                        darkMode 
                                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}>
                                        View
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredClasses.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`text-center py-16 rounded-2xl ${
                            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                        }`}
                    >
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
                            No Classes Found
                        </h3>
                        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {selectedSubject === "all" 
                                ? "You haven't joined any classes yet."
                                : `No ${getSubjectName(selectedSubject)} classes found.`
                            }
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-200">
                            Browse Available Classes
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Classes;