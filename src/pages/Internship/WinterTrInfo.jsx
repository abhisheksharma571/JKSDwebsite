import React from 'react'
import { Link } from 'react-router-dom'

function WinterTrInfo() {
  return (
    <div className='h-[570px] w-full md:w-full md:h-screen bg-[#08528e] flex  justify-center text-center'>
       <div className=' object-contain  md:pl-12  flex h-screen'>
          <img className='hidden md:block object-contain h-full mr-16' src="./Images/WinterIntern.jpg" alt="" />
       </div>
       <div className='w-full md:w-[60%] pt-4 md:pt-20 text-[#FCFAF6] px-7'>
       <h1 className='md:text-5xl  text-[#FCFAF6] font-philosopher font-black text-3xl text-center'>Winter Training</h1>
       <p className='md:text-3xl mt-10 w-full text-xl  text-center'>Boost Your Skills This Winter with Our Exclusive Training Program!</p>
       <p className='md:text-lg mt-8 md:mt-10 w-[95%] text-sm text-center'>JKSD's Winter Training Program is tailored for students across IT and Engineering domains, including BE/BTECH, BSC(IT), BCA, MCA, MSC(IT), and Diploma holders. Guided by experienced trainers and senior programmers, this program offers hands-on experience and industry-relevant skills to prepare you for the professional world. We ensure 100% placement support and take pride in our exceptional learning experience, backed by consistently positive feedback with zero negative reviews. This winter, seize the chance to sharpen your skills and advance your career by training with the best in the industry!</p>
       <div className='mt-8 font-normal text-white text-lg lg:text-xl '>
        <li>Duration: 3/6 Months</li>
        <li>Paid/Un Paid</li>
       </div >
       <div className='pt-3  md:pt-14 '>  
       <Link to='/enroll'>     
           <button className='text-sm mb-5 md:text-lg font-light h-7 w-24 md:h-10 md:w-32 text-[#08528e] rounded-lg bg-white '>Enroll Now</button></Link>
        </div>
        </div>
    </div>
  )
}

export default WinterTrInfo