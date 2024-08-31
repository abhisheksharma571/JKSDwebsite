import React from 'react'

function TrainingP() {
  return (
    <div className='bg-[#42246E] '>
        <h1 className='text-white text-5xl font-semibold pt-7 ml-7 '>Training Program</h1>
        <div className='flex w-full h-[630px] bg-[#42246E] justify-evenly pt-11 px-14'>
        <div className='h-[480px] w-[400px] bg-[#62438F] p-[4px] shadow-2xl'>
            <div className='p-7'>
                <img src="./Images/Internship.jpg" alt="Image is not available" />
                <h1 className='text-3xl font-normal text-orange pt-3'>Training</h1>
                <p className='pt-3 text-white'>Launch your career with hands-on experience and expert support. Gain skills, build your network, and stand out with our internship course!</p>
                <div className='flex justify-end pb-2'>
                <button className='bg-orange h-10 w-32 text-center font-light text-lg'>Explore More</button>
            </div>
            </div>
        </div>
        <div className='h-[480px] w-[400px] bg-[#62438F] p-[4px] shadow-2xl'>
            <div className='p-7'>
                <img src=".\Images\ShortTerm.jpg" alt="" />
                <h1 className='text-3xl font-normal text-orange pt-3'>Short Term Courses</h1>
                <p className='pt-3 text-white'>Launch your career with hands-on experience and expert guidance. Gain skills, build your network, and stand out with our internship course!</p>
                <div className='flex justify-end pb-2'>
                <button className='bg-orange h-10 w-32 text-center font-light text-lg'>Explore More</button>
            </div>
            </div>
            
        </div>
        <div className='h-[480px] w-[400px] bg-[#62438F] p-[4px] shadow-2xl'>
            <div className='p-7'>
                <img src=".\Images\LongTerm.jpg" alt="" />
                <h1 className='text-3xl font-normal text-orange pt-3'>Long Term Courses</h1>
                <p className='pt-3 text-white'>Launch your career with hands-on experience and expert support. Gain skills, build your network, and stand out with our internship course!</p>
                <div className='flex justify-end pb-2'>
                <button className='bg-orange h-10 w-32 text-center font-light text-lg'>Explore More</button>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TrainingP