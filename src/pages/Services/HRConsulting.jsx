import React from 'react'

function HRConsulting() {
  return (
    <div className='bg-[#08528e] w-full h-screen flex'>
        <div className='w-1/2 text-white  pl-20 pt-20'>
        <h1 className='md:text-5xl  text-orange font-philosopher font-black text-2xl'>HR Consulting</h1>
       <p className='text-3xl mt-10 w-[85%] '>Delivering innovative, tailored HR solutions to optimize talent and elevate workplace culture.</p>
       <p className='text-lg mt-10 w-[95%] '>At JKSD, our HR Consulting services are designed to empower businesses with strategic solutions. From talent management to employee engagement, we help you build a thriving workplace, ensuring your organization’s success in today’s dynamic environment.</p>
       <div className='mt-10 font-normal text-[#dbebf8] text-lg'>
        <li>Recruitment Service</li>
        <li>Corporate Training</li>
        <li>HR Excellence</li>
       </div>
       <button className='text-lg font-light h-10 w-32  bg-orange rounded-lg text-[#ffffff] mt-10'>Explore More</button>
        </div>
        <div className='w-1/2 h-screen grid justify-items-center'>
            <img className='object-contain h-screen ' src=".\Images\181bce80e971df855219b69e4b4969cb.jpg" alt="" />
        </div>
    </div>
  )
}

export default HRConsulting