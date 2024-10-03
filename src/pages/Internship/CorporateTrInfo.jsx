import React from 'react'
import { Link } from 'react-router-dom'

function CorporateTrInfo() {
  return (
    <div className='bg-[#FBFAF6] w-full sm:h-screen flex h-auto'>
        <div className='w-full text-white sm:text-start text-center px-2 pt-14 lg:pl-[100px]'>
        
        <h1 className='sm:text-5xl  text-[#08528e] font-philosopher  text-3xl lg:font-bold lg:text-6xl '>Corporate Training</h1>
       <p className='text-sm sm:text-lg mt-8 sm:w-[80%] text-black lg:text-3xl '>This version shifts the focus to corporate training while maintaining a dynamic and motivating tone. Let me know if you'd like further tweaks!</p>
       <p className='text-sm sm:text-lg mt-8 sm:w-[90%] text-black lg:text-xl '>JKSD's Corporate Training Program is designed for professionals across IT and Engineering domains. Led by experienced trainers and senior experts, you'll gain hands-on knowledge and industry-relevant skills to excel in your career. Our commitment to excellence ensures top-notch learning, backed by 100% satisfaction and consistently positive feedback. Elevate your professional growth and work with industry leaders through our unmatched training experience!</p>
       <div className='mt-8 font-normal text-black text-lg lg:text-xl '>
        <li>Duration: 3/6 Months</li>
        <li>Paid/Un Paid</li>
       </div >
       <div className='pt-14 '>   
       <Link to='/contact'>    
           <button className='text-lg font-light h-10 w-32 bg-[#08528e] rounded-lg text-white '>Enroll Now</button>
           </Link>
        </div>
        </div>
        
        <div className=' w-full sm:w-1/2  hidden sm:block mr-16'>
            <img className=' object-contain  sm:h-screen' src="./Images/CorporateIntern.png" alt="" />
        </div>
    </div>
  )
}

export default CorporateTrInfo