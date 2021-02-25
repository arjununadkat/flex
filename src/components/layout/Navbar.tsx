import React from 'react'
import { Link } from 'react-router-dom'
import AdminLinks from './AdminLinks'
import GeneralLinks from './GeneralLinks'
import { connect } from 'react-redux'
import logo from '../../images/logo.svg'

function Navbar(props: any) {
    const { auth } = props;
    console.log(auth);
    const links = auth.uid;
    return (
        <header className="text-black bg-blue-000 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="md:max-w-none mx-auto rounded" width="45" src={logo} alt=""/>
                    <span className="ml-3 text-xl">CITS</span>
                </Link>
                {!links ? <GeneralLinks /> : (
                    <AdminLinks />
                )}
            </div>
        </header>

    )
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)
