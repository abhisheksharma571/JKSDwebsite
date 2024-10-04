import React from 'react'

function GetTraining() {
  return (
    <>
    <div >
    <img className=' hidden md:block absolute right-0 mt-[4%] h-[340px]' src="./Images/Boy1.png" alt="Image not available" />
</div>
    <div className='w-full h-[400px] bg-[#FCFAF6] flex flex-col items-center justify-between pb-6 shadow-inner'>
        
        <div className='flex items-center pt-10 flex-col'>
            <h1 className='text-[#08528e] text-3xl md:text-5xl font-extrabold font-philosopher text-center'>Get Training By Top Experts</h1>
            <h2 className='font-semibold text-lg mt-7 px-3 text-center'>Gain insights from industry experts and take your skills to the next level.</h2>
            <h1 className='mt-[7%] font-philosopher'>Perks of Training</h1>
        </div>
        <div>
          <div className=' md:h-[150px] md:w-[600px] m-3 bg-[#dcebff] rounded-2xl shadow-sm flex items-center'>
            <div className=' md:h-[85%] md: w-[25%] border-r-[1px] border-blue-300 flex flex-col items-center justify-around px-3 pt-0'>
              <img className='h-[50%]  object-contain ' src="./Images/111.png" alt="" />
              <h1 className='text-sm text-center '>Certified Trainers</h1>
            </div>
            <div className='h-[85%] w-[25%] border-r-[1px] border-blue-300 flex flex-col items-center justify-around px-3 pt-0'>
              <img className='h-[60%] object-contain justify-center' src="./Images/222.png" alt="" />
              <h1 className='text-sm text-center '>Live Projects</h1>
            </div>
            <div className='h-[85%] w-[25%] border-r-[1px] border-blue-300 flex flex-col items-center justify-around px-3 pt-0'>
              <img className='h-[60%] object-contain items-center' src="./Images/333.png" alt="" />
              <h1 className='text-sm text-center'>Certification</h1>
            </div>
            <div className='h-[85%] w-[25%]  flex flex-col items-center justify-around px-3 pt-3'>
              <img className=' h-[60%] object-contain justify-center' src="./Images/444.png" alt="" />
              <h1 className='text-sm text-center pb-2'>Flexible Training</h1>
            </div>
          </div>
        </div>
    </div>
    
</>
  )
}

export default GetTraining