import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../../css/video.css'
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
            <header className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
                <div className="h-screen  flex items-center justify-center">
                    <Slider {...settings} className="mx-2 text-center slider">
                        <HeroSection subTitle="Presenting..."
                            title="Flex Software Suite"
                            buttonText="Learn More"
                            link="/products"
                        />
                        <HeroSection subTitle="Presenting..."
                            title="Flex Software Suite"
                            buttonText="Learn More"
                            link="/products"
                        />
                    </Slider>

                </div>
            </header>

        )
    }
}
export default Hero
