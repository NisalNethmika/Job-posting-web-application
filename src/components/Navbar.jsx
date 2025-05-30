import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const activeButtonFunction = ({ isActive }) => {
    return isActive
      ? 'px-3 py-2 text-white bg-black rounded-md hover:bg-gray-900 hover:text-white'
      : 'px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white'
  }

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center justify-center flex-1 md:items-stretch md:justify-start"
          >
            
            <NavLink className="flex items-center flex-shrink-0 mr-4" to="/">
              <img
                className="w-auto h-10"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden ml-2 text-2xl font-bold text-white md:block"
                >React Jobs</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={activeButtonFunction}
                  >Home</NavLink>
                <NavLink
                  to="/jobs"
                  className={activeButtonFunction}
                  >Jobs</NavLink>
                <NavLink
                  to="/add-job"
                  className={activeButtonFunction}
                  >Add Job</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
