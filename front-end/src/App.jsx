import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route , Routes , BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserDashboard from "./Pages/UserDashboard";
import AdminDashboard from "./Pages/AdminDashboard"
import MainLayout from "./components/Layouts/MainLayout";

function App() {
  const [count, setCount] = useState(0)

  return (
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
  )
}

export default App
