export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-900 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">Login</h2>
                <form className="w-full flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-lg shadow-md hover:scale-105 transition-all duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}