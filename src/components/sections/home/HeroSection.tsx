import React from 'react'
import { Link } from 'react-router-dom'
import { iHeroItem } from '../../../global'
function HeroSection(heroItem: iHeroItem) {
    return (
        <div>
            <h2 className="my-5 text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">{heroItem.subTitle}</h2>
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">{heroItem.title}</h1>

            <div className="flex justify-center my-5">
                <Link to={heroItem.link} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">{heroItem.buttonText}</Link>
            </div>
        </div>
    )
}

export default HeroSection
