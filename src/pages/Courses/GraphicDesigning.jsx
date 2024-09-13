import React, { useState } from 'react';
import graphic from '../../assets/images/graphicdesigning.png';
import download from '../../assets/images/download.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const GraphicDesigning = () => {
    const [openWeek, setOpenWeek] = useState(null);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };

    const weeks = [
        {
            week: "Week 1: Introduction to Graphic Design",
            details: [
                "Overview of Graphic Design and Its Applications",
                "Understanding Design Elements and Principles",
                "Introduction to Adobe Creative Suite"
            ]
        },
        {
            week: "Week 2: Typography and Color Theory",
            details: [
                "Understanding Typography and Font Selection",
                "The Psychology of Color in Design",
                "Creating Effective Color Palettes"
            ]
        },
        {
            week: "Week 3: Digital Illustration Techniques",
            details: [
                "Introduction to Digital Drawing Tools",
                "Creating Vector Graphics in Adobe Illustrator",
                "Designing Simple Illustrations"
            ]
        },
        {
            week: "Week 4: Working with Adobe Photoshop",
            details: [
                "Introduction to Photoshop Tools and Workspace",
                "Image Editing and Manipulation",
                "Creating Posters and Flyers"
            ]
        },
        {
            week: "Week 5: Branding and Identity Design",
            details: [
                "Understanding Brand Identity",
                "Designing Logos and Brand Elements",
                "Creating a Visual Identity System"
            ]
        },
        {
            week: "Week 6: Designing for Web and Print",
            details: [
                "Web vs Print Design - Key Differences",
                "Designing Layouts for Print (Brochures, Business Cards)",
                "Designing User Interfaces for Web Applications"
            ]
        },
        {
            week: "Week 7: Advanced Photoshop Techniques",
            details: [
                "Photo Retouching and Editing",
                "Creating Composites and Collages",
                "Working with Layers and Masks"
            ]
        },
        {
            week: "Week 8: Creating Social Media Graphics",
            details: [
                "Designing Engaging Social Media Posts",
                "Understanding Dimensions and Formats for Various Platforms",
                "Creating Ads and Banners"
            ]
        },
        {
            week: "Week 9: Introduction to Adobe InDesign",
            details: [
                "Working with Layouts and Grids",
                "Creating Multi-Page Documents",
                "Designing Magazines, E-books, and Reports"
            ]
        },
        {
            week: "Week 10: User Interface (UI) Design",
            details: [
                "Introduction to UI/UX Design",
                "Creating Wireframes and Mockups",
                "Designing User-Friendly Interfaces"
            ]
        },
        {
            week: "Week 11: Portfolio Development",
            details: [
                "Building a Graphic Design Portfolio",
                "Selecting and Presenting Design Projects",
                "Personal Branding and Marketing"
            ]
        },
        {
            week: "Week 12: Capstone Project",
            details: [
                "Designing a Complete Branding Package",
                "Creating a Web or Print-Based Design Project",
                "Final Presentation and Review"
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-indigo-950 w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Graphic Designing</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
        Graphic Designing is an essential skill for creating visual content that communicates ideas effectively. This course takes you through the fundamental principles of design, digital tools, and creative techniques. You’ll learn how to create stunning graphics, work with various design software, and develop your own design projects. Whether you’re looking to start a career in design or improve your creative skills, this course offers a comprehensive path to mastering graphic design.
            {/* Truncated for brevity */}
        </p>

        <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
    <button className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
        Download Brochure
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
    </button>
    <Link to='/contact'>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Contact Now
        <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
    </button></Link>
    <Link to ='/enrollnow' >
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Enroll Now
        {/* <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" /> */}
    </button>
    </Link>
</div>

    </div>

    <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={graphic} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Graphic Designing: Create Visual Masterpieces</h1>

        <div className='flex flex-col lg:flex-row justify-center pt-5'>
            {/* Table of Contents */}
            <div className='lg:w-1/2 '>
                <h1 className='text-xl lg:text-2xl font-medium'>Table of Contents</h1>
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
                    <pre className='font-sans text-lg font-semibold'>Level:                   Beginner</pre>
                    <pre className='font-sans text-lg font-semibold'>Total Duration :   3/6 months</pre>
                    <pre className='font-sans text-lg font-semibold'>Certificate:           Certificate of Completion</pre>
                </div>
                
                {/* Requirements */}
                <div>
                    <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                    <p className='pt-3'>
                        Basic knowledge of design principles
                        Familiarity with digital tools like Adobe Photoshop/Illustrator
                        A creative mindset and attention to detail
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of Graphic Designing training with us, you would be fully knowledgeable about various Graphic Designing disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>Graphic design principles</li>
                        <li>Typography and color theory</li>
                        <li>Digital illustration techniques</li>
                        <li>Branding and identity design</li>
                        <li>Adobe Photoshop, Illustrator, and InDesign</li>
                        <li>User interface (UI) design</li>
                        <li>Image editing and retouching</li>
                        <li>Designing for web and print</li>
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

export default GraphicDesigning;
