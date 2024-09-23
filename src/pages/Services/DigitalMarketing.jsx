import React from 'react'

function DigitalMarketing() {
  return (
    <div className='w-full h-auto  bg-[#08528e]'>
        <div className='relative'>
        <img className='h-screen w-1/2 ' src="./Images/DigitalBack.jpg" alt="Where is image" />
        <div className='absolute inset-0 flex '>
            <div className='w-1/2 pl-16 text-white'>
            <h1 className='text-orange md:text-5xl pt-16 font-philosopher font-black text-2xl'>Digital Marketing</h1>
            {/* <h1 className='text-white text-2xl md:text-3xl font-medium pt-8'>Transform Your Online Presence <br /> with Expert <span className='text-orange'>Digital Marketing</span></h1> */}
            <p className='text-lg w-[68%] pt-10'>JKSD Info. Tech provides expert digital marketing services to help businesses grow their online presence and reach their target audience. From SEO to social media strategies, we offer tailored solutions designed to maximize your digital impact and drive results. Explore more.</p>
            <div className='mt-10 font-normal text-lg text-orange'>
          <li>Website Development</li>
          <li>Search Engien Optimisation</li>
          <li>Socail Media Optimisor</li>
          <li>E-mail Marketing</li>
           </div>
            <p className='text-lg mt-4'>Click here to explore further</p>
            <img className='h-10 animate-bounce m-6' src="./Images/arrow-down.png" alt="" />
            <button className='text-lg font-light h-10 w-32  bg-orange  rounded-lg text-white'>Explore More</button>
            </div>
            <div className='flex items-center justify-center'>
          <div className='absolute h-[240px] w-[240px] bg-[#4f4f4f] rounded-full flex items-center justify-center text-white z-10'>
            <h1 className='text-xl text-center text-orange font-medium'>"Boost Your Business<br />with Powerful Digital<br />Marketing Strategies"</h1>
          </div>
        </div>
            <img className='w-1/2 h-full' src="./Images/Digital.png" alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default DigitalMarketing