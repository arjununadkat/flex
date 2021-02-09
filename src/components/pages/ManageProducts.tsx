import { compose } from '@reduxjs/toolkit';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { iProduct } from '../../global';
import ProductListItemAdmin from '../sections/products-admin/ProductListItemAdmin';
class ManageProducts extends Component {
    render() {
        const { products, auth }: any = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
                    <br className="hidden sm:block" />Selfies Wayfarers
                </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        {products && products.map((product: iProduct) => {
                            return (
                                <ProductListItemAdmin
                                    product={product.product}
                                    banner={product.banner}
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
