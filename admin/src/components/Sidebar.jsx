import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen bg-black border-r border-gray-800">

      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-gray-300 text-[15px]">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l border border-gray-800 border-r-0 
            hover:bg-gray-900 transition 
            ${isActive ? 'bg-gray-900 text-white' : ''}`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l border border-gray-800 border-r-0 
            hover:bg-gray-900 transition
            ${isActive ? 'bg-gray-900 text-white' : ''}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-l border border-gray-800 border-r-0 
            hover:bg-gray-900 transition
            ${isActive ? 'bg-gray-900 text-white' : ''}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
