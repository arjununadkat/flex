import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../features/actions/productActions'

class CreateProduct extends Component<any, any> {

    state = {
        prodID: '',
        product: '',
        summary: '',
        details: '',
        benefit: '',
        banner: '',
    }
    onFileChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.files[0]
        })
    }
    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        this.props.createProduct(this.state);


    }

    render() {
        return (
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create Product</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please use a unique product ID</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="prodID" className="leading-7 text-sm text-gray-600">Product ID consider appending the product name to flex- </label>
                                    <input type="text" id="prodID" placeholder="flex-new-product" onChange={this.handleChange} name="prodID" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="product" className="leading-7 text-sm text-gray-600">Product Name</label>
                                    <input type="text" id="product" name="product" onChange={this.handleChange} placeholder="Flex New Product" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="banner" className="leading-7 text-sm text-gray-600">Upload your product banner, Use 1200x500 sizes for best results</label>
                                    <input type="file" id="banner" name="banner" onChange={this.onFileChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="summary" className="leading-7 text-sm text-gray-600">Product Summary</label>
                                    <textarea id="summary" name="summary" onChange={this.handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="details" className="leading-7 text-sm text-gray-600">Product Details</label>
                                    <textarea id="details" name="details" onChange={this.handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="benefits" className="leading-7 text-sm text-gray-600">Product Benefits (Put each benefit on its own line)</label>
                                    <textarea id="benefits" name="benefits" onChange={this.handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full inline-flex items-center">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={this.handleSubmit} >Save Changes</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        createProduct: (product: any) => dispatch(createProduct(product))
    }
}
export default connect(null, mapDispatchToProps)(CreateProduct)
