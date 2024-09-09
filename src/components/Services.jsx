import React from 'react'

function Services() {
  return (

   
    <div className="relative mt-20">
    <div className="sticky top-0 h-screen flex  bg-[#264357]">
    <div className='text-4xl w-1/2 p-24 text-white font-sans text-left font-semibold'>
        <h2 className="">Empower Your Journey: Training Programs Designed for Success</h2>
        {/* <h2 className="py-1 text-3xl">Your Path to Expertise: Industry-Focused Training Programs</h2> */}
        <p className='text-lg mt-10 w-[68%]'>Enhance your skills with our expert-led training programs. Whether you're starting your career or advancing it, we offer tailored courses to help you succeed in today’s competitive market.</p>
        <div className='mt-10 font-normal text-lg text-[#a7d4f4]'>
          <li>Internship</li>
          <li>Short Term Courses</li>
          <li>Job Oriented Courses</li>
        </div>
        <button className='text-lg font-light h-10 w-32 mt-14 bg-white rounded-lg text-[#264357]'>Explore More</button>
        </div>
        <div className='flex items-center justify-center'>
        <div className='absolute h-[240px] w-[240px] bg-[#4689B8] rounded-full flex items-center justify-center text-white z-10'>
          <h1 className='text-2xl font-medium text-center'>"Your Path to Expertise: Industry-Focused Training Programs"</h1>
        </div>
        </div>
        <div className='w-1/2 flex'>
          <img src="./Images/Trening1.png" alt="" />
        </div>
    </div>
    <div className="sticky top-0 h-screen flex  bg-[#9F4C6A] text-white">
        <div className='text-4xl w-1/2 p-24 font-sans text-left font-semibold'>
        <h2 className="">Grow Your Business with Digital Marketing and Web Development</h2>
        {/* <h2 className="py-1">A full guide to Digital Marketing</h2> */}
        <p className='text-lg mt-10 w-[68%]'>JKSD Info. Tech provides expert digital marketing and website development services to help your business grow online. From building engaging websites to implementing targeted marketing strategies, we ensure your brand stands out and achieves results.</p>
        <div className='mt-10 font-normal text-lg text-[#fdd7e5]'>
          <li>Website Development</li>
          <li>Search Engien Optimisation</li>
          <li>Socail Media Optimisor</li>
          <li>E-mail Marketing</li>
        </div>
        {/* <p className='text-lg font-extralight pl-1 pb-10'>c o u r s e</p> */}
        <button className='text-lg font-light h-10 w-32 mt-10 bg-white rounded-lg text-[#9F4C6A]'>Explore More</button>
        </div>
        <div className='flex items-center justify-center'>
        <div className='absolute h-[240px] w-[240px] bg-[#BD6B89] rounded-full flex items-center justify-center text-white z-10'>
          <h1 className='text-2xl text-center font-medium'>"Your Guide to <br />Digital Marketing <br />Excellence"</h1>
        </div>
        </div>
        <div className='w-1/2 flex'>
          <img src="./Images/Digital.png" alt="" />
        </div>
    </div>
    <div className="sticky top-0 h-screen flex  bg-[#3B7652] text-white">
        <div className='text-4xl w-1/2 p-24 font-sans text-left font-semibold'>
        <h2 className="">Expert HR Consulting for Organizational Success</h2>
        {/* <h2 className="py-1">A full guide to Digital Marketing</h2> */}
        <p className='text-lg mt-10 w-[68%]'>JKSD Info. Tech offers tailored HR consulting to help businesses build effective teams and improve workforce performance. From optimizing hiring to enhancing HR strategies, we provide expert solutions for organizational success.</p>
        <div className='mt-10 font-normal text-lg text-[#a1f48c]'>
        <li>Recruitment Service</li>
        <li>Corporate Training</li>
        <li>HR Excellence</li>
        </div>
        {/* <p className='text-lg font-extralight pl-1 pb-10'>c o u r s e</p> */}
        <button className='text-lg font-light h-10 w-32 mt-10 bg-white rounded-lg text-[#3B7652]'>Explore More</button>
        </div>
        <div className='flex items-center justify-center'>
        <div className='absolute h-[240px] w-[240px] bg-[#5E9650] rounded-full flex items-center justify-center text-white z-10'>
          <h1 className='text-2xl text-center font-medium'>"Enhance your workforce with<br />JKSD's HR <br />expertise."</h1>
        </div>
        </div>
        <div className='w-1/2 flex'>
          <img className='' src="./Images/HRC1.jpg" alt="" />
        </div>
    </div>
    <div className="sticky top-0 h-screen flex  bg-[#8D558B] text-white">
    <div className='text-4xl w-1/2 p-20 font-sans text-left font-semibold'>
        <h2 className="w-[70%]">Innovative Lab Setup: Your Ideas, Our Lab</h2>
        {/* <h2 className="py-1">A full guide to Digital Marketing</h2> */}
        <p className='text-lg mt-10 w-[68%]'>Elevate your projects with JKSD Info. Tech’s Innovative Lab Setup. Our advanced solutions create a cutting-edge environment for experimentation and development, driving innovation and efficiency. Transform your vision into reality and stay ahead with our expert lab solutions tailored to your needs.</p>
        <div className='flex'>
        <div className='text-center'>
        <h1 className='mt-10 font-normal text-[#fdd7e5]'>149 +</h1>
        <p className='text-lg font-extralight pl-1 pb-10'>Project Complited</p>
        </div>
        <div className='px-8 text-center'>
        <h1 className='mt-10 font-normal text-[#fdd7e5]'>98 %</h1>
        <p className='text-lg font-extralight pl-1 pb-10'>Happy Customers</p>
        </div>
        </div>
        <button className='text-lg font-light h-10 w-32  bg-white rounded-lg text-[#8D558B]'>Explore More</button>
        </div>
        <div className='flex items-center justify-center'>
          <div className='absolute h-[240px] w-[240px] bg-[#BF81BC] rounded-full flex items-center justify-center text-white z-10'>
            <h1 className='text-2xl font-medium text-center'>"Step into the <br />future of technology with our dynamic Innovative Lab"</h1>
          </div>
        </div>
        <div className='w-1/2 flex'>
          <img src="./Images/iot.jpg" alt="" />
        </div>
    </div>
   
    </div>

  )
}

export default Services