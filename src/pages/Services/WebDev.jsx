import React from 'react';

function WebDev() {
  return (
    <div className='flex flex-col md:flex-row h-auto bg-[#FBFAF6] w-full'>
      <div className='w-full md:w-1/2 px-8 md:px-16 pt-8 md:pt-16 flex justify-center h-[300px] md:h-[630px]'>
        <img className='object-contain' src="./Images/Web.jpg" alt="Website Development" />
      </div>

      <div className='w-full md:w-1/2 px-8 md:px-0 pt-8 md:pt-16'>
        <h1 className='text-2xl md:text-5xl text-[#08528e] font-philosopher font-black'>
          Website Development
        </h1>
        
        <p className='text-base md:text-lg mt-6 md:mt-10 w-full md:w-[85%]'>
          Empower your business with a professional website and stand out in today's digital age! At JKSD, we provide top-notch web development services tailored to your needs. Let us help you create a powerful online presence that drives success and sets you apart from the competition.
        </p>
        
        <div className='flex md:justify-between justify-center gap-10 w-full md:w-1/2 mt-8 md:mt-10'>
          <div className='text-center'>
            <h1 className='font-normal text-2xl md:text-4xl text-indigo-950'>149+</h1>
            <p className='text-base md:text-lg font-extralight'>Projects Completed</p>
          </div>
          
          <div className='text-center'>
            <h1 className='font-normal text-2xl md:text-4xl text-indigo-950'>98%</h1>
            <p className='text-base md:text-lg font-extralight'>Happy Customers</p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center md:justify-start items-center mt-8 md:mt-10'>
          <img className='w-28 h-16 md:w-auto md:h-20 pr-2 md:pr-10' src="./Images/TheDream.png" alt="The Dream" />
          <img className='w-28 h-16 md:w-auto md:h-20 px-4 md:px-10' src="./Images/SPRING-CAFE-LOGO-1-fotor-2024081613139.png" alt="Spring Cafe" />
          <img className='w-28 h-16 md:w-auto md:h-20 px-4 md:px-10' src="./Images/VS.png" alt="VS" />
          <p className='text-sm md:text-base pt-3 md:pt-7'> & more...</p>
        </div>

        <div className='pt-10 pb-10 md:pt-14 text-center md:text-left'>
          <button className='text-base md:text-lg font-light h-10 w-36 md:w-32 bg-[#08528e] rounded-lg text-white'>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebDev;
