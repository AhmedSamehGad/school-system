import { motion } from "framer-motion";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-3xl rounded-3xl shadow-2xl p-8 mb-8 flex flex-col items-center"
            >
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-extrabold mb-4 text-center"
                >
                    Welcome to Your School E-Classroom
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg mb-6 text-center"
                >
                    Discover a new way to learn, connect, and grow. E-schools empower students and teachers to collaborate, share resources, and inspire each other beyond the classroom walls. Experience the future of education—where every lesson is just a click away, and every student can shine.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex justify-center w-full"
                >
                    <button
                        className="px-7 py-3 border rounded-full shadow-md font-semibold text-lg hover:scale-105 transition-all duration-200"
                    >
                        Get Started
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                >
                    <div className="rounded-xl p-6 flex flex-col items-center shadow-md">
                        <motion.div
                            initial={{ rotate: -10 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </motion.div>
                        <h2 className="text-xl font-bold mb-2">Engaging Lessons</h2>
                        <p className="text-center">Interactive materials and activities make learning fun and effective for everyone.</p>
                    </div>
                    <div className="rounded-xl p-6 flex flex-col items-center shadow-md">
                        <motion.div
                            initial={{ rotate: 10 }}
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a5 5 0 00-10 0v2" />
                                <rect x="5" y="9" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </motion.div>
                        <h2 className="text-xl font-bold mb-2">Connected Community</h2>
                        <p className="text-center">Collaborate with classmates and teachers, share ideas, and build lasting friendships.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-8 w-full"
                >
                    <div className="rounded-xl p-6 text-center shadow-lg">
                        <h3 className="text-2xl font-semibold mb-2">Why E-Schools Matter?</h3>
                        <p className="text-lg">E-schools break barriers, making education accessible, flexible, and engaging. They foster creativity, curiosity, and lifelong learning for every student, everywhere.</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Home;