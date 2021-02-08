import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminLinks() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <NavLink to="/about" className="mr-5 hover:text-white">About Us</NavLink>
            <NavLink to="/products" className="mr-5 hover:text-white">Our Products</NavLink>
            <NavLink to="/bookdemo" className="mr-5 hover:text-white">Book a demo</NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-white">Contact Us</NavLink> */}
            <NavLink to="/admin/manage" className="mr-5 hover:text-white">Manage Products</NavLink>
            <button className="mr-5 hover:text-white">Logout</button>
        </nav>

    )
}

export default AdminLinks
