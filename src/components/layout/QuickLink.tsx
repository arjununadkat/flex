import React from 'react'
import { Link } from 'react-router-dom'

function QuickLink({ product }: any) {
    return (
        <li>
            <Link to={`/products/${product.id}`} className="text-gray-600 hover:text-gray-800">{product.product}</Link>
        </li>
    )
}

export default QuickLink
