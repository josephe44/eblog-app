import React from 'react'
import { useLocation } from 'react-router-dom'

function HomeBanner() {
  const location = useLocation()

  return (
    <div className="w-screen h-96">
      <img
        className="relative w-full h-full object-cover bg-center"
        src="https://res.cloudinary.com/eworldtech/image/upload/c_scale,w_1024/v1653994060/history/federico-di-dio-photography-Q4g0Q-eVVEg-unsplash_cgshy2.jpg"
        alt="hero-banner"
      />
      <div className=" absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white uppercase bg-black/20 ">
        <h1 className="text-6xl font-extrabold">History Made Us</h1>
        <p className="mt-6 font-semibold">
          <span className="text-yellow-400">
            {location.pathname === '/' ? 'Home' : null}
          </span>
          <span className="text-xs bg-white mx-1">|</span> blog page
        </p>
      </div>
    </div>
  )
}

export default HomeBanner
