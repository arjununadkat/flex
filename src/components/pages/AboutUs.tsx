import React from 'react'
import History from '../sections/about/History'
import OtherServices from '../sections/about/OtherServices'
import Values from '../sections/about/Values'

function AboutUs() {
    return (
        <div>
            <Values />
            <div className="bg-gray-900">
                <History />
                <OtherServices />
            </div>

        </div>
    )
}

export default AboutUs
