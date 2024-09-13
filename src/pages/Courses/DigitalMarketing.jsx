import React, { useState } from 'react';
import digital from '../../assets/images/digitall.png';
import download from '../../assets/images/download.png';
import share from '../../assets/images/share.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';


const DigitalMarketing = () => {
    const digitalBrochureUrl = './brochures/DigitalMarketing.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };
    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            week: "Week 1: Introduction to Digital Marketing",
            details: [
                "Overview of Digital Marketing Landscape",
                "Evolution of Digital Marketing Channels",
                "Importance and Benefits of Digital Marketing",
                "Digital Marketing vs. Traditional Marketing"
            ]
        },
        {
            week: "Week 2: Website Essentials",
            details: [
                "Basics of Website Creation and Design",
                "User Experience (UX) and User Interface (UI) Principles",
                "Website Optimization for Search Engines (SEO)",
                "Introduction to Content Management Systems (CMS)"
            ]
        },
        {
            week: "Week 3: Search Engine Optimization (SEO)",
            details: [
                "Understanding Search Engines and Algorithms",
                "On-Page SEO Techniques",
                "Off-Page SEO Techniques",
                "SEO Tools and Analytics"
            ]
        },
        {
            week: "Week 4: Pay-Per-Click (PPC) Advertising",
            details: [
                "Introduction to PPC Advertising Platforms (Google Ads, Bing Ads)",
                "Keyword Research and Selection",
                "Ad Copywriting and Ad Extensions",
                "Campaign Setup, Monitoring, and Optimization"
            ]
        },
        {
            week: "Week 5: Social Media Marketing (SMM)",
            details: [
                "Overview of Social Media Platforms (Facebook, Instagram, LinkedIn, etc.)",
                "Creating and Optimizing Social Media Profiles",
                "Content Creation and Curation for Social Media",
                "Social Media Advertising Strategies"
            ]
        },
        {
            week: "Week 6: Content Marketing",
            details: [
                "Fundamentals of Content Marketing",
                "Content Strategy and Planning",
                "Blogging, Infographics, Videos, and other Content Formats",
                "Content Distribution and Promotion Techniques"
            ]
        },
        {
            week: "Week 7: Email Marketing",
            details: [
                "Building an Email List and Subscriber Segmentation",
                "Email Copywriting and Design Best Practices",
                "Email Automation and Personalization",
                "Email Marketing Metrics and Analytics"
            ]
        },
        {
            week: "Week 8: Marketing and Affiliate Marketing",
            details: [
                "Understanding Influencer Marketing and its Impact",
                "Identifying and Partnering with Influencers",
                "Introduction to Affiliate Marketing Programs and Networks",
                "Affiliate Marketing Strategies and Measurement"
            ]
        },
        {
            week: "Week 9: Mobile Marketing and App Marketing",
            details: [
                "Overview of Mobile Marketing Landscape",
                "Mobile Responsive Design and User Experience (UX)",
                "Mobile Advertising Platforms (Google Ads, Facebook Ads, etc.)",
                "App Store Optimization (ASO) and App Promotion Strategies"
            ]
        },
        {
            week: "Week 10: Analytics and Performance Measurement",
            details: [
                "Introduction to Digital Marketing Analytics Tools (Google Analytics, etc.)",
                "Key Performance Indicators (KPIs) and Metrics",
                "Data Analysis and Interpretation",
                "Reporting and Performance Optimization Strategies"
            ]
        },
        {
            week: "Week 11: Digital Marketing Strategy and Planning",
            details: [
                "Creating a Digital Marketing Strategy Framework",
                "Setting SMART Goals and Objectives",
                "Budgeting and Resource Allocation",
                "Developing a Digital Marketing Plan"
            ]
        },
        {
            week: "Week 12: Capstone Project",
            details: [
                "Application of Digital Marketing Concepts and Techniques",
                "Developing and Implementing a Comprehensive Digital Marketing Campaign",
                "Presentation of Capstone Projects"
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-indigo-950 w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Digital Marketing</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
            Becoming a digital marketing professional is one of the best career decisions at present. The digital marketing industry in India is estimated to produce more than 4 million jobs by 2026. Here are some of the top reasons that constantly add to the growing demand of skilled professionals in the field.
            JKSD’s digital marketing training and certification courses are designed to develop professional-level marketing skills required to meet each of these demands. We believe in providing the right knowledge, skills, and exposure through traditional classroom learning but with a contemporary approach of hands-on training. Our courses are industry-approved programs in-sync with globally-relevant digital marketing standards and designed under the guidance of veteran industry professionals.
            {/* Truncated for brevity */}
        </p>

        <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
    <button 
        onClick={openModal}
        className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
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
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={digital} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Digital Marketing: Thrive and Grow</h1>

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
                    <pre>Level:             Beginner</pre>
                    <pre>Total Duration :   3/6 months</pre>
                    <pre>Certificate:      Certificate of Completion</pre>
                </div>
                
                {/* Requirements */}
                <div>
                    <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                    <p className='pt-3'>
                        A basic understanding of the Digital Marketing: Thrive and Grow.
                        The ability to download large files of about 500 MB from the Internet
                        Access to a computer with a 64-bit processor running either Windows, Mac, or Linux
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of digital marketing training with us, you would be fully knowledgeable about various digital marketing disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>Basic digital marketing concepts and different types of digital marketing</li>
                        <li>Search engine optimization (SEO) – both on-page and off-page</li>
                        <li>Email marketing, Content marketing</li>
                        <li>Search engine marketing – both organic and paid</li>
                        <li>Social media marketing (for popular social platforms like Facebook, YouTube, and more)</li>
                        <li>Affiliate marketing, E-commerce marketing, Mobile marketing</li>
                        <li>Website conversion rate optimization</li>
                        <li>Digital marketing tools including Google Ads, Google Analytics, Google Keyword Planner, and more</li>
                        <li>Digital marketing strategy building, optimization, measurement, and so on</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


            {/* Digital Marketing: Thrive and Grow section close here  */}


 {/* cartificate section start here  */}

            <div className='cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-indigo-950 gap-4 justify-center items-center'>
    {/* Left Content Section */}
    <div className="text-white lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
        {/* First Decorative Circle */}
        <div className='relative'>
            <div className='bg-red-300  h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 hidden lg:block  rounded-full absolute -top-16 md:-top-4 lg:-top-72'></div>
        </div>
        
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
        
        {/* Second Decorative Circle */}
        <div className='relative '>
            <div className='bg-green-300 hidden lg:block h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 rounded-full absolute bottom-0  right-0 mb-[-10px] md:mb-[-10px] lg:mb-[-340px]'></div>
        </div>
    </div>

    {/* Right Image Section */}
    <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 lg:p-5 flex justify-center">
        <img className='h-auto w-full' src={cartificate} alt="Certificate" />
    </div>
</div>
{/* Modal for Form */}
<Modal isOpen={isModalOpen} closeModal={closeModal}>
                <Form pdfUrl={digitalBrochureUrl}/>
            </Modal>
        </div>
    
    );
};

export default DigitalMarketing;
