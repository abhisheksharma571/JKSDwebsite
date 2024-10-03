import React from 'react'

function TrainingServices() {
  return (
    <>
    <div className='w-full h-screen bg-[#08528e] flex flex-col justify-center items-center p-6'>
        <div>
        <h1 className=' md:text-5xl text-[#ffffff] text-center pt-8 font-philosopher font-black text-2xl'>Our Training Services</h1>
        </div>
        
     <div className='w-[70%] h-full columns-3 mt-10'>
        
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/SoftwareTr.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Software Training</h1>
            <p className='pt-4'>Gain practical skills and in-depth knowledge with our hands-on Software Training, tailored to boost your proficiency!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 my-4 p-7'>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/4.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Weekend Workshop</h1>
            <p className='pt-5'>Level up your skills with our weekend workshops – dive deep, learn fast, and accelerate your growth!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/3.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Project Training</h1>
            <p className='pt-4'>Enhance your expertise with hands-on Project Training, designed to equip you with real-world skills for career success!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 my-4 p-7 '>
        <div className='h-12 w-12 rounded-xl ml-5'>
            <img className='w-full h-full rounded-xl' src="./Images/2.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Classroom Training</h1>
            <p className='pt-4'>Master new skills with focused Classroom Training, offering expert guidance and interactive learning experiences!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/1.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Weekend Workshop</h1>
            <p className='pt-4'>Fast-track your learning with immersive Weekend Workshops, designed to deepen your expertise in key areas!</p>
        </div> 
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 my-4 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/5.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>On the Job Training </h1>
            <p className='pt-5'>Level up your skills with our weekend workshops – dive deep, learn fast, and accelerate your growth!</p>
        
        </div>
        
     </div>
    </div>
    </>
  )
}

export default TrainingServices