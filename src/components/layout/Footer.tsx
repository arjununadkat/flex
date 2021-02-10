import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import { compose } from '@reduxjs/toolkit';
import QuickLink from './QuickLink';
import { iProduct } from '../../global';

class Footer extends Component {
    render() {
        const { products }: any = this.props;
        return (
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">CITS</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Corporate Information Technology Solutions Limited</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">QUICK LINKS</h2>
                            <nav className="list-none mb-10">
                                {products && products.map((product: iProduct) => {
                                    return (
                                        <QuickLink
                                            id={product.id}
                                            product={product.product}
                                            banner={product.banner}
                                            bannerPath={product.bannerPath}
                                            details={product.details}
                                            summary={product.summary}
                                            benefit={product.benefit}
                                            key={product.id} />
                                    )
                                })}
                            </nav>
                        </div>

                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">OTHER SERVICES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-gray-200">IT Governance Frameworks</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-gray-200">Unified Communications</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-gray-200">IT Support</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACTS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href='mailto:frontdesk@cits.co.tz' className="text-gray-400 hover:text-white">frontdesk@cits.co.tz</a>
                                    <span> </span>
                                    <MailOutlineOutlinedIcon />
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white">+255 222 771 368</a>
                                    <span> </span>
                                    <PhoneEnabledOutlinedIcon />
                                </li>
                                <li>
                                    <br />
                                    <p className="text-gray-400 hover:text-white">P.O Box No. 34603 <br />Abla Complex, 2nd floor, office No. 202 <br />Rose Garden Road, Mikocheni A <br />Dar Es Salaam, Tanzania </p>
                                </li>
                            </nav>
                        </div>
                    </div>

                </div>
                <div className="bg-gray-800 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© 2020 CITS —
        <a href="https://www.cits.co.tz" className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">Corporate Information Technology Solutions Limited - CITS</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-400">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        )
    }
}

const mapStateToProps = (state: { firestore: { ordered: { Products: any; }; }; product: { products: any; }; }) => {
    console.log(state);
    return {
        products: state.firestore.ordered.Products
    }
}


export default compose<any>(
    connect(mapStateToProps),
    firestoreConnect(['Products'])
)(Footer)
