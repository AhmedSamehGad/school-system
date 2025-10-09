// App.jsx
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard"
import MainLayout from "./components/Layouts/MainLayout";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
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