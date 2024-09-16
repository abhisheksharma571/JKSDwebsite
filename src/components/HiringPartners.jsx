import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HiringPartners() {
    var settings = {
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        centerMode: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                },
            },
        ],
    };
  return (
    <div className='w-full max-w-[1300px] mx-auto pb-10'>

        <h1 className=' md:text-5xl  text-[#08528e] text-center pt-10 font-philosopher font-black text-2xl'>Our Placement Partners</h1>

        <div className='mt-5 md:mt-10 [767px]:mt-0 px-10'>
        <Slider {...settings}>
                    {logos.map((d, index) => (
                        <div
                            key={index}
                            className="h-[20px] text-black rounded-xl"
                        >
                            <div className="flex justify-center items-center ">
                                <img src={d} alt="" className="h-20 w-48 object-cover rounded-lg custom-shadow"/>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>
      
    </div>
  )
}

const logos = [
    './companiesLogo/dell.png', 
    './companiesLogo/hcl.png', 
    './companiesLogo/icici.png', 
    './companiesLogo/igate.png', 
    './companiesLogo/impulsebyte.png', 
    './companiesLogo/itc.png', 
    './companiesLogo/lnt.png', 
    './companiesLogo/nokia.png', 
    './companiesLogo/samsung.png', 
    './companiesLogo/techMahindra.png' 
]
export default HiringPartners
