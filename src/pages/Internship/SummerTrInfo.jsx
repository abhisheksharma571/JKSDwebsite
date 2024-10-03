import React from 'react'
import { Link } from 'react-router-dom'
function SummerTrInfo() {
  return (
    <div className='bg-[#FBFAF6] w-full sm:h-screen flex h-auto'>
        <div className='w-full text-white sm:text-start text-center px-2 pt-14 lg:pl-[100px]'>
        
        <h1 className='sm:text-5xl  text-[#08528e] font-philosopher  text-3xl lg:font-bold lg:text-6xl '>Summer Training</h1>
       <p className='text-sm sm:text-lg mt-8 sm:w-[80%] text-black lg:text-3xl '>Kickstart Your Career with a Summer Internship Experience!</p>
       <p className='text-sm sm:text-lg mt-8 sm:w-[90%] text-black lg:text-xl '>JKSD's Summer Internship program is designed for students across IT and Engineering domains, including BE/BTECH, BSC(IT), BCA, MCA, MSC(IT), and Diploma holders. With experienced trainers and senior programmers guiding you, you'll gain practical knowledge and industry-relevant skills. Our commitment to excellence has resulted in 100% placement support, and we take pride in delivering an unmatched learning experience—reflected by our consistent positive feedback with no negative reviews. This is your opportunity to elevate your career and work with the best in the field!</p>
       <div className='mt-8 font-normal text-black text-lg lg:text-xl '>
        <li>Duration: 3/6 Months</li>
        <li>Paid/Un Paid</li>
       </div >
       <div className='pt-14 '>  
       <Link to='/contact'>     
           <button className='text-lg font-light h-10 w-32 bg-[#08528e] rounded-lg text-white '>Enroll Now</button></Link>
        </div>
        </div>
        
        <div className=' w-full sm:w-1/2 h-screen hidden sm:block mr-20 '>
            <img className='w-auto sm:w-[1300px] mt-[74px]' src="./Images/SummerIntern1.png" alt="" />
        </div>
    </div>
  )
}

export default SummerTrInfo