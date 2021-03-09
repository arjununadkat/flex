import React from 'react'

function ServiceItem(props: any) {
    console.log(props);
    const id = props.match.params.id;
    const title = props.location.state.service.title;
    const desc = props.location.state.service.description;

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
                    <p className="mb-8 leading-relaxed">{desc}</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Arji Button</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Arjin Secondary Btn</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceItem
