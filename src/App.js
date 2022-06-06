import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SiginIn from './pages/SignIn'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Blog from './pages/Blog'
import Categories from './pages/Categories'
import CreatingBlog from './pages/CreatingBlog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-full">
        <Navbar />
        <main className="pb-12 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SiginIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/createBlog" element={<CreatingBlog />} />
            <Route
              path="/category/:categoryName/:blogName/:blogId"
              element={<Blog />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
