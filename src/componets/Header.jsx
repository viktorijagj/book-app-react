import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='p-6 pb-20 sm:pb-9 mb-6 h-[10vh] w-full bg-gray-300 text-green-800'>
        <nav className='flex items-center flex-col sm:flex-row justify-between'>
            <div className='mb-3'><NavLink to='/' className='text-xl text-green-700 font-light'>Booksy<span>App</span></NavLink></div>
            <div>
                <ul>
                    <NavLink className='pr-6 font-bold' to='/' style={({ isActive }) =>{
                    return {
                      color: isActive ? "black" : "",
                    };}}
                    >Home</NavLink>
                    <NavLink className='font-bold' to='/favourites' style={({ isActive }) =>{
                    return {
                      color: isActive ? "black" : "",
                    };}}>My Favourites</NavLink>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header