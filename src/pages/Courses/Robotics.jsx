import React, { useState } from 'react';
import robotics from '../../assets/images/robotics.jpg';
import download from '../../assets/images/download.png';
import share from '../../assets/images/share.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Robotics = () => {
    const [openWeek, setOpenWeek] = useState(null);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };

    const weeks = [
        {
            week: "Week 1: Introduction to Robotics",
            details: [
                "History of Robotics",
                "Basic Concepts of Robot Design",
                "Introduction to Robotic Hardware"
            ]
        },
        {
            week: "Week 2: Programming Robots",
            details: [
                "Introduction to Robot Operating Systems (ROS)",
                "Control Systems in Robotics",
                "Basics of Robot Motion"
            ]
        },
        {
            week: "Week 3: Sensors and Actuators",
            details: [
                "Understanding Sensors in Robotics",
                "Integrating Sensors with Robots",
                "Actuators and Their Role in Movement"
            ]
        },
        {
            week: "Week 4: Artificial Intelligence in Robotics",
            details: [
                "Basics of AI in Robotics",
                "Machine Learning for Robots",
                "Pathfinding Algorithms"
            ]
        },
        {
            week: "Week 5: Robotic Vision Systems",
            details: [
                "Introduction to Computer Vision",
                "Image Processing Techniques",
                "Implementing Vision Systems in Robots"
            ]
        },
        {
            week: "Week 6: Robot Communication Systems",
            details: [
                "Wireless Communication for Robots",
                "Interfacing Robots with Networks",
                "Real-time Data Transmission"
            ]
        },
        {
            week: "Week 7: Autonomous Navigation",
            details: [
                "Mapping and Localization",
                "Path Planning for Autonomous Robots",
                "Avoiding Obstacles"
            ]
        },
        {
            week: "Week 8: Multi-Robot Systems",
            details: [
                "Collaborative Robots (CoBots)",
                "Swarm Robotics Concepts",
                "Coordinating Multiple Robots"
            ]
        },
        {
            week: "Week 9: Machine Learning for Robotics",
            details: [
                "Introduction to Reinforcement Learning",
                "Supervised vs. Unsupervised Learning",
                "Implementing ML Models in Robotics"
            ]
        },
        {
            week: "Week 10: Advanced Robotics Programming",
            details: [
                "Programming Complex Behaviors",
                "Real-time Decision Making",
                "Integration with AI Systems"
            ]
        },
        {
            week: "Week 11: Testing and Debugging Robots",
            details: [
                "Debugging Techniques for Robotics",
                "Using Simulations for Testing",
                "Troubleshooting Robotic Systems"
            ]
        },
        {
            week: "Week 12: Capstone Project",
            details: [
                "Building an Autonomous Robot",
                "Integrating Software and Hardware",
                "Final Testing and Presentation"
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-indigo-950 w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Robotics</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
        Dive into the world of robotics where technology meets engineering. This course is designed to give you practical skills in robotics, from basic design concepts to advanced programming and integration. You’ll work on real-world projects to develop autonomous robots and understand their real-life applications.
            {/* Truncated for brevity */}
        </p>

        <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
    <button className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
        Download Brochure
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
    </button>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Contact Now
        <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
    </button>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Share
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" />
    </button>
</div>

    </div>

    <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={robotics} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Robotics: Build and Program</h1>

        <div className='flex flex-col lg:flex-row justify-center pt-5 m-2'>
            {/* Table of Contents */}
            <div className='lg:w-1/2 '>
                <h1 className='text-xl lg:text-2xl font-bold text-center'>Table of Contents</h1>
                {weeks.map((item, index) => (
                    <div key={index} className="border-b border-orange">
                        <button
                            className="w-full flex justify-between items-center py-4 text-lg font-semibold focus:outline-none"
                            onClick={() => toggleWeek(index)}
                        >
                            <span>{item.week}</span>
                            <i className={`fas fa-chevron-down transform transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`}></i>
                        </button>
                        <ul
                            className={`text-lg transition-all duration-500 overflow-hidden ${openWeek === index ? 'max-h-40 opacity-100 py-4 px-3' : 'max-h-0 opacity-0'}`}
                        >
                            {item.details.map((detail, idx) => (
                                <li key={idx} className="ml-4 list-disc">{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Course Details */}
            <div className='lg:ml-14 lg:pl-5 mt-6 lg:mt-0 lg:w-2/3'>
                <h1 className='font-medium text-xl lg:text-2xl'>Course Details</h1>
                <div className='text-[16px] lg:text-[20px] pt-3 font-medium'>
                    <pre>Level:             Beginner</pre>
                    <pre>Total Duration :   3/6 months</pre>
                    <pre>Certificate:      Certificate of Completion</pre>
                </div>
                
                {/* Requirements */}
                <div>
                    <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                    <p className='pt-3'>
                        Basic programming knowledge
                        Understanding of electronics
                        Interest in robotics
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of Robotics: Build and Program training with us, you would be fully knowledgeable about various Robotics: Build and Program disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>Robotic system design</li>
                        <li>Programming with Robot Operating Systems (ROS)</li>
                        <li>Sensor integration and control</li>
                        <li>Machine learning for robots</li>
                        <li>Robotic vision systems</li>
                        <li>Autonomous robot navigation</li>
                        <li>Building functional robots</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


            {/* Digital Marketing: Thrive and Grow section close here  */}


 {/* cartificate section start here  */}

 <div className='cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-white gap-4 justify-center items-center'>
    {/* Left Content Section */}
    <div className="text-black lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
        
        {/* Text Content */}
        <h1 className='text-orange ml-10 lg:ml-5 font-medium text-2xl lg:text-3xl pr-40 pt-0 lg:pt-16 '>
            Validating Your Success: About Your Certificate
        </h1>
        <p className='pt-6 lg:pt-10 font-medium mr-6  ml-10 lg:ml-5'>
            Once you complete the course videos, assignments, and quizzes, you will be able to generate the certificate.
        </p>
        <ul className='list-disc ml-10 lg:ml-5 pl-10 mr-6 pt-4 lg:pt-6'>
            <li>After watching 60% of videos</li>
            <li>After scoring 60% in quiz & assignment</li>
            <li>After completing 1 medium-level project on Experience Portal</li>
        </ul>
        
        {/* Certificate Information */}
        <div className='pt-6 '>
            <h1 className='text-xl ml-10 lg:ml-5 lg:text-2xl font-medium'>
                Certification From JKSD Infotech Pvt. Ltd.
            </h1>
        </div>
    </div>

    {/* Right Image Section */}
    <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 mb-5 lg:p-5 flex justify-center shadow-xl">
        <img className='h-auto w-full' src={cartificate} alt="Certificate" />
    </div>
</div>

        </div>
    
    );
};

export default Robotics;
