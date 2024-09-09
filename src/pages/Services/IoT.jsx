import React from 'react'

function IoT() {
  return (
    <div className='w-full h-screen bg-[#FCFAF6] flex'>
       <div className=' object-contain pl-12 pt-12 pb-8 flex h-[700px]'>
          <img className='object-contain' src="./Images/IOT2 (2).jpg" alt="" />
       </div>
       <div className='w-[60%] pt-28 pl-6'>
       <h1 className='text-5xl font-semibold'>Innovative Lab Setups</h1>
       <p className='text-3xl mt-10 w-[85%] '>JKSD’s Commitment to Innovation: <br />Setting up a Cutting-Edge Lab</p>
       <p className='text-lg mt-10 w-[95%] '>At JKSD, we are committed to fostering innovation and growth. To support this, we are establishing an innovative lab to inspire creativity, research, and development in emerging technologies. This lab will serve as a hub for exploring ideas, experimenting with advanced tools, and solving complex problems collaboratively. With cutting-edge infrastructure and a forward-thinking approach, JKSD aims to create an environment where employees, partners, and clients can turn visionary concepts into practical solutions.</p>
       <div className='flex '>
       <div className='text-center pr-16'>
       <h1 className='mt-10 font-normal text-4xl text-indigo-950'>149+</h1>
       <p className='text-lg font-extralight pl-1 pb-10'> Projects Complited</p>
        </div>
        <div className='text-center pr-16'>
        <h1 className='mt-10 font-normal text-4xl text-indigo-950 '>98 %</h1>
        <p className='text-lg font-extralight  pb-10'>Happy Customers</p>
        </div>
        <div className='object-bottom self-center pl-16'>
        <button className='text-lg font-light h-10 w-32 bg-black rounded-lg text-white '>Explore More</button>
        </div>
       </div>
        
       </div>
    </div>
  )
}

export default IoT