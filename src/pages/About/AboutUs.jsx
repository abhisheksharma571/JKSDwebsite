import React from "react";

function AboutUs() {
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-row ">
            <div className="lg:w-1/2 py-14 pl-28">
              <img
                src="src\assets\images\students.jpg"
                className=" h-full  rounded-xl"
              />
            </div>

            <div className="lg:w-1/2 lg:mr-12 text-xl font-light text-gray-800 pt-20 pb-10    text-left tracking-widest">
              <h2 className="lg:px-14 lg:text-3xl font-semibold">
                Shape Tomorrow’s Digital Leaders Today
              </h2>
              <br />
              <p className="lg:px-14 lg:text-xl font-normal text-left">
                At JKSD Infotech, our vision is to shape a future where
                education knows no boundaries and technology serves as a
                catalyst for progress and empowerment. We envision a world where
                learning is not confined to the four walls of a classroom but
                extends to every corner of the globe, transcending barriers of
                geography, socioeconomic status, and traditional educational
                models We aspire to create a learning ecosystem that is
                inclusive, equitable, and accessible to all, where individuals
                have the tools, resources, and support they need to thrive and
                contribute meaningfully to society.
              </p>
              <br />

              <div className=" px-60 pb-24">
                <button className="inline-block self-center bg-orange text-black font-bold rounded-2xl px-6 py-2 uppercase text-xl">
                  Read More{" "}
                </button>
              </div>
            </div>
          </div>

          <div className=" min-w-full h-80 bg-indigo-950 ">
            <h2 className="text-white  font-semibold text-2xl  md:text-5xl pl-14 pt-14 ">
              {" "}
              Our Mission
            </h2>

            <div className="flex flex-row gap-8  m-14 pl-28 ">
            <div className="bg-slate-100 h-10 w-auto p-8 rounded-2xl flex items-center justify-center">
  <ul className="list-disc">
    <li className="text-xl">
    To aim for Equity and inclusivity in Education
    </li>
  </ul>
</div>

              <div className="bg-slate-100 h-10 w-auto p-8 rounded-2xl flex items-center justify-center">
  <ul className="list-disc">
    <li className="text-xl">
    To reach learners in every corner of the country
    </li>
  </ul>
</div>


<div className="bg-slate-100 h-10 w-auto p-8 rounded-2xl flex items-center justify-center">
  <ul className="list-disc">
    <li className="text-xl">
    To build abusiness sustainability
    </li>
  </ul>
</div>
            </div>
          </div>

          <div>
            <div className="min-w-full h-screen  ">
              <h2 className="text-black font-semibold text-5xl pt-24 pl-24">
                {" "}
                Our Vision
              </h2>

              <ul className="text-xl font-normal text-left  list-disc pt-10 pl-32 text-gray-800">
                <li className="pb-5">
                  To democratize education at scale in India.
                </li>
                <li className="pb-5">
                  To guarantee that every child can afford high-quality
                  education.
                </li>
                <li className="pb-5">
                  To enable each child to reach their full potential, fulfill
                  their dreams, and be a lifelong partner in learning.
                </li>
                <li className="pb-5">
                  Our goal is to become known as a provider of education that
                  emphasizes equipping students with skills relevant to the
                  workforce.
                </li>
                <li className="pb-5">
                  We understand what the monthly paycheck will make you and your
                  family feel.
                </li>
              </ul>

              <div className="flex flex-row justify-center gap-10 px-16 py-8 pb-10 rounded-3xl">
                <div className="rounded-3xl drop-shadow-xl w-64 h-80 pt-8">
                  <img src="src\assets\images\jksd1.png" />
                </div>
                <div className="rounded-3xl w-64 h-80">
                  <img src="src\assets\images\jksd2.png" />
                </div>
                <div className="rounded-3xl w-64 h-80 pt-8">
                  <img src="src\assets\images\jksd3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-orange text-center p-16">
          OUR FOUNDERS
        </h1>
      </div>

      <div className=" flex flex-row lg:w-full lg:h-auto  py-20 bg-indigo-950 justify-center items-center gap-10  ">
        <div className="flex flex-col md:w-80 h-96 items-center p-7 bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4">
            <img
              src="src\assets\images\Devansh sir.png"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-2xl text-center pt-4">
            Jitesh Mathur
          </h2>
          <p className="text-gray-600 font-normal text-xl text-center  pt-1">
            Founder and ceo
          </p>
          <p className="text-black font-medium text-xl text-center  pt-3">
            "Igniting Potential, Shaping Futures."
          </p>
          <div className="pl-3 pt-4">
            <button className="inline-block self-center bg-orange text-black font-normal   rounded-2xl px-4 py-1 uppercase text-sm">
              Read More{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:w-80 h-96 items-center p-6 bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4">
            <img
              src="src\assets\images\Devansh sir.png"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-2xl text-center pt-5">
            Swapnil Misra
          </h2>
          <p className="text-gray-600 font-normal text-xl text-center  pt-1">
            {" "}
            Co Founder
          </p>
          <p className="text-black font-medium text-xl text-center  pt-3">
            "Building Skills for a Tech-Driven World."
          </p>
          <div className="pl-3 pt-4">
            <button className="inline-block self-center bg-orange text-black font-normal   rounded-2xl px-4 py-1 uppercase text-sm">
              Read More{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:w-80 h-96 items-center p-7 bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4">
            <img
              src="src\assets\images\Devansh sir.png"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-2xl text-center pt-3">
            Devansh Raghav
          </h2>
          <p className="text-gray-600 font-normal text-xl text-center  pt-1">
            {" "}
            Co Founder{" "}
          </p>
          <p className="text-black font-medium text-xl text-center  pt-3">
            "Igniting Potential, Shaping Futures."
          </p>
          <div className="pl-3 pt-4">
            <button className="inline-block self-center bg-orange text-black font-normal   rounded-2xl px-4 py-1 uppercase text-sm">
              Read More{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:w-80 h-96 items-center p-7 bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 ">
            <img
              src="src\assets\images\Devansh sir.png"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-2xl text-center pt-3">
            Fariha Khan
          </h2>
          <p className="text-gray-600 font-normal text-xl text-center  pt-1">
            {" "}
            Co Founder
          </p>
          <p className="text-black font-medium text-xl text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <div className="pl-3 pt-4">
            <button className="inline-block self-center bg-orange text-black font-normal   rounded-2xl px-4 py-1 uppercase text-sm">
              Read More{" "}
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AboutUs;
