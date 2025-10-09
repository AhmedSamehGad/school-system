// contexts/DarkModeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context first
const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're in a browser environment before accessing localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : true;
    }
    return true; // Default to dark mode if not in browser
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      // Save preference to localStorage
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      
      // Update document class for Tailwind dark mode
      if (darkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = '#111827'; // gray-900
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#f9fafb'; // gray-50
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const value = {
    darkMode,
    setDarkMode,
    toggleDarkMode
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook to use dark mode context
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}

export default DarkModeContext;