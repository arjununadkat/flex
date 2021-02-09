import React from 'react'

function BenefitsList({ item }: { item: string }) {
    return (
        <div>
            <span className="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
            </span>{item}
        </div>
    )
}

export default BenefitsList
