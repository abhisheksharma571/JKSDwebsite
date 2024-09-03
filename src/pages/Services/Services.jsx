import React from 'react'
import ServiceHead from './ServiceHead'
import TrainingP from './TrainingP'
import WebDev from './WebDev'
import DigitalMarketing from './DigitalMarketing'
function Services() {
  return (
    <>
    <div>
      <ServiceHead/>
    </div>
    <div className='flex'>
      <div className='p-20 w-1/2 '>
      <div className=''>
        S e r v i c e s
      </div>
      <div className='text-5xl font-semibold '>
        <h1>Unlocking <span className='bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent'>Brilliance!</span> <hr className='border-none' />One Step at a Time</h1>
      </div>
      <div className='text-wrap py-16 text-lg'>
        <p>At JKSD, we are dedicated to guiding your career path with expert-driven services designed to equip you with the skills and knowledge needed to succeed. Whether you're starting out or seeking to advance, our tailored solutions ensure you're prepared to meet the demands of the modern workplace.</p>
      </div>
      <button className='bg-orange h-10 w-32 rounded-xl rounded-r-full text-lg font-normal font-sans'>Know More</button>
      </div>
      <div className='w-1/2 justify-center items-center flex h-[600px]'>
        <img className='h-[460px] ' src="./Images/services(1).jpg" alt="Nahi hai" />
      </div>
    </div>
    <div>
      <TrainingP/>
    </div>
    <div>
      <WebDev/>
    </div>
    <div>
      <DigitalMarketing/>
    </div>
    </>
  )
}

export default Services
