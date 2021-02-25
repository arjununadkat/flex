import React from 'react'
import { iService } from '../../../global'
import { Link } from 'react-router-dom'

function ServiceItem(service: iService) {
    return (
        <div className="p-4 lg:w-1/3">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{service.title}</h1>
                <p className="leading-relaxed mb-3">{service.description}</p>
                <Link
                    to={
                        service.link
                        
                    } className="mt-3 text-blue-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default ServiceItem
