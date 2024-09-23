import React from 'react';

function HomeAutomation() {
  return (
    <div className='flex flex-col md:flex-row h-auto md:h-screen bg-[#FBFAF6] w-full'>
      {/* Image Section */}
      <div className='w-full md:w-[55%] px-6 pt-6 md:pt-16 flex justify-center'>
        <img className='object-contain h-60 sm:h-72 md:h-full' src="./Images/HomeAutomation2.jpg" alt="Home Automation" />
      </div>

      {/* Content Section */}
      <div className='w-full md:w-1/2 pt-6 md:pt-20 px-6'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl text-[#08528e] font-philosopher font-black'>
          Home Automation
        </h1>

        <p className='text-lg sm:text-xl md:text-2xl mt-4 md:mt-10 w-full md:w-[92%]'>
          Bring your home to life with JKSD's smart automation – effortless control, enhanced security, and modern convenience.
        </p>

        <p className='text-sm sm:text-base md:text-lg mt-4 md:mt-10 w-full md:w-[85%]'>
          Transform your home with JKSD's smart automation. Enjoy seamless convenience, enhanced security, and modern efficiency. Let us create a smart, responsive environment that adapts to your needs and simplifies your life.
        </p>

        {/* Services List */}
        <div className='mt-6 md:mt-10 pl-2 font-normal text-sm sm:text-lg text-indigo-950'>
        
            <li>Smart Homes</li>
            <li>Industrial Automation</li>
            <li>Solar Projects</li>
          
        </div>

        {/* Stats Section */}
        <div className='flex md:justify-between justify-center gap-10 w-full md:w-1/2 mt-8 md:mt-10'>
          <div className='text-center'>
            <h1 className='font-normal text-2xl md:text-4xl text-indigo-950'>144+</h1>
            <p className='text-base md:text-lg font-extralight'>Projects Completed</p>
          </div>

          <div className='text-center'>
            <h1 className='font-normal text-2xl md:text-4xl text-indigo-950'>98%</h1>
            <p className='text-base md:text-lg font-extralight'>Happy Customers</p>
          </div>
        </div>
        <div className='flex  sm:flex-row justify-between mt-6 sm:mt-8'>

        <div className='pt-2 pb-10 md:pt-2 flex justify-center md:justify-start w-[500px] text-center md:text-left'>
            <button className='text-base md:text-lg font-light h-10 w-36 md:w-32 bg-orange rounded-lg text-white'>
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAutomation;
