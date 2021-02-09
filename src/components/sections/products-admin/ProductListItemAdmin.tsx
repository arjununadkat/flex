import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { iProduct } from '../../../global'


function ProductListItemAdmin(product: iProduct) {

    return (

        <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{product.product}</h2>
                <p className="leading-relaxed text-base">{product.summary}</p>
                <Link
                    to={{
                        pathname: `/admin/edit/${product.id}`,
                        state: { product: product }
                    }} className="mt-3 text-blue-500 inline-flex items-center">Edit
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
                <Link
                    to={{
                        pathname: `/admin/delete/${product.id}`,
                        state: { product: product }
                    }}
                    className="mt-3 text-blue-500 inline-flex items-center">Delete
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>



    )
}

export default ProductListItemAdmin
