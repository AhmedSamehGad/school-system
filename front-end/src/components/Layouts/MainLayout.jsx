import { useState, useEffect } from "react";
import Nav from "../Parts/Nav";
import Footer from "../Parts/Footer";
import "../../tailwind.css";

export default function MainLayout({ children }) {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark bg-gray-950 min-h-screen text-white" : "bg-white min-h-screen text-gray-900"}>
            <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className={darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"}>
                {children}
            </main>
            <Footer />
        </div>
    );
}