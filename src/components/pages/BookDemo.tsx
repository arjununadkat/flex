import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux'
import React, { useState } from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com'
import { useToasts } from 'react-toast-notifications'


function BookDemo(props: any) {
    const [startDate, setStartDate]: any = useState(new Date());
    const [endDate, setEndDate]: any = useState(new Date());
    const { products }: any = props;
    var state: any = {
        date_from: '',
        date_to: '',
        email: '',
        last_name: '',
        first_name: '',
        phone_number: '',
        address: '',
        questions: '',
        product_name: ''
    }
    const formatDate = (dateString: string) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }
    const sendEmail = async (e: any) => {
        e.preventDefault();
        state.date_from = formatDate(startDate);
        state.date_to = formatDate(endDate);
        emailjs.send('service_agyidqo', 'template_p7zgu7k', state, 'user_4pxbqRR0umxRjmcz8T0Nc')
            .then((response) => {
                console.log("success");
                state = {
                    date_from: '',
                    date_to: '',
                    email: '',
                    last_name: '',
                    first_name: '',
                    phone_number: '',
                    address: '',
                    questions: '',
                    product_name: ''
                }

            }, function (error) {
                console.log(error)
            });


        console.log(state);
    };
    console.log("Product:", products);
    const data = [];
    for (var char of products) {
        const item = char.product;
        const entry = {
            value: item,
            label: item
        };
        data.push(entry);
    }
    return (
        <div>
            <section className="bg-gray-800 text-gray-100 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex justify-start relative">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Flex Software Suite</h1>
                    </div>
                    <form onSubmit={sendEmail} className="lg:w-2/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <div className="relative mb-4">
                            <p className="leading-7 text-sm text-gray-100">Select your start (left) and end dates (right)</p>
                            <DatePicker selected={startDate} onChange={date => state.startDate = date && setStartDate(date)} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <DatePicker selected={endDate} onChange={date => state.endDate = date && setEndDate(date)} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4 text-gray-900">
                            <p className="leading-7 text-sm text-gray-100">Select your Product</p>
                            <Select options={data} onChange={selectedOption /* type is automatically inferred here */ => {
                                if (Array.isArray(selectedOption)) {
                                    throw new Error("Unexpected type passed to ReactSelect onChange handler");
                                }
                                if (selectedOption) {
                                    state.product_name = selectedOption.value;
                                }
                            }} />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="first_name" className="leading-7 text-sm text-gray-100">First Name</label>
                            <input type="text" id="first_name" name="first_name" onChange={e => state.first_name = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="last_name" className="leading-7 text-sm text-gray-100">Last Name</label>
                            <input type="text" id="last_name" name="last_name" onChange={e => state.last_name = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="phone_number" className="leading-7 text-sm text-gray-100">Phone Number</label>
                            <input type="text" id="phone_number" name="phone_number" onChange={e => state.phone_number = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-100">Email</label>
                            <input type="email" id="email" name="email" onChange={e => state.email = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="address" className="leading-7 text-sm text-gray-100">Address</label>
                            <textarea id="address" name="address" onChange={e => state.address = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="questions" className="leading-7 text-sm text-gray-100">Futher Questions/Comments</label>
                            <textarea id="questions" name="questions" onChange={e => state.questions = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>

                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" type="submit">Book Product</button>
                        <p className="text-xs text-gray-500 mt-3">We'll get back to you</p>
                    </form>
                </div>
            </section>
        </div>
    )
}



const mapStateToProps = (state: { firestore: { ordered: { Products: any; }; }; product: { products: any; }; }) => {
    console.log(state);
    return {
        products: state.firestore.ordered.Products
    }
}

export default compose<any>(
    connect(mapStateToProps),
    firestoreConnect(['Products'])
)(BookDemo)
