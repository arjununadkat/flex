import React from 'react'
import { Link } from 'react-router-dom'
import AdminLinks from './AdminLinks'
import GeneralLinks from './GeneralLinks'
import { connect } from 'react-redux'

function Navbar(props: any) {
    const { auth } = props;
    console.log(auth);
    const links = auth.uid;
    return (
        <header className="text-white bg-blue-500 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
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
