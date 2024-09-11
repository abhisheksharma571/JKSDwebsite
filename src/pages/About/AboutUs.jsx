import React from "react";

function AboutUs() {
  return (
    <div className="">
      {/* first Section*/}
      <div className="bg-[#c9cedd] md:flex">
        <div>
          <img
            src="public\students\student about .png"
            alt="student image"
            className=" pt-14 md:w-[500px] md:h-[660px] md:mt-[30px] md:ml-[170px]"
          />
        </div>

        <div className=" text-3xl  font-semibold md:flex-col md:w-1/2 ">
          <h1 className=" pt-10 text-center md:mt-20 md:text-left md:text-4xl md:pl-[80px] ">
            Unlocking{" "}
            <span className="  bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent">
              Journey Of{" "}
            </span>{" "}
            <hr className="border-none pt-2 " />
            Knowledge and Skill Devlopment
          </h1>{" "}
          <br />
          <p className=" text-lg text-center  font-normal tracking-wide  md:text-xl  md:pl-[80px] md:text-left md:tracking-wide">
            At JKSD Infotech, our vision is to shape a future where education
            knows no boundaries and technology serves as a catalyst for progress
            and empowerment. We envision a world where learning is not confined
            to the four walls of a classroom but extends to every corner of the
            globe, transcending barriers of geography, socioeconomic status, and
            traditional educational models .
          </p>
          <br />
          <ul className="list-disc  text-lg pl-10 font-normal md:pb-10   md:text-xl  md:pl-[100px] md:tracking-wide">
            <li className="md:py-2 ">
              Our expertise programs will transform trainees in a significant
              way by honing their understanding and elevating their alma mater.
            </li>
            <li className="md:py-2 ">
              Additionally, it will assist professionals in reviving their
              careers.
            </li>
            <li className="md:py-2 ">
              Prepare students for careers in the growing fields of web
              development and IoT.
            </li>
            <li className="md:py-2 ">
              Additionally, it will assist professionals in reviving their
              careers.
            </li>
          </ul>
        </div>
      </div>

      {/* Our Mission Section*/}
      <div  className=" overflow-hidden bg-white md:flex">
      
       <div className="md:flex-col">
        <h1 className="  font-semibold  py-[30px] text-indigo-900 text-center text-4xl
         md:text-5xl md:pt-[100px] md:pl-[100px]"> Our Mission</h1>
         <ul
          className="text-gray-600 text-xl font-medium px-10 pb-10 tracking-wide 
          list-disc text-left pl-[30px]  md:text-2xl  md:pl-[250px] md:pt-5 md:text-left "
        >
          <li className="py-2  list-item-bullet">
          To pursue diversity and equity in education.
          </li>
          <li className="py-2 list-item-bullet">
          To connect with students across the nation.
          </li>
          <li className="py-2 list-item-bullet">
           In order To establish a long-lasting company
          </li>
        </ul>

       </div>
       <div>
        <img src="public\mission\mission .png"
        className="m-10 ml-[120px] w-[380px] md:w-[380px]   md:mt-10 md:ml-[200px]"/>
       </div>

    </div>
     { /* Our vision Section*/ }

     <div  className="flex flex-col-reverse md:flex-row bg-white md:flex  ">
       <div>
        <img src="public\Images\vision\vision .png"
        className="m-10 ml-[120px] w-[380px] md:w-[380px] md:mt-5 md:ml-[250px]"
        />
       </div>
       <div className=" ">
        <h1 className="  font-semibold text-indigo-900 text-center text-4xl py-[20px]  pt-10
         md:text-5xl md:pt-[100px] md:pr-[80px] "> Our Vision</h1>
         <ul
          className="text-gray-600  text-xl font-medium px-10  pb-10 tracking-wide 
          list-disc text-left md:pl-[100px]  md:text-2xl  md:pt-10 md:text-left  "
        >
          <li className="py-2 list-item-bullet">
          To widely democratize education in India.
          </li>
          <li className="py-2 list-item-bullet">
          To provide affordable, high-quality education to all children
          </li>
          <li className="py-2 list-item-bullet">
            To build a business sustainability.
          </li>
        </ul>

       </div>

    </div>

    { /* Our founder Section*/ }


     <div>
     <h1 className='text-2xl md:text-5xl font-bold text-orange text-center pt-10 py-10'>OUR FOUNDERS</h1>
     <div  className="flex flex-col gap-6 px-14 pt-10 pb-10 md:flex-row md:h-[500px] md:flex bg-indigo-950 md:py-[50px] md:px-[50px] md:gap-10 md:justify-evenly">
               
     { /* Jitesh Sir*/ }
     <div className="flex flex-col   md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src="public\Images\JITESH MATHUR.jpeg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
          Jitesh Mathur
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
           Founder and CEO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/jitesh-mathur-92a063b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Icons/linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5 md:h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>
              
        { /* Swapnil misra*/ }
        <div className="flex flex-col  md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src="public\Images\SWAPNIL MISRA.jpeg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
          Swapnil Misra
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
            Co Founder and CPO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/swapnil-misra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Icons/linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>

        
        { /* Devansh Raghav*/ }
        <div className="flex flex-col md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src="public\Images\DEVANSH RAGHAV.jpeg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
          Devansh Raghav
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
            Co Founder and CTO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/devansh-raghav-08b147121/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Icons/linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>
        { /* Fariha khan*/ }
        
        <div className="flex flex-col md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src="public\Images\FARIHA MAM.jpeg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
            Fariha Khan
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
            Co Founder and COO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/khajida-khan-002355145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Icons/linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>

      </div>
      </div>

   { /* Our Team*/ }
      
      <div className="bg-white">
      <h1 className='text-2xl md:text-5xl font-bold text-orange text-center pt-10 py-10'>OUR TEAM</h1>
      <img src="public\Images\groupnew.png"
      alt="team pic"
       className=" mt-5 mb-14 md:h-[550px] md:mb-5 md:ml-[450px]  md:w-[750px]"/>
      </div>


    </div>

  );
}

export default AboutUs;
