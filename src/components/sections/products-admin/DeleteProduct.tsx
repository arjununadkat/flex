import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { deleteProduct } from '../../../features/actions/productActions'
import { iProduct } from '../../../global'
import { useToasts } from 'react-toast-notifications'

function DeleteProduct(props: any) {
    const id = props.match.params.id;
    const title = props.location.state.product.product;
    const benefits = props.location.state.product.benefit;
    const details = props.location.state.product.details;
    const summary = props.location.state.product.summary;
    const banner = props.location.state.product.banner;
    const product: iProduct = {
        id: id,
        product: title,
        benefit: benefits,
        details: details,
        summary: summary,
        banner: banner
    }

    const { addToast } = useToasts()

    const deleteProduct = (e: any) => {
        //deleteProduct
        props.deleteProduct(product, addToast);
        props.history.push('/admin/manage');
    }
    const { auth }: any = props;

    console.log("The item is:", props);

    if (!auth.uid) return <Redirect to='/' />
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Confirm deletion of {title}?</h1>
                    <p className="mb-8 leading-relaxed">This action cannot be undone</p>
                    <div className="flex justify-center">
                        <button onClick={deleteProduct} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Yes</button>
                        <Link to="/admin/manage" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">No</Link>
                    </div>
                </div>
            </div>
        </section>
    )

}
const mapStateToProps = (state: { firebase: { auth: any } }) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteProduct: (product: iProduct, addToast: any) => dispatch(deleteProduct(product, addToast))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct)
