import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../../css/background.css'



class OurClients extends Component {

    render() {
        const settings = {
            dots: true,
            
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            swipeToSlide: true,
            
          };
        return (
            <div>
              <h2 className="mt-10 text-xs text-blue-500 tracking-widest font-medium title-font mb-1">These are</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Clients</h1>
              <Slider {...settings}>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
                <div>
                <img className="lg:w-3/6 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
              </Slider>
            </div>
          );
    }
}
export default OurClients
