import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-3 px-[4%] justify-between bg-black border-b border-gray-800">
      <img className="w-[max(10%,80px)]" src={assets.logo_proiectPA} alt="" />

      <button
        onClick={() => setToken('')}
        className="bg-white text-black px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-200 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
