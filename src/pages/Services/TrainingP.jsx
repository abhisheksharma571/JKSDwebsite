import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function TrainingP() {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        centerMode: false,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                slidesToShow:3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow:2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                },
            },
           
        ]
      };
  return (
    <>
    <div className='bg-[#42246E] w-full h-screen  text-white pl-10 pt-10 font-black'>
        <h1 className='font-philosopher text-5xl'>Training Program</h1>
        <div className='w-full pr-20'>
               <Slider{...settings}>
               {data.map((d, index)=>(
                
                <div 
                key={index}
                className='w-full rounded-lg m-6 '>
                    <div className='bg-[#62438F] w-full  sm:w-3/4 md:w-[350px] lg:w-[400px] max-w-full h-auto'>
                    <div className='p-7'>
                    <img src={d.image} alt="Image is not available" />
                    <h1 className='text-xl md:text-3xl font-normal  text-orange pt-3 max-w-700:text-3xl'>{d.Heading}</h1>
                    <p className='pt-3 text-white font-normal'>{d.Discription}</p>
                    <div className='flex justify-end pb-2'>
                <a href=""><button className='bg-orange h-10 w-32 text-center font-light text-lg'>Explore More</button></a>
            </div>
                    </div>
                    
                    </div>
                </div>
                ))}
                </Slider>
            </div>
    </div>
    </>
  )
}
const data = [
    {
        Heading:'Internship',
        Discription:'Kickstart your career with JKSD Infotech Pvt. Ltd. Discover our internship programs designed to give you real-world experience. Click below for more details.',
        Button:'',
        image:'./Images/Internship.jpg'
    },
    {
        Heading:'Short Term Courses',
        Discription:'Unlock more opportunities with JKSD Infotech Pvt. Ltd. Click below to explore all our detailed courses and take the next step in your learning journey!',
        Button:'',
        image:'./Images/Internship.jpg'
    },
    {
        Heading:'Job Oriented Courses',
        Discription:'Get career-ready with JKSD Infotech Pvt. Ltd. Explore our job-oriented courses and fast-track your path to success. Click below for full course details',
        Button:'',
        image:'./Images/Internship.jpg'
    }
]

export default TrainingP