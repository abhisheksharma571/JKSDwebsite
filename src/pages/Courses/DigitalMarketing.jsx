import React, { useState } from 'react';
import digital from '../../assets/images/digitall.png';
import download from '../../assets/images/download.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


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
            "week": "Week 1: Basics of marketing and digital marketing",
            "details": [
              "Introduction to marketing",
              "Importance of branding",
              "Understanding the marketing mix",
              "Traditional vs digital marketing"
            ]
          },
          {
           "week": "Week 2: Understanding digital marketing",
           "details": [
                    "Introduction to digital marketing",
                     "Understanding the marketing channels",
                     "Elements of digital marketing strategies"
            ]
          },
          {
            "week": "Week 3: Content planning & creation",
              "details": [
               "Understanding the principles of content marketing",
               "Understanding the types of content",
              "Research & content creation",
              "Graphic designing using Canva",
               "Video editing using Canva"
              ]
          },
          {
            "week": "Week 4: Professional blogging",
           "details": [
              "What is blogging & best practices",
             "Writing SEO-friendly blogs"
            ]
          },
          {
            "week": "Week 5: Website creation",
            "details": [
              "Understanding the key elements",
              "Deciding the niche & getting ready with domain and web hosting",
              "WordPress website creation",
              "Chatbots",
              "Landing pages"
            ]
          },
          {
            "week": "Week 6: E-commerce store creation",
          "details": [
          "Understanding e-commerce websites",
          "Setting up e-commerce store with Woo-Commerce",
          "Payment gateway integration"
            ]
          },
          {
            "week": "Week 7: Shopify store creation",
            "details": [
              "Setting up e-commerce store with Shopify",
              "Deep learning of dropshipping"
            ]
          },
          {
            "week": "Week 8: Email marketing",
            "details": [
                 "Understanding basic email marketing concepts",
                 "Getting started with email automation",
                 "Understanding & executing drip campaigns"
            ]
          },
          {
           "week": "Week 9: Introduction to Google Analytics",
           "details": [
                      "Understanding the key terminologies",
                      "Adding tracking codes",
                      "Report analysis",
                     "Analyzing optimization factors"
            ]
          },
          {
            "week": "Week 10: Advanced search engine optimization",
            "details": [
                "Understanding search engine algorithms",
                "Shortlisting right keywords",
                "On-page optimization",
               "Off-page optimization",
               "Local SEO",
               "Understanding Search Console"
            ]
          },
          {
            "week": "Week 11: Social media optimization",
            "details": [
                  "Social media fundamentals",
                  "Optimizing Facebook for business",
                  "Optimizing Instagram for business",
                  "Utilizing Twitter for business",
                  "Getting discovered through LinkedIn",
                  "Quora marketing",
                  "Pinterest"
            ]
          },
          {
            
      "week": "Week 12: Search engine marketing",
      "details": [
               "Introduction to Google Ads",
                "Creating search campaigns & setting up conversion tracking",
                "Display campaigns",
                "Executing a campaign with live budget",
                "Optimizing the campaign",
                "Bing Ads"
            ]
          },
          {
           "week": "Week 13: Social media marketing",
           "details": [
              "Introduction to Facebook & Instagram advertising",
              "Setting up ad account & pixels",
              "Executing live campaign in class",
              "Twitter ads, LinkedIn ads",
              "Quora advertisements"
            ]
          },
          {
           
        "week": "Week 14: Lead generation",
        "details": [
          "Understanding the concepts & funnels of lead generation",
          "Creating high converting landing page",
          "Getting started with marketing automation"
                  ]
          },
          {
            "week": "Week 15: E-commerce marketing",
            "details": [
              "Understanding Google Merchant Center",
              "Facebook e-commerce ads"
                      ]
          },
          {
           "week": "Week 16: Remarketing",
           "details": [
              "Understanding remarketing concept",
              "Creating remarketing lists",
              "Setting up search, display, video remarketing",
              "Facebook remarketing",
              "Dynamic remarketing for e-commerce"
           ]
          },
          {
            "week": "Week 17: Video marketing with YouTube",
            "details": [
              "Understanding YouTube algorithms",
              "YouTube program & policies",
              "YouTube SEO",
              "YouTube advertisement",
              "Video analytics"
            ]

          },
          { "week": "Week 18: Mobile marketing",
            "details": [
              "Understanding the mobile marketing concept",
              "How to integrate voice/SMS services",
              "Bulk WhatsApp",
              "Bulk SMS"
            ]
          },
          {
        "week": "Week 19: Marketplace selling",
        "details": [
          "Getting started with seller account",
          "Best practices to list a product",
          "Categories, logistics & price overview"
        ]
          },
          {
           "week": "Week 20: Web analytics and CRO",
           "details": [
              "Understanding segments, filters & reports",
              "Setting up goals with Google Tag Manager",
              "Understanding CRO"
            ]
          },
          {
            "week": "Week 21: Online reputation management",
            "details": [
              "Need of ORM",
              "Current trends",
              "10+ case studies",
              "Crisis management",
              "ORM tools",
              "Steps to effective ORM"
            ]
          },
          {
           "week": "Week 22: Google AdSense & YouTube",
           "details": [
              "Introduction to Google AdSense",
              "Tips to get AdSense approved",
              "Best practices to monetize videos and blog"
            ]
                    },
          {
            "week": "Week 23: Influencer marketing & personal branding",
            "details": [
              "How to become an influencer",
              "Key channels for influencer marketing",
              "Getting started with personal branding",
              "Case studies"
            ]
          },
          {
            "week": "Week 24: Affiliate marketing",
            "details": [
              "Understanding the concept of affiliate marketing",
              "Setting up affiliate account",
              "Choosing the right niche",
              "Getting started with first affiliate campaign"
            ]
          },
          {
            "week": "Week 25: Domain investment",
            "details": [
              "Introduction to domain flipping",
              "Finding the right domain",
              "Trading with brandable/non-brandable domains"
            ]
          },
          {
            "week": "Week 26: How to grab freelancing projects",
            "details": [
              "Exploring the right platforms to get freelancing projects",
              "Creating an ideal profile",
              "Key services to offer",
              "How to create a proposal & reporting"
            ]
          },
          {
            "week": "Week 27: Dive into the latest trends",
            "details": [
              "User-generated content",
              "Voice integration in marketing",
              "Position zero on search results",
              "How AI will impact marketing",
              "Omnichannel marketing"
            ]
          }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row'>
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
                    <pre className='font-sans text-lg font-semibold'>Level:                   Beginner</pre>
                    <pre className='font-sans text-lg font-semibold'>Total Duration :   3/6 months</pre>
                    <pre className='font-sans text-lg font-semibold'>Certificate:           Certificate of Completion</pre>
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
{/* Modal for Form */}
<Modal isOpen={isModalOpen} closeModal={closeModal}>
                <Form pdfUrl={digitalBrochureUrl}/>
            </Modal>
        </div>
    
    );
};

export default DigitalMarketing;
