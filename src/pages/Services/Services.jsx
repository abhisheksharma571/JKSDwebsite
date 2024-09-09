
import React from 'react'
import ServiceHead from './ServiceHead'
import TrainingP from './TrainingP'
import WebDev from './WebDev'
import DigitalMarketing from './DigitalMarketing'
import IoT from './IoT'
import HRConsulting from './HRConsulting'

function Services() {
  return (
    <>
      <div>
        <ServiceHead />
      </div>
      <div className='flex flex-col lg:flex-row '>
        <div className='p-6 sm:p-10 md:p-16 lg:p-20 w-full lg:w-1/2'>
          <div className='text-xs sm:text-sm md:text-base lg:text-lg'>
            S e r v i c e s
          </div>
          <div className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
            <h1>
              Unlocking{' '}
              <span className='bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent'>
                Brilliance!
              </span>{' '}
              <hr className='border-none' />
              One Step at a Time
            </h1>
          </div>
          <div className='text-wrap py-6 sm:py-10 md:py-12 lg:py-16 text-sm sm:text-base md:text-lg'>
            <p>
              At JKSD, we are dedicated to guiding your career path with
              expert-driven services designed to equip you with the skills and
              knowledge needed to succeed. Whether you're starting out or
              seeking to advance, our tailored solutions ensure you're prepared
              to meet the demands of the modern workplace.
            </p>
          </div>
          <button className='bg-orange h-10 w-24 sm:w-28 md:w-32 rounded-xl rounded-r-full text-sm sm:text-base md:text-lg font-normal font-sans'>
            Know More
          </button>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px]'>
          <img
            className='h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]'
            src='./Images/services(1).jpg'
            alt='Service'
          />
        </div>
      </div>
     
    </div>
      <TrainingP/>
      <WebDev/>
      <DigitalMarketing/>
      <IoT/>
    <HRConsulting/>

    </>
  );
}

export default Services;
