import React from 'react'
import ServiceItem from './ServiceItem'

function OtherServices() {
    return (
        <section className="text-gray-800 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">Need more?</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">Other Services We Offer</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <ServiceItem
                        title="Unified Communications"
                        link="https://google.com"
                        description="Seamless UC ensures a higher level of interaction among staff members , external experts or consultants aw well as other dispersed workforce. It breaks down the silos between enterprise teams, and ensures that no matter where you work, you can still access the same secure system, equipped with: SMS and IM, Email services, Voicemail, Scheduling Meetings, VoIP and video calling and much more..." />
                    <ServiceItem
                        title="IT Governance Frameworks"
                        link="https://google.com"
                        description="Our concentration area on our IT Governance frameworks implementation is centered on Value, Risk and Control. This is done by looking at the key IT resources such as applications, infrastructure, information and people. As the end products of our IT Governance frameworks implementations, we do put in place internal control systems or framework." />
                    <ServiceItem
                        title="IT Support"
                        link="https://google.com"
                        description="CITS provides on-site , on-demand and on-call IT support services.  Our technical experts team will make sure that your IT infrastructure is secured and attain the required level of availability, confidentiality and integrity. Our support packages include installation, configuration, administration and support of IT Infrastructure ranging from end users to enterprise network and servers." />
                </div>
            </div>
        </section>
    )
}

export default OtherServices
