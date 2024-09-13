import React from 'react'

function ServiceHead() {
  return (
    <div className="relative">
      <img src="./Images/ServiceHead.jpg" alt="Image is not showing" className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl md:text-6xl font-bold">
          S e r v i c e
        </h2>
        <div className='text-white flex '>
          <span className='text-2xl font-normal text-center '>
            <a href="/" className="text-2xl font-normal pr-3">Home </a>
          </span>
          <h1 className='text-2xl '>&gt;</h1>
          <span className='text-2xl font-normal pl-3'> Service</span>
        </div>
      </div>
    </div>


  )
}

export default ServiceHead