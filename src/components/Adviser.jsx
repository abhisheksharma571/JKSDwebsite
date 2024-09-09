import React from 'react'

function Adviser() {
  return (
    <>
    <div>
        <h1 className=' md:text-5xl  text-orange text-center font-roboto-slab font-black text-2xl '>Our Advisors</h1>
    </div>
    <div className="flex mt-6 mb-3 items-center justify-center bg-backgound ">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
    <div className="group relative cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Vidyasagar Chaudhary</b><br />Head-Cloud Security Improvement</p>
        <a href="www.jksd.in" className="block">
    <img src="./Images/linkedin.png" alt="Linkedin" className="w-[25px] h-auto rounded-md shadow-lg hover:opacity-75 transition duration-300 ease-in-out" />
</a>
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Rakesh dubey</b> <br />SAGACIA Financial Inclusion Fund</p>
        <a href="https://www.linkedin.com/in/rakesh-dubey-b6843a150/" className="block">
    <img src="./Images/linkedin.png" alt="Linkedin" className="w-[25px] h-auto rounded-md shadow-lg hover:opacity-75 transition duration-300 ease-in-out" />
</a>
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Nilotpal Pathak</b><br />Managing Partner, I-Farm Venture Advisors Private Limited</p>
        <a href="">
          <img src="./Images/linkedin.png" alt="Linkedin" className='w-[25px]' />
        </a>
      </div>
    </div>
    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-96 w-72 ">
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Dr.Anand Kumar Dohare</b><br />Pj.D. (CSE), M.Tech. (CSE)</p>
          <a href="https://www.linkedin.com/in/dr-anand-dohare-2b1433104/">
            <img src="./Images/linkedin.png" alt="Linkedin" className='w-[25px]' />
          </a>
      </div>
    </div>
  </div>
  
</div>
</>

  )
}

export default Adviser