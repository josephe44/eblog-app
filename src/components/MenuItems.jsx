import { Link } from 'react-router-dom'

function MenuItems({ toggle, isOpen }) {
  return (
    <ul
      className={
        isOpen
          ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-slate-800/95 backdrop-blur-md text-white font-bold justify-center gap-8 md:hidden'
          : 'hidden'
      }
    >
      <button className="cursor-pointer scale-150" onClick={toggle}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
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
  )
}

export default MenuItems
