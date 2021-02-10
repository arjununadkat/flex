import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { iProduct } from '../../../global'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function ProductListItemAdmin(product: iProduct) {

    return (

        <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
                <h2 className="text-white text-lg title-font font-medium mb-2">{product.product}</h2>
                <p className="leading-relaxed text-base">{product.summary}</p>
                <div className="p-2 w-full inline-flex items-center">
                    <Link
                        to={{
                            pathname: `/admin/edit/${product.id}`,
                            state: { product: product }
                        }} className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"  > <EditIcon /> Edit Product</Link>
                    <Link
                        to={{
                            pathname: `/admin/delete/${product.id}`,
                            state: { product: product }
                        }} className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"  > <DeleteIcon /> Delete Product</Link>
                </div>

            </div>
        </div>



    )
}

export default ProductListItemAdmin
