import React from 'react'
import { NavLink } from 'react-router-dom'

function GeneralLinks() {
    return (

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink className="mr-5 hover:text-blue-900" to='/about'>About Us</NavLink>
            <NavLink className="mr-5 hover:text-blue-900" to='/products'>Our Products</NavLink>
            <NavLink className="mr-5 hover:text-blue-900" to='/bookdemo'>Book a Demo</NavLink>
            <NavLink className="mr-5 hover:text-blue-900" to='/contact'>Contact Us</NavLink>
        </nav>

    )
}

export default GeneralLinks
