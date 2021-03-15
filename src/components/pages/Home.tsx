import { compose } from '@reduxjs/toolkit'
import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { iProduct } from '../../global'
import GetToKnowUs from '../sections/home/GetToKnowUs'
import OurClients from '../sections/home/OurClients'
import Hero from '../sections/home/Hero'
import HomeProductsList from '../sections/home/HomeProductsList'

function Home(props: { products: Array<iProduct> }) {
    const products = props.products;
    console.log(products);
    window.scrollTo(0, 0); //scrolls to top on redirect
    return (
        <div className="bg-gray-800">
            <Hero />
            <section className="text-gray-400 body-font bg-gray-900" >
                <GetToKnowUs />
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Trending Products</h1>
                <div className="flex flex-wrap">
                
                    {products && products.slice(0, 4).map((product: iProduct) => {
                        return (
                            <HomeProductsList
                                id={product.id}
                                product={product.product}
                                details={product.details}
                                summary={product.summary}
                                benefit={product.benefit}
                                key={product.id} />
                        )
                    })}

                </div>
                <OurClients/>
            </section>
        </div>

    )
}

const mapStateToProps = (state: { firestore: { ordered: { Products: iProduct; }; }; product: { products: Array<iProduct>; }; }) => {
    console.log(state);
    return {
        products: state.firestore.ordered.Products
    }
}


export default compose<any>(
    connect(mapStateToProps),
    firestoreConnect(['Products'])
)(Home)
