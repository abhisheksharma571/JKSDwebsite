import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TrendingCourses() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>

        <h1 className=' md:text-5xl  text-[#08528e] text-center pt-10 font-philosopher font-black text-2xl bg-gray-200'>Our Trending Courses</h1>
        <div className="h-full py-10 flex items-center justify-center bg-gray-200">
    <div
        className="flex space-x-4 overflow-x-auto p-4 transform rotate-90 md:rotate-0 transition-transform duration-700"
    >
        {data.map((course, index) => (
            <div
                key={index}
                className={`card cursor-pointer transition-all duration-700 ease-[cubic-bezier(.28,-0.03,0,.99)] overflow-hidden ${
                    activeIndex === index ? 'w-[800px]' : 'w-[120px]'
                } h-[400px] bg-gray-800 rounded-2xl flex items-end relative`}
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
                                {/* Title adjustment */}
                                <h4 className="uppercase text-sm md:text-3xl md:text-nowrap font-bold text-white md:rotate-0 -rotate-90">
                                    {course.title}
                                </h4>
                                {/* Hide description on smaller screens */}
                                <p className="text-gray-400 hidden lg:block mt-2 md:text-nowrap">{course.description}</p>
                            </div>
                            <div className="mt-4 flex justify-center md:justify-end w-full md:rotate-0 -rotate-90 mb-4">
                                <Link to={`/${course.id}`}>
                                    <button className="text-white font-semibold py-2 px-4 bg-orange rounded hover:bg-orange-600">
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

        </>
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


