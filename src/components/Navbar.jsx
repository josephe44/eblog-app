import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuItems from './MenuItems'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // toggle the navbar on mobile devices
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // get the current path
  const location = useLocation()

  useEffect(() => {
    // when the path changes, close the navbar on mobile devices
    const handChange = () => {
      setIsOpen(false)
    }
    handChange()
  }, [location])

  return (
    <header className="sticky top-0 z-20 w-full flex justify-between p-4 items-center bg-slate-800 text-white">
      <div className="text-2xl font-extrabold text-center">
        <h1 className="text-xl uppercase">
          <span className="text-2xl lowercase">e</span>blog
        </h1>
      </div>
      <nav className="">
        <div className="absolute right-6 top-5 md:hidden scale-150">
          <button className="scale-125 cursor-pointer" onClick={toggle}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul className="hidden md:flex gap-8 p-4 uppercase font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Categories</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <MenuItems toggle={toggle} isOpen={isOpen} />
      </nav>
    </header>
  )
}

export default Navbar
