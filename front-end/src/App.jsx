// App.jsx
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard"
import MainLayout from "./components/Layouts/MainLayout";
import Contact from './Pages/contact.jsx';
import About from './Pages/About.jsx';
import Courses from './Pages/courses.jsx';
import Classes from './Pages/classes.jsx';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
          </Routes>
        </MainLayout>
      </Router>
    </DarkModeProvider>
  )
}

export default App