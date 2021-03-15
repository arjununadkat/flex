import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../features/actions/authActions'
function AdminLinks(props: any) {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-blue">Home</NavLink>
            <NavLink to="/about" className="mr-5 hover:text-blue">About Us</NavLink>
            <NavLink to="/services" className="mr-5 hover:text-blue">Services</NavLink>
            <NavLink to="/products" className="mr-5 hover:text-blue">Our Products</NavLink>
            <NavLink to="/bookdemo" className="mr-5 hover:text-blue">Book a demo</NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-blue">Contact Us</NavLink>
            <NavLink to="/admin/manage" className="mr-5 hover:text-blue">Manage Products</NavLink>
            <button className="mr-5 hover:text-blue" onClick={props.signOut}>Logout</button>
        </nav>

    )
}

const mapDispatchToProps = (dispatch: (arg0: (dispatch: (arg0: { type: string }) => void, getState: any, { getFirebase }: any) => void) => any) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect<any>(null, mapDispatchToProps)(AdminLinks)
