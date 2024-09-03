import React from 'react'

function DigitalMarketing() {
  return (
    <div className='w-full h-screen bg-black'>
        <div className='relative'>
        <img className='h-screen w-1/2 ' src="./Images/DigitalBack.jpg" alt="Where is image" />
        <div className='absolute inset-0 flex '>
            <div className='w-1/2 pl-16 text-white'>
            <h1 className='text-white text-2xl md:text-5xl font-semibold pt-16'>Digital Marketing </h1>
            <h1 className='text-white text-2xl md:text-3xl font-medium pt-8'>A full guide to <span className='text-orange'>Digital Marketing</span></h1>
            <p className='text-lg w-[68%] pt-10'>Master the art of digital marketing, enhance your skills, and transform into a sought-after industry expert ready to lead in the digital landscape!</p>
            <h1 className='mt-10 font-normal text-orange text-4xl'>80+ Hrs</h1>
            <p className='text-lg font-extralight pl-1 pb-10'>c o u r s e</p>
            <p className='text-lg '>Click here to explore further</p>
            <img className='h-10 animate-bounce m-6' src="./Images/arrow-down.png" alt="" />
            <button className='text-lg font-light h-10 w-32  bg-white rounded-lg text-black'>Explore More</button>
            </div>
            <div className='flex items-center justify-center'>
          <div className='absolute h-[240px] w-[240px] bg-[#2b2b2b] rounded-full flex items-center justify-center text-white z-10'>
            <h1 className='text-xl text-center font-medium'>"Boost Your Business<br />with Powerful Digital<br />Marketing Strategies"</h1>
          </div>
        </div>
            <img className='w-1/2 h-full' src="./Images/Digital.png" alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default DigitalMarketing