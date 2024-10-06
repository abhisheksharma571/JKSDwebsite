import React from 'react'

function Adviser() {
  return (
    <>
    <div>

        <h1 className=' md:text-5xl  text-[#08528e] text-center font-philosopher font-black text-2xl '>Our Advisors</h1>


    </div>
    <div className="flex mt-6 mb-3 items-center justify-center bg-backgound ">
  <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4 p-2">
    <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 sm:w-72 w-auto">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/Rakesh.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Rakesh dubey</b><br />SAGACIA Financial Inclusion Fund</p>
      
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 sm:w-72 w-auto">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/VidyaSagar.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">    
        <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Vidyasagar Chaudhary</b><hr className='border-none'/>Head-Cloud Security Improvement<br /></p>
       </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 sm:w-72 w-auto">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/Nilotpal.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Nilotpal Pathak</b><br />Managing Partner, I-Farm Venture Advisors Private Limited</p>
        
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className=" h-96  sm:w-72 ">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Images/SourabhDubey.jpeg" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Saurabh Dubey</b><br /> SAP <br />(Senior Software Engineer)<br />Technical Advisor</p>
          
      </div>
    </div>
  </div>
  
</div>
</>

  )
}

export default Adviser