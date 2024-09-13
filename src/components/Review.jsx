import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        centerMode: false,
        

      };
      
  return (
    <>


    <div className='w-full max-w-[1500px]  mx-auto'>

    <h1 className=' md:text-5xl text-[#08528e] text-center pt-10 font-philosopher font-black text-2xl'>Our Happy Customers and Students</h1>

        <div className=' md:flex  mr-20 justify-center  items-center'>
          <img className="w-2/6 mt-12 " src="./Images/RevImg.png" alt="" />
    
            <div className='w-1/2 '>
               <Slider{...settings}>
               {data.map((d, index)=>(
                
                <div 
                key={index}
                className='w-1/3 rounded-lg m-6 mx-6 sm:mx-4 md:mx-2 lg:mx-6'>

                    <div className=' flex justify-center items-center'>
                    
                    <img className='rounded-lg  h-32 w-32 ' src={d.image} alt="" />
                    </div>
                    <div className='p-8 text-xl'>
                        <p className='text-center italic'>{d.review}</p>                      
                    </div>
                    <div className='  '>
                        
                        <div className=''>
                        <p className='text-4xl text-center font-sans font-semibold'>{d.Name}</p>
                        
                        </div>
                        
                    </div>
                    
                </div>
                ))}
                </Slider>
            </div>
        </div>        
    </div>
    
    
    </>
  )

}
const data = [
    {
        Name: 'Abhisek Yadav',
        review: 'Hello Everyone my name is Abhishek Yadav. I am doing python course from JKSD. My experience is good . They have great teachers.',
        image: './Images/AbhishekYadav.jpeg',
        
        
    },
    {
        Name: 'Sawan Gupta',
        review: 'Comprehensive and well-structured courses. The interactive sessions made learning engaging. Great support from the team throughout the course. Worth every penny!',
        image: './Images/Sawan.jpg',
        
    },
    {
        Name: 'Rohit Sharma',
        review: 'IoT embedded systems integrate sensors and connectivity into devices, enabling smart, automated functions. They enhance efficiency and data collection across industries. Thanks, Devansh Sir, for your insightful guidance on this topic.',
        image: './Images/Rohit.jpeg',
    },
    {
        Name: 'Himanshu Sharma',
        review: 'The IoT embedded systems seamlessly integrates hardware and software to create interconnected devices capable of collecting, transmitting, and processing data. This technology enhances efficiency and automation in various applications, from smart homes to industrial systems. Read more...',
        image: './Images/HimanshuSharma.jpeg',
    }
]

export default Review