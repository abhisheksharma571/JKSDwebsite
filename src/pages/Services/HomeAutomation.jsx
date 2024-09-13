import React from 'react'

function HomeAutomation() {
  return (
    <div className='flex h-screen bg-[#FBFAF6] w-[100%] '>
        <div className='w-[55%] px-6 pt-16 flex '>
          <img className='object-contain h-full' src="./Images/HomeAutomation2.jpg" alt="" />
        </div>
        <div className='w-1/2 pt-20'>
        <h1 className='md:text-5xl text-[#08528e] font-philosopher font-black text-2xl'>Home Automation</h1>
        <p className='text-2xl mt-10 w-[92%] '>Bring your home to life with JKSD's smart automation – effortless control, enhanced security, and modern convenience.</p>        
        <p className='text-lg mt-10 w-[85%] '>Transform your home with JKSD's smart automation. Enjoy seamless convenience, enhanced security, and modern efficiency. Let us create a smart, responsive environment that adapts to your needs and simplifies your life.</p>
        <div className='mt-10 font-normal text-lg text-indigo-950'>
        <li>Smart Homes</li>
        <li>Industrial Automation</li>
        <li>Solar Project</li>
        </div>
        <div className='flex justify-between mr-28 '>
        <div className='text-center'>
        <h1 className='mt-10 font-normal text-4xl text-indigo-950'>144+</h1>
        <p className='text-lg font-extralight pl-1 pb-10'> Projects Complited</p>
        </div>
        <div className='text-center'>
        <h1 className='mt-10 font-normal text-4xl text-indigo-950 '>98 %</h1>
        <p className='text-lg font-extralight pl-1 pb-10'>Happy Customers</p>
        
        </div>
        <div className='object-bottom self-center '>       
           <a href="https://jksdautomation.com/" target='_blank' rel='noopener noreferrer'><button className='text-lg font-light h-10 w-32 bg-[#08528e] rounded-lg text-white '>Explore More</button></a>
        </div>
        </div>
        
        </div>

    </div>
  )
}

export default HomeAutomation