import { compose } from '@reduxjs/toolkit';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { iProduct } from '../../global';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'
import ProductListItemAdmin from '../sections/products-admin/ProductListItemAdmin';
class ManageProducts extends Component {
    render() {
        window.scrollTo(0, 0); //scrolls to top on redirect
        const { products, auth }: any = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <section className="bg-gray-800 text-gray-100 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Manage your products</h1>
                    <Link to="/admin/newproduct" className="inline-flex text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded">
                        <AddIcon />
                        <span>Add New</span>
                    </Link>
                    <br />
                    <br />
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        {products && products.map((product: iProduct) => {
                            return (
                                <ProductListItemAdmin
                                    product={product.product}
                                    banner={product.banner}
                                    bannerPath={product.bannerPath}
                                    benefit={product.benefit}
                                    summary={product.summary}
                                    details={product.details}
                                    id={product.id}
                                    key={product.id} />
                            )
                        })}


                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state: { firestore: { ordered: { Products: iProduct; }; }; firebase: { auth: any; }; }) => {
    console.log(state);
    return {
        products: state.firestore.ordered.Products,
        auth: state.firebase.auth
    }
}

export default compose<any>(
    connect(mapStateToProps),
    firestoreConnect(['Products'])
)(ManageProducts)
