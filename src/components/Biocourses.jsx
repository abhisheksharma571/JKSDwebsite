import React, { useState } from 'react';
import digital from '../assets/images/digitall.png';



import download from '../assets/images/download.png';
import share from '../assets/images/share.png';
import cartificate from '../assets/images/certificate.webp'
import jksd from '../assets/images/jksd.webp'
import telephone from '../assets/images/telephone.png'

import '@fortawesome/fontawesome-free/css/all.min.css';


const Biocourses = () => {
    const [openWeek, setOpenWeek] = useState(null);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };

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

                "Overview of Social Media Platforms (Facebook, Twitter, Instagram, LinkedIn, etc.)",

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

            week: "Week 8: Influencer Marketing and Affiliate Marketing",

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
            <div className='h-96 bg-indigo-950 w-full flex flex-wrap '>
                <div className="text-white h-[100%] w-[50%] mx-6 pt-6 pl-8 ">
                    <h1 className='text-4xl font-bold'>Digital Marketing</h1>
                    <p className='pt-2'>
                        Becoming a digital marketing professional is one of the best career decisions at present. The digital marketing industry in India is estimated to produce more than 4 million jobs by 2026. Here are some of the top reasons that constantly add to the growing demand of skilled professionals in the field.
                        JKSD’s digital marketing training and certification courses are designed to develop professional-level marketing skills required to meet each of these demands. We believe in providing the right knowledge, skills an exposure through traditional classroom learning but with the contemporary approach of hands-on training. Our courses are industry-approved programs absolutely in-sync with the globally-relevant digital marketing standards and designed under the guidance of the veteran industry professionals.
                        {/* Truncated for brevity */}
                    </p>

                    <div className='flex justify-evenly mt-4'>
                        <button className="font-sans font-bold text-center bg-orange text-1xl py-1.5 px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
                            Download Brochure
                            <img className='h-5 w-5' src={download} alt="" />
                        </button>
                        <button className="font-sans font-bold text-center text-1xl py-2 ml-2 px-12 mt-2 rounded-lg bg-white text-black flex items-center gap-2" type="button">
                            Contact Now
                            <img className='h-7 w-6' src={telephone} alt="" />
                        </button>
                        <button className="font-sans font-bold text-center text-1xl py-2 ml-2 px-12 mt-2 rounded-lg bg-white text-black flex items-center gap-2" type="button">
                            Share
                            <img className='h-5 w-5' src={share} alt="" />
                        </button>
                    </div>
                </div>

                <div className="pl-10 pt-8">
                    <img className='rounded-lg' src={digital} alt="" />
                </div>
            </div>

            <div className=''>

                <div className='h-auto w-[80%]   mx-32 '>

                <div className='h-auto w-[80%]   mx-36 '>

                    <h1 className='text-center text-3xl font-bold pt-4 '>Digital Marketing: Thrive and Grow</h1>

                    <div className='flex justify-center ml-10  pt-5'>
                        <div className='ml-4'>
                            <h1 className='text-2xl font-medium'>Table of Contents</h1>
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

                        <div className='h-auto  ml-28 pl-5  w-[70%]'>
                            <h1 className='font-medium text-2xl pt-4 '>Course Details</h1>
                            <div className='text-[20px] pt-3 font-medium'>
                                <pre>Level:             Beginner</pre>
                                <pre>Total Hours:       80 hrs</pre>
                                <pre>Total Lessons:</pre>
                                <pre>Certificate:      Certificate of Completion</pre>
                                <pre>Last Update:      August 27th, 2024</pre>
                            </div>
                            <div>
                                <h1 className='text-2xl pt-4 font-medium' > Requirements</h1>
                                <p className='pt-3' >A basic understanding of the Digital Marketing: Thrive and Grow.
                                    The ability to download large files of about 500 MB from the Internet
                                    Access to a computer with a 64-bit processor running either Windows, Mac, or Linux</p>
                            </div>
                            <div>
                                <h1 className='font-medium text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                                <h1 className='pt-4'>At the completion of digital marketing training with us, you would be fully knowledgeable about various digital marketing disciplines that include:</h1>
                                <ul className='list-disc pl-6 pt-2'> {/* Added list styles and padding */}
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
            </div>


            
            <div className='cartificate flex sm:flex-col md:flex-row lg:flex-row mt-4 bg-indigo-950 gap-2 justify-center'>
                <div className="text-white pt-8 overflow-hidden w-[45%] ">
                    <div className='bg-green-300 h-80 rounded-full  w-80 flex mt-[-260px]'></div>
                    <h1 className='text-orange font-medium text-3xl pl-2 pt-8' >Validating Your Success: About Your Certificate</h1>
                    <h1 className='pl-2 pt-10 font-medium '>Once you complete the course video, assignments and quizzes you will be able to generate the certificate.</h1>
                    <ul className='list-disc pl-14 pt-10'>

                        <li>
                        After watching 60% of videos

                        </li>
                        <li>
                        After scoring 60% in quiz & assignment.
                        </li>
                        <li>
                        After completing 1medium level Project on Experience Portal
                        </li>
                    </ul>

                    <div className='flex  pl- pt-8'>
                        <div><h1 className='text-2xl font-medium   ' >Certification From JKSD Infotech Pvt. Ltd. </h1></div>
                        {/* <div><img className='h-10 ' src={jksd} alt="" /></div> */}
                    </div>
                    <div className='bg-green-300 h-80 rounded-full ml-[380px] justify-center items-center w-80 flex mb-[-240px]'></div>

                </div>
                <div className="img  w-[25%] p-5  ">
                    <img className=' h-auto  ' src={cartificate} alt="" />

                    <div className='flex gap-4 pl-14 pt-8'>
                        <div><h1 className='text-3xl font-medium   ' >Certification From </h1></div>
                        <div><img className='h-10 ' src={jksd} alt="" /></div>
                    </div>
                    <div className='bg-green-300 h-80 rounded-full ml-[380px] justify-center items-center w-80 flex mb-[-300px]'></div>

                </div>
                <div className="img  w-[45%] ">
                    <img className=' mx-4 p-4 ' src={cartificate} alt="" />

                </div>

            </div>

        </div>
    );
};


export default Biocourses;



