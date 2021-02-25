import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../../css/background.css'
import HeroSection from './HeroSection';

class Hero extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div>
                <header className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative hero-header">
                    <div className="h-screen  flex items-center justify-center">
                        <Slider {...settings} className="mx-2 text-center slider">
                            <HeroSection subTitle="Flex Software Suite"
                                title="Presenting..."
                                buttonText="Learn More"
                                link="/products"
                            />
                            <HeroSection subTitle=" - TAMISEMI"
                                title="'Completing the Contact Center Project on time with all those pressure from the Ministry was very good of CITS. We experienced no technical challenges, had good after installation support,  and the project was managed professionally with good updates to stakeholders all the time'"
                                buttonText="Learn More"
                                link="/products"
                            />
                            <HeroSection subTitle="- Jhpiego Director"
                                title="Hongera sana na vijana wako kwa kazi nzuri ya MSDQI Dashboard...watu wote wapo happy hata Donor - USAID.  Uvumilivu wenu na kutafuta suluhisho imekuwa na feedback nzuri. This was very professional "
                                buttonText="Learn More"
                                link="/products"
                            />
                        </Slider>
                        
                    </div>
                </header>

            </div>

        )
    }
}
export default Hero
