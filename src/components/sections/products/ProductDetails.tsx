import React from 'react'
import { Link } from 'react-router-dom';
import BenefitsList from '../../products/BenefitsList';

function ProductDetails(props: any) {
    const id = props.match.params.id;
    const title = props.location.state.product.product;
    const benefits = props.location.state.product.benefit;
    const details = props.location.state.product.details;
    const summary = props.location.state.product.summary;
    const banner = props.location.state.product.banner;

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={banner} />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Benefits</h2>
                                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
                                    {benefits && benefits.map((item: string) => {
                                        return <BenefitsList key={benefits.indexOf(item)} item={item} />
                                    })}
                                </nav>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">{summary} <br /> <br /> {details}</p>
                            <Link to="/bookdemo" className="text-blue-500 inline-flex items-center">Book Demo
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
