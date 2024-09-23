import React from 'react';

function IoT() {
  return (
    <div className='w-full h-auto md:h-screen bg-[#FCFAF6] flex flex-col md:flex-row'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center md:pl-12 pt-6 md:pt-12 pb-6 md:pb-8'>
        <img className='object-contain h-[350px] sm:h-72 md:h-[700px]' src="./Images/IOT2 (2).jpg" alt="IoT Lab Setup" />
      </div>

      {/* Text Content Section */}
      <div className='w-full md:w-[60%]  pt-2 md:pt-20 px-6 md:pl-6'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl text-[#08528e] font-philosopher font-black'>
          Innovative Lab Setups
        </h1>

        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10'>
          JKSD’s Commitment to Innovation: <br /> Setting up a Cutting-Edge Lab
        </p>

        <p className='text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-10'>
          At JKSD, we are committed to fostering innovation and growth. To support this, we are establishing an innovative lab to inspire creativity, research, and development in emerging technologies. This lab will serve as a hub for exploring ideas, experimenting with advanced tools, and solving complex problems collaboratively. With cutting-edge infrastructure and a forward-thinking approach, JKSD aims to create an environment where employees, partners, and clients can turn visionary concepts into practical solutions.
        </p>

        {/* Stats Section */}
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

export default IoT;
