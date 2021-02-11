import React from 'react'
import emailjs from 'emailjs-com'
import { useToasts } from 'react-toast-notifications'
import { compose } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
function Contact(props: any) {
    console.log("My props are:", props);
    const { addToast } = useToasts();
    var state = {
        name: '',
        email: '',
        message: ''
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        emailjs.send('service_agyidqo', 'template_hcq1axf', state, 'user_4pxbqRR0umxRjmcz8T0Nc')
            .then((response) => {
                console.log("success");
                addToast("Your email has been sent", { appearance: 'success', autoDismiss: true });
                props.history.push('/');
                state = {
                    name: '',
                    email: '',
                    message: ''
                }

            }, function (error) {
                console.log(error)
            });
    };



    return (
        <section className="bg-gray-800 text-gray-100 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" title="map" className="absolute inset-0 map" frameBorder="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-blue-500 leading-relaxed">example@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">+255 222 771 368</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-200 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-100">Have some questions for us?</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-100">Name</label>
                        <input type="text" id="name" name="name" onChange={e => state.name = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <div className="relative mb-4">
                        <label htmlFor="from_email" className="leading-7 text-sm text-gray-100">Email</label>
                        <input type="email" id="from_email" name="from_email" onChange={e => state.email = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-100">Message</label>
                        <textarea id="message" name="message" onChange={e => state.message = e.target.value} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" type='submit'>Send</button>
                    <p className="text-xs text-gray-500 mt-3">We love hearing from you</p>
                </form>
            </div>
        </section>
    )

}
const mapStateToProps = (state: any) => {
    console.log(state);
    return state;
}
export default compose<any>(
    connect(mapStateToProps)
)(Contact)

