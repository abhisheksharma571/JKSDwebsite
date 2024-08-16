import React from 'react'

function Services() {
  return (
    <div>
        <div className='flex justify-center '>
          <img src="./Images/SERVISES11.jpg" alt="" className='h-[600px] w-[1200px] justify-self-center'/>
          
        </div>
        <div>
        <div className='flex text-xl justify-center ml-12 -mt-12 space-x-[80px] font-bold'>
            <li className='list-none flex '>Training</li>
            <li className='list-none flex ml-[30px]'>Personality <br />Development</li>
            <li className='list-none flex '>Consulting</li>
            <li className='list-none flex '>Outsourced <br />HR Sercive</li>
            <li className='list-none flex '>Digital <br />Marketing</li>
            <li className='list-none flex -ml-14'>IOT Lab Setup</li>
          </div>
        </div>

    </div>
  )
}

export default Services