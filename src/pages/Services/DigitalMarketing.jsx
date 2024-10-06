import React from 'react'

function DigitalMarketing() {
  return (
    <>
     <div className='flex h-auto sm:h-screen'>
     <div className="sm:h-screen h-[570px] bg-black w-full sm:w-1/2 relative">
  <img className="w-full h-[570px] sm:h-full object-cover" src="./Images/DigitalBack.jpg" alt="" />
  
  <div className="absolute inset-0 flex flex-col p-4 sm:text-start text-center sm:pt-14 sm:pl-16">
    <h2 className="sm:text-5xl pt-10 text-orange font-philosopher font-black text-3xl">
      Digital Marketing</h2>
      <p className='text-sm sm:text-lg mt-10 sm:w-[70%] text-white'>JKSD Info. Tech offers professional digital marketing and web development services designed to drive your business’s online growth. Whether it's crafting compelling websites or executing focused marketing campaigns, we ensure your brand captures attention and delivers measurable success.</p>
      <div className='mt-10 font-normal text-sm sm:text-lg text-orange'>
          <li>Website Development</li>
          <li>Search Engien Optimisation</li>
          <li>Socail Media Optimisor</li>
          <li>E-mail Marketing</li>
        </div>
        <div  className='lg:flex justify-start'>
        <p className='text-lg mt-4 text-white sm:text-center '>Click here to explore further</p>
        </div>  
        <div>
            <img className=' sm:block mt-6 ml-auto mr-auto h-10 animate-bounce sm:m-6 object-contain ' src="./Images/arrow-down.png" alt="" />
            </div>
           <div>
             <button className='text-lg font-light h-10 w-32 bg-white rounded-lg text-black  '>Explore More</button>
         </div>
  </div>
</div>
      <div className='sm:flex items-center justify-center hidden '>
        <div className='absolute h-[240px] w-[240px] bg-[#302f33] rounded-full flex items-center justify-center text-white z-10'>
          <h1 className='text-xl text-center font-medium '>"Boost Your Business<br />with Powerful Digital<br />Marketing Strategies"</h1>
        </div>
        </div>
      <div className='w-1/2 h-screen hidden sm:block '>
        <img className='w-full h-full ' src="./Images/Digital.png" alt="" />
      </div>
     </div>

    </>
  )
}

export default DigitalMarketing