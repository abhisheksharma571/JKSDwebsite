import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TrendingCourses() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
        <h1 className=' md:text-5xl  text-[#08528e] text-center pt-10 font-roboto-slab font-black text-2xl bg-gray-200'>Our Training Courses</h1>
        <div className="h-full py-10 flex items-center justify-center bg-gray-200">
            <div className="flex space-x-4 overflow-x-auto p-4">
                {data.map((course, index) => (
                    <div
                        key={index}
                        className={`card cursor-pointer transition-all duration-700 ease-[cubic-bezier(.28,-0.03,0,.99)] overflow-hidden ${
                            activeIndex === index ? 'w-[800px]' : 'w-[120px]'
                        } h-[400px] bg-gray-800 rounded-2xl flex items-end relative`}
                        onClick={() => handleCardClick(index)}
                    >
                        {activeIndex !== index && (
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transform -rotate-90 origin-center">
                                <span className="text-white text-lg font-bold">{course.title}</span>
                            </div>
                        )}
                        {activeIndex === index && (
                            <>
                                <img 
                                    src={course.image} 
                                    alt={course.title} 
                                    className="absolute inset-0 w-full h-full object-cover" 
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-black bg-opacity-50 backdrop-blur-lg flex justify-around p-4">
                                    <div className="description">
                                        <h4 className="uppercase text-3xl font-bold text-white">{course.title}</h4>
                                        <p className="text-gray-400 mt-2">{course.description}</p>
                                    </div>
                                    <div className="mt-4">
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
        image: './Images/IoT.png'
    },
    {
        id: 'python',
        title: 'Python',
        description: 'Build applications with Python, a versatile language',
        image: './Images/python.jpg'
    },
    {
        id: 'dataanalytics',
        title: 'Data Analyst',
        description: 'Analyze data for actionable insights',
        image: './Images/Data.webp'
    },
    {
        id: 'digitalmarketing',
        title: 'Digital Marketing',
        description: 'Drive online growth through SEO, social media, and ads',
        image: './Images/digitall.png'
    },
    {
        id: 'businessanalyst',
        title: 'Business Analyst',
        description: 'Analyze data for actionable insights',
        image: './Images/graphicdesigning.png'
    },
    {
        id: 'graphicdesigning',
        title: 'Graphic Designing',
        description: 'Design stunning visuals and graphics using modern tools',
        image: './Images/graphicdesigning.png'
    }
];

export default TrendingCourses;


