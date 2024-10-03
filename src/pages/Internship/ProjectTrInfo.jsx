import React from 'react'
import { Link } from 'react-router-dom'

function ProjectTrInfo() {
  return (
    <div className='w-full h-screen bg-[#08528e] flex'>
    <div className=' object-contain pl-12  flex h-screen'>
       <img className='object-contain h-full mr-16' src="./Images/ProjectIntern.png" alt="" />
    </div>
    <div className='w-[60%] pt-20 pl-6 text-[#FCFAF6]'>
    <h1 className='md:text-5xl  text-[#FCFAF6] font-philosopher font-black text-2xl'>Project Training</h1>
    <p className='text-3xl mt-10 w-[85%] '>This version focuses on project training, emphasizing practical, real-world experience to build your career. Let me know if you'd like to refine it further!</p>
    <p className='text-lg mt-10 w-[95%] '>JKSD's Project Training Program is tailored for IT and Engineering students, including BE/BTECH, BSC(IT), BCA, MCA, MSC(IT), and Diploma holders. Under the guidance of experienced trainers, you'll work on real-world projects, gaining practical skills and industry knowledge. Our focus on hands-on experience and excellence is reflected in consistently positive feedback. This is your chance to enhance your expertise and prepare for a successful career with industry-relevant project experience!</p>
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

export default ProjectTrInfo