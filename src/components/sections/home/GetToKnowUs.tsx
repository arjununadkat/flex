import React from 'react'
import HomeProductsList from './HomeProductsList'

function GetToKnowUs() {
    return (
        <div className="container text-gray-600 body-font px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div className="flex flex-wrap">
                <HomeProductsList />
                <HomeProductsList />
                <HomeProductsList />
                <HomeProductsList />
            </div>
        </div>
    )
}

export default GetToKnowUs
