import React, { Component } from 'react'
import ProductListItem from '../products/ProductListItem'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from '@reduxjs/toolkit';


class ProductsList extends Component {
    render() {
        //console.log(this.props)
        const { products }: any = this.props;
        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Raw Denim Heirloom Man Braid
                        <br className="hidden sm:block" />Selfies Wayfarers
                    </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        {products && products.map((product: { id: string; }) => {
                            return (
                                <ProductListItem product={product} key={product.id} />
                            )
                        })}


                    </div>
                </div>
            </section>
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
)(ProductsList)
