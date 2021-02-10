import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="text-gray-200 body-font container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            <div className="text-center lg:w-2/3 w-full">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Presenting...</h2>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">Flex Software Suite</h1>
                <p className="mb-8 leading-relaxed">A group of products that are designed, developed and deployed by Corporate Information Technology Solutions, trading as CITS.</p>
                <div className="flex justify-center">
                    <Link to="/products" className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Learn More</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
