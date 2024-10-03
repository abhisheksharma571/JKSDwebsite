import React from 'react'

function InternshipInfo() {
  return (
    <div className='bg-[#FBFAF6]'>
        <div className='flex flex-col lg:flex-row '>
        <div className='p-6 sm:p-10 md:p-16 lg:p-20 w-full lg:w-1/2'>
          <div className='text-xs sm:text-sm md:text-base lg:text-lg'>
            I n t e r n s h i p
          </div>
          <div className='text-3xl sm:text-4xl md:text-5xl font-semibold'>
            <h1>
               Where {' '}
              <span className='bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent'>
               Learning
              </span>{' '}
              <hr className='border-none' />
              Meets Opportunity!
            </h1>
          </div>
          <div className='text-wrap py-6 sm:py-10 md:py-12 lg:py-16 text-sm sm:text-base md:text-lg'>
            <p>
            At JKSD Infotech, our internship program offers hands-on experience in web development, home automation, IoT, and more. You'll work on real-world projects, receive mentorship from experts, and develop the skills needed for a successful career. Join us and take your first step toward a brighter future!            </p>
          </div>
          <button className='bg-[#08528e] text-white h-10 w-24 sm:w-28 md:w-32 rounded-xl rounded-r-full text-sm sm:text-base md:text-lg font-normal font-sans'>
            Know More
          </button>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[600px]'>
          <img
            className='h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px]'
            src='./Images/internInfo.jpg'
            alt='Service'/>
        </div>
      </div>
    </div>
  )
}

export default InternshipInfo