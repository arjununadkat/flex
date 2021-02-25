import React from 'react'
import { Link } from 'react-router-dom'
import { iHeroItem } from '../../../global'
function HeroSection(heroItem: iHeroItem) {
    return (
        <div>
            
            <h1 className="text-black font-extrabold text-l xs:text-xl md:text-xl">{heroItem.title}</h1>
            <h2 className="my-5 text-black font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">{heroItem.subTitle}</h2>

            <div className="flex justify-center my-5">
                <Link to={heroItem.link} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">{heroItem.buttonText}</Link>
            </div>
        </div>
    )
}

export default HeroSection
