import React from 'react';

function HRConsulting() {
  return (
    <div className='bg-[#08528e] w-full h-auto flex flex-col md:flex-row'>
      
      {/* Text Section */}
      <div className='md:w-1/2 w-full text-white px-6 md:pl-20 pt-10 md:pt-20'>
        <h1 className='md:text-5xl text-3xl text-orange font-philosopher font-black'>HR Consulting</h1>
        <p className='text-lg md:text-3xl mt-6 md:mt-10 w-full md:w-[85%]'>
          Delivering innovative, tailored HR solutions to optimize talent and elevate workplace culture.
        </p>
        <p className='text-sm md:text-lg mt-6 md:mt-10 w-full md:w-[95%]'>
          At JKSD, our HR Consulting services are designed to empower businesses with strategic solutions. From talent management to employee engagement, we help you build a thriving workplace, ensuring your organization’s success in today’s dynamic environment.
        </p>
        <div className='mt-6 md:mt-10 font-normal text-[#dbebf8] text-sm md:text-lg'>
          <ul>
            <li>Recruitment Service</li>
            <li>Corporate Training</li>
            <li>HR Excellence</li>
          </ul>
        </div>
        <button className='text-sm md:text-lg font-light h-10 w-32 bg-orange rounded-lg text-white mt-6 md:mt-10'>
          Explore More
        </button>
      </div>
      
      {/* Image Section */}
      <div className='md:w-1/2 w-full flex justify-center items-center pt-8 md:pt-0'>
        <img
          className='object-cover h-64 md:h-screen w-full md:w-auto'
          src='./Images/181bce80e971df855219b69e4b4969cb.jpg'
          alt='HR Consulting'
        />
      </div>
    </div>
  );
}

export default HRConsulting;
