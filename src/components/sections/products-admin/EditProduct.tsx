import React, { useState } from 'react'
import { iProduct } from '../../../global'
import { connect } from 'react-redux'
import { updateProduct } from '../../../features/actions/productActions'
import firebase from '../../../config/firebaseConfig'
import { useToasts } from 'react-toast-notifications'
import { Redirect } from 'react-router-dom'

function EditProduct(props: any) {
    const { auth }: any = props;
    const [files, setFiles] = useState<File | null>();
    const { addToast } = useToasts()
    const product: iProduct = {
        product: props.location.state.product.product,
        id: props.match.params.id,
        banner: props.location.state.product.banner,
        bannerPath: props.location.state.product.bannerPath,
        summary: props.location.state.product.summary,
        benefit: props.location.state.product.benefit,
        details: props.location.state.product.details
    }

    //console.log(product);

    const updateDocument = async () => {
        if (!files) {
            props.updateProduct(product);
        } else {
            //delete the banner in the storage
            //upload new one
            //get the path
            //set it to the document
            const filePath = `banners/${new Date().getTime()}-${files.name}`;
            const storage = firebase.storage();
            const storageRef = storage.ref();
            const imageRef = storageRef.child(filePath);
            const uploadTask = imageRef.put(files);
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                addToast("Uploading Image " + progress + "%", { appearance: 'info', autoDismiss: true });
            }, (error) => {
                console.log(error)
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
                    try {
                        addToast("Uploaded Image", { appearance: 'success', autoDismiss: true });
                        const fileLocation = uploadTask.snapshot.ref.fullPath;


                        //create a reference to the file to delete
                        if (product.bannerPath && product.banner) {
                            var desertRef = storageRef.child(product.bannerPath);
                            console.log(product.bannerPath)
                            console.log("File path to delete", desertRef);


                            console.log("Banner: ", product.banner);
                            desertRef.delete().then(() => {
                                //     // File deleted successfully
                                addToast("Deleted Image", { appearance: 'success', autoDismiss: true })
                            }).catch((error) => {
                                // window.location.reload();
                                addToast(error, { appearance: 'error', autoDismiss: true })
                            });
                        }
                        product.bannerPath = fileLocation;
                        product.banner = downloadURL;
                        addToast("Updated Image", { appearance: 'success', autoDismiss: true })
                    } catch (err) {
                        console.log(err)
                    }
                    console.log("REF:", storageRef);
                    console.log("Path:", product.bannerPath);
                    console.log("Banner:", product.banner);
                    props.updateProduct(product);

                })
            });
        }
        console.log(product);

    }
    const onFileChange = (e: any) => {
        setFiles(e.target.files[0]);
    }

    if (!auth.uid) return <Redirect to='/' />

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Edit Product</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Document ID's cannot be changed. Delete a product and add a new one if you wish to use a different ID</p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Product Name: {product.product}</p>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Product ID: {product.id}</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Product Name</label>
                                    <input readOnly type="text" id="name" name="name" value={product.product} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="banner" className="leading-7 text-sm text-gray-600">Change product banner</label>
                                    <input type="file" id="banner" name="banner" onChange={onFileChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="summary" className="leading-7 text-sm text-gray-600">Product Summary</label>
                                    <textarea id="summary" name="summary" defaultValue={product.summary} onChange={e => product.summary = e.target.value} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>


                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="details" className="leading-7 text-sm text-gray-600">Product Details</label>
                                    <textarea id="details" name="details" defaultValue={product.details} onChange={e => product.details = e.target.value} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="benefits" className="leading-7 text-sm text-gray-600">Product Benefits (Put each benefit on its own line)</label>
                                    <textarea id="benefits" name="benefits" defaultValue={product.benefit.join("\n")} onChange={e => product.benefit = e.target.value.split("\n")} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>

                            <div className="p-2 w-full inline-flex items-center">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={updateDocument} > Save Changes</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
const mapStateToProps = (state: { firebase: { auth: any } }) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateProduct: (product: iProduct) => dispatch(updateProduct(product))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
