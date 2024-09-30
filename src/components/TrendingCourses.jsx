import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TrendingCourses() {
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen width is mobile size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint as needed
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Slick settings for mobile devices
    var sliderSettings = {
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // State to manage card click for larger devices
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full max-w-[1300px] mx-auto ">
            <h1 className="md:text-5xl text-[#08528e] text-center pt-10 font-philosopher font-black text-2xl">
                Our Trending Courses
            </h1>

            {isMobile ? (
                // Render slider for mobile devices
                <div className="mt-3 md:mt-10 px-4 md:px-10">
                    <Slider {...sliderSettings}>
                        {data.map((course, index) => (
                            <div
                                key={index}
                                className="h-[270px] md:h-[400px] text-black rounded-xl"
                            >
                                <div className="flex flex-col justify-center items-center bg-[#08528e] rounded-lg shadow-[2px_2px_10px_0px_rgba(0,0,0,0.5)] p-0 md:p-5 h-full">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="h-[140px] md:h-[200px] w-[250px] md:w-full object-cover rounded-md mb-4"
                                    />
                                    <h4 className="uppercase text-lg font-bold text-white">
                                        {course.title}
                                    </h4>
                                    <Link to={`/${course.id}`}>
                                        <button className="text-white font-semibold text-sm md:text-md py-2 px-4 bg-orange rounded hover:bg-orange-600 mt-5">
                                            Explore More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                // Render rotating cards for larger devices
                <div className="h-full flex items-center justify-center">
                    <div
                        className="flex space-x-6 overflow-x-auto transform rotate-0 transition-transform duration-700"
                    >
                        {data.map((course, index) => (
                            <div
                                key={index}
                                className={`card cursor-pointer transition-all duration-700 ease-[cubic-bezier(.28,-0.03,0,.99)] overflow-hidden ${
                                    activeIndex === index ? 'w-[800px]' : 'w-[130px]'
                                } h-[400px] bg-[#08528e] rounded-md md:rounded-2xl my-6 flex items-end relative`}
                                onClick={() => handleCardClick(index)}
                            >
                                {activeIndex !== index && (
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -rotate-90 md:rotate-0 origin-center">
                                        <span className="text-white text-sm md:text-lg font-bold whitespace-nowrap md:-rotate-90">{course.title}</span>
                                    </div>
                                )}
                                {activeIndex === index && (
                                    <>
                                        <img 
                                            src={course.image} 
                                            alt={course.title} 
                                            className="absolute inset-0 w-full h-full object-cover md:rotate-0 -rotate-90" 
                                        />
                                        <div className="absolute bottom-0 inset-x-0 h-auto md:h-[100px] bg-black bg-opacity-50 backdrop-blur-lg flex flex-row justify-center md:justify-around items-center md:items-start p-4">
                                            <div className="description text-center md:text-left">
                                                <h4 className="uppercase text-sm md:text-3xl lg:text-nowrap font-bold text-white md:rotate-0 -rotate-90">
                                                    {course.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm mt-1 text-nowrap">
                                                    {course.description}
                                                </p>
                                            </div>
                                            <div className="mt-4 flex justify-center md:justify-end w-full md:rotate-0 -rotate-90 mb-4">
                                                <Link to={`/${course.id}`}>
                                                    <button className="text-white font-semibold text-[12px] md:text-[16px] text-nowrap py-2 px-4 bg-orange rounded hover:bg-orange-600">
                                                        Explore More
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const data = [
    {
        id: 'iot',
        title: 'IoT (Internet of Things)',
        description: 'Embedded Systems & Robotics',
        image: './Images/tiot.png'
    },
    {
        id: 'python',
        title: 'Python',
        description: 'Build applications with Python, a versatile language',
        image: './Images/tpython.png'
    },
    {
        id: 'dataanalytics',
        title: 'Data Analyst',
        description: 'Analyze data for actionable insights',
        image: './Images/tdata.png'
    },
    {
        id: 'digitalmarketing',
        title: 'Digital Marketing',
        description: 'Drive online growth through SEO, social media, and ads',
        image: './Images/tdigital.png'
    },
    {
        id: 'businessanalyst',
        title: 'Business Analyst',
        description: 'Analyze data for actionable insights',
        image: './Images/tbusiness.png'
    },
    {
        id: 'graphicdesigning',
        title: 'Graphic Designing',
        description: 'Design stunning visuals and graphics using modern tools',
        image: './Images/tgraphic.png'
    }
];

export default TrendingCourses;
