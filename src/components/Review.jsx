import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                },
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            },
        ],

      };
      
  return (
    <>
    <div className='w-full max-w-[1500px]  mx-auto'>
    <h1 className='text-2xl md:text-5xl font-bold text-orange text-center pt-10'>OUR HAPPY CUSTOMERS AND STUDENTS</h1>
        <div className='flex flex-col m-4 px-10'>
            <Slider{...settings}>
            {data.map((d, index)=>(
                <div 
                key={index}
                className='bg-cardscolor h-[350px] w-[290px] text-black rounded-lg m-6 mx-6 sm:mx-4 md:mx-2 lg:mx-6'>
                    <div className='flex h-[50px] -mb-3'>
                    <img src={d.image1} alt="" />
                    </div>
                    <div className='flex flex-row h-80 w-60 p-2'>
                        <p>{d.review}</p>                      
                    </div>
                    <div className=' flex h-[40px] -mt-16 ml-2 '>
                        <img src={d.image} alt="" className='rounded-full'/>
                        <div className='-mt-1 ml-2'>
                        <p className=''>{d.Name}</p>
                        <p className='-mt-1 text-[13px] text-blue-600 font-medium'>{d.degAcom}</p>
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
        Name: 'Jeff Bezos',
        image1: './Images/Screenshot_2.png',
        review: 'I recently completed a course at JKSD and was very impressed. The expert instructors and hands-on approach made complex topics easy to understand.  Python and digital marketing, catered perfectly to my needs I highly recommend JKSD.',
        image: './Images/Abhishek.png',
        degAcom: 'CEO | Amazone'
        
    },
    {
        Name: 'Banny Ban',
        image1: './Images/Screenshot_2.png',
        review: ' I recently completed a course at JKSD and was very impressed. The expert instructors and hands-on approach made complex topics easy to understand.  Python and digital marketing, catered perfectly to my needs I highly recommend JKSD.',
        image: './Images/Abhishek.png',
        degAcom: 'Student | Oxford University'
        
    },
    {
        Name: 'Orion Curz',
        image1: './Images/Screenshot_2.png',
        review: 'I recently completed a course at JKSD and was very impressed. The expert instructors and hands-on approach made complex topics easy to understand.  Python and digital marketing, catered perfectly to my needs I highly recommend JKSD.',
        image: './Images/Abhishek.png',
        degAcom: 'Student | Harvard University'
    },
    {
        Name: 'Elon Musk',
        image1: './Images/Screenshot_2.png',
        review: 'I recently completed a course at JKSD and was very impressed. The expert instructors and hands-on approach made complex topics easy to understand.  Python and digital marketing, catered perfectly to my needs I highly recommend JKSD.',
        image: './Images/Abhishek.png',
        degAcom: 'CEO | Tesla'
    }
]

export default Review