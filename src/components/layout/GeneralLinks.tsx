import React from 'react'
import { NavLink } from 'react-router-dom'

function GeneralLinks() {
    return (

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink className="mr-5 hover:text-gray-900" to='/'>About Us</NavLink>
            <NavLink className="mr-5 hover:text-gray-900" to='/'>Our Projects</NavLink>
            <NavLink className="mr-5 hover:text-gray-900" to='/'>Book a Demo</NavLink>
            <NavLink className="mr-5 hover:text-gray-900" to='/'>Contact Us</NavLink>
        </nav>

    )
}

export default GeneralLinks
