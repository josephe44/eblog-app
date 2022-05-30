import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SiginIn from './pages/SignIn'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Categories from './pages/Categories'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SiginIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </Router>
  )
}

export default App
