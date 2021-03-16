import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../../css/background.css'
import HeroSection from './HeroSection';


class TechPartners extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };
        return (
            <div>
              <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">These are our</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Technology Partners</h1>
              <Slider {...settings}>
                <div>
                <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
              </Slider>
            </div>
          );
    }
}
export default TechPartners
