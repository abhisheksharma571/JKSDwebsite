import React from "react";
import AboutHome from "./AboutHome";

function AboutUs() {
  return (
    <>
      <div>
        <AboutHome />
      </div>
      <div className="">
        {/* first Section*/}
        <div className="bg-[#c9cedd] md:flex ">
          <div>
            <img
              src=".\Images\aboutimage.jpeg"
              alt="student image"
              className=" pt-14 m-10 w-[300px] md:w-[500px] md:h-[700px] md:mt-[30px] md:m-[12px] lg:ml-[150px] "
            />
          </div>

          <div className=" text-3xl  font-semibold md:flex-col md:w-1/2 ">
            <h1 className=" pt-10 text-center md:mt-20 md:text-left md:text-4xl lg:pl-[100px]  ">
              Unlocking{" "}
              <span className="  bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent">
                Journey Of{" "}
              </span>{" "}
              <hr className="border-none pt-2 " />
              Knowledge and Skill Devlopment
            </h1>{" "}
            <br />
            <p className=" text-lg text-center px-3 font-normal tracking-wide  md:text-xl  md:text-left md:tracking-wide lg:pl-[100px] ">
              At JKSD Infotech, our vision is to shape a future where education
              knows no boundaries and technology serves as a catalyst for progress
              and empowerment. We envision a world where learning is not confined
              to the four walls of a classroom but extends to every corner of the
              globe, transcending barriers of geography, socioeconomic status, and
              traditional educational models .
            </p>
            <br />
            <ul className="list-disc  px-6 py-5 text-lg pl-10 font-normal md:pb-10   md:text-xl  md:pl-[40px] md:tracking-wide lg:pl-[100px]">
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
        <div className=" overflow-hidden bg-white md:flex">

          <div className="md:flex-col">
            <h1 className="  font-semibold  py-[30px] font-philosopher  text-[#08528e] text-center text-4xl
         md:text-5xl md:pt-[100px] md:pl-[90px] lg:pl-[100px]"> Our Mission</h1>
            <ul
              className="text-gray-600 px-6 py-5 text-xl font-medium  pb-10 tracking-wide 
          list-disc text-left pl-[30px]  md:text-2xl  md:pl-[150px] md:pt-5 md:text-left lg:pl-[250px] "
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
            <img src=".\Images\mission.png"
              className="m-10 ml-[50px] w-[280px] md:w-[400px]   md:mt-10 md:ml-[100px]  lg:w-[450px] lg:ml-[210px]" />
          </div>

        </div>
        { /* Our vision Section*/}

        <div className="flex flex-col-reverse md:flex-row bg-white md:flex  ">
          <div>
            <img src=".\Images\vision.png"
              className="m-10 ml-[50px] w-[280px] md:w-[400px] md:mt-10 md:ml-[100px]  lg:w-[450px] lg:ml-[210px] "
            />
          </div>
          <div className=" ">
            <h1 className="  font-semibold text-[#08528e] font-philosopher text-center text-4xl py-[20px] pt-10
         md:text-5xl md:pt-[100px] md:pr-[80px] "> Our Vision</h1>
            <ul
              className="text-gray-600 px-9 py-5 text-xl font-medium   pb-10 tracking-wide 
          list-disc text-left md:pl-[150px] md:text-2xl  md:pt-10 md:text-left lg:pl-[200px] "
            >
              <li className="py-2  list-item-bullet">
                To widely democratize education in India.
              </li>
              <li className="py-2 list-item-bullet">

                Affordable, high-quality education for all.
              </li>
              <li className="py-2 list-item-bullet">
                To build a business sustainability.
              </li>
            </ul>

          </div>

        </div>

        { /* Our founder Section*/}


        <div>
          <h1 className='text-4xl md:text-5xl text-[#08528e] text-center pt-10 py-10 font-philosopher font-black '>Our Founders</h1>
          <div className="flex flex-col gap-6 px-14 pt-10 pb-10 md:flex-row md:h-[500px] md:flex  bg-[#0A528E]  md:py-[50px] md:px-[50px] md:gap-10 md:justify-evenly">

            { /* Jitesh Sir*/}
            <div className="flex flex-col   md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
              <div className="w-32 h-32 mb-4 items-center ">
                <img
                  src=".\Images\jitesh_mathur-removebg.jpg"
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
                  src="./icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 mt-5 md:h-8 object-cover rounded-lg hover:opacity-80"
                />
              </a>
            </div>

            { /* Swapnil misra*/}
            <div className="flex flex-col  md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
              <div className="w-32 h-32 mb-4 items-center ">
                <img
                  src=".\Images\swapnilmishra-bgremove.jpg"
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
                  src="./icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
                />
              </a>
            </div>


            { /* Devansh Raghav*/}
            <div className="flex flex-col md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
              <div className="w-32 h-32 mb-4 items-center ">
                <img
                  src=".\Images\mr_devanshnew.jpg"
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
                  src="./icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
                />
              </a>
            </div>
            { /* Fariha khan*/}

            <div className="flex flex-col md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
              <div className="w-32 h-32 mb-4 items-center ">
                <img
                  src=".\Images\FARIHAMAM.jpeg"
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
                  src="./icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
                />
              </a>
            </div>

          </div>
        </div>

        { /* Our Team*/}



        <h1 className="text-center  text-5xl font-bold p-4  bg-white font-philosopher"  >Meet the Team </h1>
        <div className="bg-[#f2f2f2]   ">
          <div>
            <div className="flex mt-6 mb-3 items-center justify-center bg-backgound ">
              <div className="flex flex-wrap gap-4 justify-center">
                {/* first line started */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
                <div className="group relative w-64 h-[350px] rounded-tl-[80px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105" src="./Teampic/abhii.png" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28  inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity  duration-300 group-hover:opacity-100"><b>Abhishek Kumar </b><br />(Web Developer)</p>

                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>
                  </div>
                </div>

                <div className="group relative w-64 h-[350px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72  ">
                    <img className="h-full w-full object-cover  transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src="./Teampic/ayushf.jpeg" alt="Ayush shakya" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute  hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Ayush Shakya</b><br />(Web Developer)</p>

                    <a href="https://www.linkedin.com/in/ayush-shakya-632189258/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>

                <div className="group relative w-64 h-[350px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/chopf.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Abhishek Sharma</b><br />(Web Developer)</p>
                    <a href="https://www.linkedin.com/in/abhishek-sharma-b3569b295/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>


                <div className="group relative w-64 h-[350px]  rounded-br-[80px] cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/mahimaa.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Mahima </b><br />(Web Developer)</p>

                    <a href="https://www.linkedin.com/in/mahima-singh-46307a317/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>
                </div>
                {/* new line started */}
                <div className="flex flex-col md:flex md:flex-row justify-center gap-5  ">
                <div className="group relative w-64 h-[350px] rounded-tl-[80px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/shreju.png" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute  hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Shrejal Chauhan</b><br />(Web developer)</p>
                    <a href="https://www.linkedin.com/in/shrejal-chauhan-3a3686263/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>

                </div>

                <div className="group relative w-64 h-[350px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="#" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Palak Bansal</b><br />(Web developer)</p>
                    <a href="https://www.linkedin.com/in/palak-bansal-084363284/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>

                <div className="group relative w-64 h-[350px]  rounded-br-[80px] cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/sankalp.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Sankalp</b><br />(Human Resources)</p>

                    <a href="https://www.linkedin.com/in/sankalp-choudhary-a664332b6/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>

                </div>

              </div>

            </div>

          </div>
        </div>


      </div>
    </>

  );
}

export default AboutUs;