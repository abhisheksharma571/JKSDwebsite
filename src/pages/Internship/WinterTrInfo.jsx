import React from 'react'
import { Link } from 'react-router-dom'

function WinterTrInfo() {
  return (
    <div className='w-full h-screen bg-[#08528e] flex'>
       <div className=' object-contain pl-12  flex h-screen'>
          <img className='object-contain h-full mr-16' src="./Images/WinterIntern.jpg" alt="" />
       </div>
       <div className='w-[60%] pt-20 pl-6 text-[#FCFAF6]'>
       <h1 className='md:text-5xl  text-[#FCFAF6] font-philosopher font-black text-2xl'>Winter Training</h1>
       <p className='text-3xl mt-10 w-[85%] '>Boost Your Skills This Winter with Our Exclusive Training Program!</p>
       <p className='text-lg mt-10 w-[95%] '>JKSD's Winter Training Program is tailored for students across IT and Engineering domains, including BE/BTECH, BSC(IT), BCA, MCA, MSC(IT), and Diploma holders. Guided by experienced trainers and senior programmers, this program offers hands-on experience and industry-relevant skills to prepare you for the professional world. We ensure 100% placement support and take pride in our exceptional learning experience, backed by consistently positive feedback with zero negative reviews. This winter, seize the chance to sharpen your skills and advance your career by training with the best in the industry!</p>
       <div className='flex '>
       <div className='mt-8 font-normal text-[#FCFAF6] text-lg lg:text-xl '>
        <li>Duration: 3/6 Months</li>
        <li>Paid/Un Paid</li>
       </div >
       </div>
       <div className='object-bottom self-center pt-10'>
        <Link to='/contact'>
        <button className='text-lg font-light h-10 w-32 bg-[#FCFAF6] rounded-lg text-[#08528e] '>Enroll Now</button></Link>
        </div>
        
       </div>
    </div>
  )
}

export default WinterTrInfo