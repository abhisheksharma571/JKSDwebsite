import React from "react";
import HiringPartners from "../../components/HiringPartners";
import { Link } from "react-router-dom";

function JobAssistance() {
  return (
    <div>
      {/* home */}
      <div className="relative h-[300px] md:h-[400px]">
  <img
    src="./Images/jobassitance-home.png"
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover opacity-90 filter backdrop-blur-xl"
  />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65"></div>
  
  <div className="relative flex flex-col md:flex-row items-center h-full">
    <div className="relative flex flex-col justify-center text-center md:text-left w-full md:w-[70%] h-full  md:pl-[70px]">
      <h1 className="text-white text-2xl md:text-5xl font-semibold leading-snug">
        Accelerate Your Hiring Process With Job-Ready Professionals
      </h1>
      <p className="text-white text-lg md:text-3xl mt-5 md:mt-10 leading-relaxed">
        Select from our skilled and competent candidate pool to enhance your workforce
      </p>
      <div className="pt-5 md:pt-10 flex justify-center md:justify-start">
        <button className="bg-orange hover:bg-[#d97706] text-black rounded-3xl py-2 px-4 flex items-center gap-2 group">
          <Link to="/enrollnow" className="flex items-center">
            Enroll Now
            <img
              src="./icons/next-icon.png"
              alt="Enroll Icon"
              className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
            />
          </Link>
        </button>
      </div>
    </div>
    
    <div className="w-full md:w-[350px] flex justify-center ">
      <img
        src="./Images/jobassistance-removebg.png"
        alt="Job Assistance"
        className="h-[150px] md:h-[350px] md:mr-[0px] object-contain hidden md:block"
      />
    </div>
  </div>
</div>

{/* our placemet process */}
<div>
    <div>
     <h1 className='text-3xl md:text-5xl text-[#08528e] text-center pt-10 py-10 font-philosopher font-black '>Our placement Process</h1>
     </div>
    <div>
      <img src=".\Images\jahorizontal.jpeg" alt="Desktop View" className=" w-full hidden md:block" />
      <img src=".\Images\javertical.jpeg" alt="Mobile View" className="block md:hidden" />
    </div>
</div>

      {/* Diversified Student Profiles */}
      <div className="relative h-auto bg-[#08528e] py-10">
  <h1 className="text-white text-center font-philosopher font-black text-2xl md:text-4xl lg:text-5xl">
    Diversified Student Profiles
  </h1>
  <div className="flex flex-wrap justify-center gap-6 pt-10 px-5">
    {/* Card 1 */}
    <div className="h-[200px] w-[300px] md:w-[300px] bg-blue-300 rounded-md shadow-xl flex flex-col justify-center items-center">
      <img className="w-16 md:w-20 mt-3" src="./icons/analysis-icon.png" alt="" />
      <p className="font-bold">Data Analyst</p>
      <p>Rs. 3-4.5 LPA</p>
      <div className="flex gap-2 w-[120px] md:w-[150px] bg-[#08528e] px-2 py-1 rounded-md text-white justify-center">
        <img className="w-4 md:w-5" src="./icons/right-up.png" alt="" />
        <p>30 %</p>
      </div>
    </div>
    {/* Card 2 */}
    <div className="h-[200px] w-[300px] md:w-[300px] bg-blue-300 rounded-md shadow-xl flex flex-col justify-center items-center">
      <img className="w-16 md:w-20 mt-3" src="./icons/python-icon.png" alt="" />
      <p className="font-bold">Python Engineer</p>
      <p>Rs. 3-4 LPA</p>
      <div className="flex gap-2 w-[120px] md:w-[150px] bg-[#08528e] px-2 py-1 rounded-md text-white justify-center">
        <img className="w-4 md:w-5" src="./icons/right-up.png" alt="" />
        <p>25 %</p>
      </div>
    </div>
    {/* Card 3 */}
    <div className="h-[200px] w-[300px] md:w-[300px] bg-blue-300 rounded-md shadow-xl flex flex-col justify-center items-center">
      <img className="w-16 md:w-20 mt-3" src="./icons/iot-icon.png" alt="" />
      <p className="font-bold">IoT Engineer</p>
      <p>Rs. 4-5 LPA</p>
      <div className="flex gap-2 w-[120px] md:w-[150px] bg-[#08528e] px-2 py-1 rounded-md text-white justify-center">
        <img className="w-4 md:w-5" src="./icons/right-up.png" alt="" />
        <p>20 %</p>
      </div>
    </div>
    {/* Card 4 */}
    <div className="h-[200px] w-[300px] md:w-[300px] bg-blue-300 rounded-md shadow-xl flex flex-col justify-center items-center">
      <img className="w-16 md:w-20 mt-3" src="./icons/java-icon.png" alt="" />
      <p className="font-bold">Java Developer</p>
      <p>Rs. 4-5 LPA</p>
      <div className="flex gap-2 w-[120px] md:w-[150px] bg-[#08528e] px-2 py-1 rounded-md text-white justify-center">
        <img className="w-4 md:w-5" src="./icons/right-up.png" alt="" />
        <p>35 %</p>
      </div>
    </div>
  </div>
</div>

      {/* hiring partners */}
      <div>
        <HiringPartners />
      </div>
    </div>
  );
}

export default JobAssistance;
