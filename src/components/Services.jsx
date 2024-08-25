import React from 'react'

function Services() {
  return (
    <div>
      <div className='flex justify-center '>
        <img src="./Images/SERVISES11.jpg" alt="" className='h-[600px] w-[1200px] justify-self-center' />

      </div>
      
        <div className='flex text-xl  -mt-14 pl-1 justify-evenly font-bold '>
          <div> <li className='list-none    h-14 w-32 pl-8 '>Training</li></div>
          <div> <li className='list-none    h-14 w-32 pl-4 text-center '>Personality <br />Development</li></div>
          <div><li className='list-none     h-14 w-32 pl-5 '>Consulting</li></div>
          <div><li className='list-none    h-14 w-32 pl-5 text-center '>Outsourced <br />HR Sercive</li></div>
          <div><li className='list-none    h-14 w-32  text-center pl-6 '>Digital <br />Marketing</li></div>
          <div><li className='list-none    h-14 w-32 text-center pl-6 '>IOT Lab Setup</li></div>
        </div>
      

    </div>
  )
}

export default Services