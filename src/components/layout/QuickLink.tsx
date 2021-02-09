import React from 'react'
import { Link } from 'react-router-dom'
import { iProduct } from '../../global'

function QuickLink(product: iProduct) {
    return (
        <li>
            <Link to={{
                pathname: `/products/${product.id}`,
                state: { product: product }
            }} className="text-gray-600 hover:text-gray-800">{product.product}</Link>
        </li>
    )
}

export default QuickLink
