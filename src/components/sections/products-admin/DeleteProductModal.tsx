import React from 'react'
import Modal from 'react-modal'
import { iProduct } from '../../../global'
function DeleteProductModal({ isOpen, setModalIsOpen, product }: { isOpen: boolean, setModalIsOpen: any, product: iProduct }) {
    const closeModal = (e: any) => {
        setModalIsOpen(false)
    }
    return (
        <Modal ariaHideApp={false} isOpen={isOpen} >
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Confirm deletion of {product.product}?</h1>
                        <p className="mb-8 leading-relaxed">This action cannot be undone</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Yes</button>
                            <button onClick={closeModal} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">No</button>
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    )
}

export default DeleteProductModal
