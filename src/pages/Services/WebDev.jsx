import React from 'react'

function WebDev() {
  return (
    <div className='flex h-screen w-full bg-[#fcfaf6]'>
        <div className='w-1/2 px-16 pt-28 flex h-[630px]'>
          <img src="./Images/Web.jpg" alt="" />
        </div>
        <div className='w-1/2 pt-28'>
        <h1 className='text-5xl font-semibold'>Website Development</h1>
        <p className='text-lg mt-10 w-[85%] '>Empower your business with a professional website and stand out in today's digital age! At JKSD, we provide top-notch web development services tailored to your needs. Let us help you create a powerful online presence that drives success and sets you apart from the competition.</p>
        <div className='flex justify-between w-1/2'>
        <div className='text-center'>
        <h1 className='mt-10 font-normal text-4xl text-indigo-950'>149+</h1>
        <p className='text-lg font-extralight pl-1 pb-10'> Projects Complited</p>
        </div>
        <div className='text-center'>
        <h1 className='mt-10 font-normal text-4xl text-indigo-950 '>98 %</h1>
        <p className='text-lg font-extralight pl-1 pb-10'>Happy Customers</p>
        </div>
        </div>
        <div className='flex h-16 '>
          <img className='pr-10' src="./Images/DivyaPadma.png" alt="" />
          <img className='px-10 ' src="./Images/SPRING-CAFE-LOGO-1-fotor-2024081613139.png" alt="" />
          <img className='px-10 ' src="./Images/logo.png" alt="" />
          <p className=' pt-7'>& more...</p>
        </div>
        <div className='pt-14 '>       
           <button className='text-lg font-light h-10 w-32 bg-black rounded-lg text-white'>Explore More</button>
        </div>
        </div>

    </div>
  )
}

export default WebDev