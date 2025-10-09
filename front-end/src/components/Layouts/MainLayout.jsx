// components/Layouts/MainLayout.jsx
import Navbar from '../Parts/Nav.jsx';
import { useDarkMode } from '../../contexts/DarkModeContext.jsx';

export default function MainLayout({ children }) {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}