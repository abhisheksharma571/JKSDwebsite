import React from 'react'
import { Link } from 'react-router-dom'
import SummerTrInfo from './SummerTrInfo'

function SummerTraining() {
  return (
    <>
    
    <div className='shadow-lg'>
    <div className=' w-full h-screen flex bg-[#08528e] rounded-r-xl'>
        <div className=' py-10 pl-10 flex w-full h-full justify-evenly items-center flex-wrap '>
          
              <div className='bg-[#FCFAF6] mt-7 h-[45%] w-[45%] rounded-lg flex flex-col shadow-2xl'>
                  <img className='w-full h-[60%] rounded-t-md' src="./Images/11.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-2xl font-philosopher ml-3'>Summer Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/summerTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>     
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/contact'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Enroll Now</button></Link>
                    </div>
                    </div>
              </div>
        {/* // Summer Training end */}
        
              <div className='bg-[#FCFAF6] mt-7 h-[45%] w-[45%] rounded-lg flex flex-col shadow-2xl'>
                  <img className='w-full h-[60%] rounded-t-md' src="./Images/22.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-2xl font-philosopher ml-3'>Winter Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/winterTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/contact'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Enroll Now</button></Link>
                    </div>
                    </div>
              </div>

              {/* Winter Training end */}

              <div className='bg-[#FCFAF6] mt-7 h-[45%] w-[45%] rounded-lg flex flex-col shadow-2xl'>
                  <img className='w-full h-[60%] rounded-t-md' src="./Images/33.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-2xl font-philosopher ml-3'>Corporate Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/corporateTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/contact'>
                    <button className='h-10 rounded-md   bg-[#f4c694]'>Enroll Now</button></Link>
                    </div>
                    </div>
              </div>
        
          {/* Corporate training  */}
        
        <div className='bg-[#FCFAF6] mt-7 h-[45%] w-[45%] rounded-lg flex flex-col shadow-2xl '>
                  <img className='w-full h-[60%] rounded-t-md' src="./public/Images/PROJECT.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-2xl font-philosopher ml-3'>Project Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/projectTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/contact'>
                    <button className='h-10 rounded-md   bg-[#f4c694]'>Enroll Now</button></Link>
                    </div>
                  </div>
              </div>

              {/* //Project Training end */}
        </div>
        <div className='w-[40%] bg-[#08528e] flex items-end'>
            <img className='  h-[90%] mt-[8%] w-full' src="./Images/44883625679.png" alt="" />
        </div>
    </div>

    
    </div>
    </>
  )
}

export default SummerTraining