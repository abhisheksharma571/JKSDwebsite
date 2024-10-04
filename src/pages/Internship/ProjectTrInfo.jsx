import React from 'react'
import { Link } from 'react-router-dom'

function ProjectTrInfo() {
  return (
    <div className='h-[570px] w-full md:w-full md:h-screen bg-[#08528e] flex'>
    <div className=' object-contain md:pl-12  flex h-screen'>
       <img className='hidden md:block object-contain h-full mr-16' src="./Images/ProjectIntern.png" alt="" />
    </div>
    <div className='w-full pt-4 px-5 md:pt-20  text-[#FCFAF6] text-center'>
    <h1 className='md:text-5xl  text-[#FCFAF6] font-philosopher font-black text-3xl text-center'>Project Training</h1>
    <p className='md:text-3xl mt-10 w-full text-xl  text-center'>This version focuses on project training, emphasizing practical, real-world experience to build your career. Let me know if you'd like to refine it further!</p>
    <p className='md:text-lg mt-8 md:mt-10 w-full  text-sm text-center'>JKSD's Project Training Program is tailored for IT and Engineering students, including BE/BTECH, BSC(IT), BCA, MCA, MSC(IT), and Diploma holders. Under the guidance of experienced trainers, you'll work on real-world projects, gaining practical skills and industry knowledge. Our focus on hands-on experience and excellence is reflected in consistently positive feedback. This is your chance to enhance your expertise and prepare for a successful career with industry-relevant project experience!</p>
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

export default ProjectTrInfo