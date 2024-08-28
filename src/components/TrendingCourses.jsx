import React, { useState } from 'react';

function TrendingCourses() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
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
                                        <button className="text-white font-semibold py-2 px-4 bg-orange rounded hover:bg-orange-600">
                                            Explore More
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: 'Digital Marketing',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Course',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital IoT',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Marketing',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Management',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Marketing',
        description: 'BEST DIGITAL IN DELHI NCR',
        image: './Images/digitall.png'
    }
];

export default TrendingCourses;


