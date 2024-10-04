import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

function SummerTraining() {
  // Slider settings for mobile
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    centerMode: false,
  };

  return (
    <>
      <div className='shadow-lg'>
        {/* Mobile Slider */}
        <div className='block md:hidden'>
          <Slider {...settings}>
            <div>
              <div className='bg-[#FCFAF6] h-[300px] rounded-lg flex flex-col shadow-2xl'>
                <img className='w-full h-[60%] rounded-t-md' src="./Images/11.png" alt="" />
                <h1 className='text-xl font-philosopher ml-3'>Summer Training</h1>
                <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                <div className='text-md flex justify-between mx-3 mt-1'>
                  <Link to='/summerTrInfo'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Explore More</button>
                  </Link>
                  <Link to='/enroll'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className='bg-[#FCFAF6] h-[300px] rounded-lg flex flex-col shadow-2xl'>
                <img className='w-full h-[60%] rounded-t-md' src="./Images/22.png" alt="" />
                <h1 className='text-xl font-philosopher ml-3'>Winter Training</h1>
                <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                <div className='text-md flex justify-between mx-3 mt-1'>
                  <Link to='/winterTrInfo'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Explore More</button>
                  </Link>
                  <Link to='/enroll'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className='bg-[#FCFAF6] h-[300px] rounded-lg flex flex-col shadow-2xl'>
                <img className='w-full h-[60%] rounded-t-md' src="./Images/33.png" alt="" />
                <h1 className='text-xl font-philosopher ml-3'>Corporate Training</h1>
                <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                <div className='text-md flex justify-between mx-3 mt-1'>
                  <Link to='/corporateTrInfo'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Explore More</button>
                  </Link>
                  <Link to='/enroll'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className='bg-[#FCFAF6] h-[300px] rounded-lg flex flex-col shadow-2xl'>
                <img className='w-full h-[60%] rounded-t-md' src="./Images/PROJECT.png" alt="" />
                <h1 className='text-xl font-philosopher ml-3'>Project Training</h1>
                <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                <div className='text-md flex justify-between mx-3 mt-1'>
                  <Link to='/projectTrInfo'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Explore More</button>
                  </Link>
                  <Link to='/enroll'>
                    <button className='h-10 px-4 rounded-md bg-[#f4c694]'>Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/* Larger device layout */}
        <div className='h-[1080px] md:w-full hidden md:h-screen   md:flex bg-[#08528e] rounded-r-xl'>
        <div className='py-0 px-8 md:py-10 md:pl-10 flex w-full h-full  justify-evenly md:items-center flex-wrap '>
          
              <div className='bg-[#FCFAF6] md:mt-7 md:h-[45%] md:w-[45%] rounded-lg flex flex-col shadow-2xl'>
                  <img className='w-full h-[60%] rounded-t-md' src="./Images/11.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-xl md:text-2xl font-philosopher ml-3'>Summer Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md w-[35%] mb-2 md:w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/summerTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>     
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/enroll'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Enroll Now</button></Link>
                    </div>
                    </div>
              </div>
        {/* // Summer Training end */}
        
              <div className='bg-[#FCFAF6] md:mt-7 md:h-[45%] md:w-[45%] rounded-lg flex flex-col shadow-2xl'>
                  <img className='w-full h-[60%] rounded-t-md' src="./Images/22.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-xl md:text-2xl font-philosopher ml-3'>Winter Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md w-[35%] mb-2 md:w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/winterTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/enroll'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Enroll Now</button></Link>
                    </div>
                    </div>
              </div>

              {/* Winter Training end */}

              <div className='bg-[#FCFAF6] md:mt-7 md:h-[45%] md:w-[45%] rounded-lg flex flex-col shadow-2xl'>
                  <img className='w-full h-[60%] rounded-t-md' src="./Images/33.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-xl md:text-2xl font-philosopher ml-3'>Corporate Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md  w-[35%] mb-2 md:w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/corporateTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/enroll'>
                    <button className='h-10 rounded-md   bg-[#f4c694]'>Enroll Now</button></Link>
                    </div>
                  </div>
              </div>
        
          {/* Corporate training  */}
        
        <div className='bg-[#FCFAF6] md:mt-7 md:h-[45%] md:w-[45%] rounded-lg flex flex-col shadow-2xl '>
                  <img className='w-full h-[60%] rounded-t-md' src="./public/Images/PROJECT.png" alt="" />
                  <div className='flex justify-between'>
                  <h1 className='text-xl md:text-2xl font-philosopher ml-3'>Project Training</h1>
                  {/* <img className='object-contain w-7 mr-5 mt-2' src="./Images/share.png" alt="" /> */}
                  </div>
                  <div className='flex pl-3'>
                    <img className='object-contain w-5 ' src="./Images/repeat.png" alt="" />
                    <h2 className='text-[#08528e]'>&nbsp; Duration: 3 Months</h2>
                  </div>
                  <div className='text-md flex justify-between mx-3 mt-1'>
                  <div className='h-10 rounded-md w-[35%] mb-2 md:w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/projectTrInfo'>
                    <button className='h-10 rounded-md   bg-[#f4c694] '>Explore More</button></Link>
                    </div>
                    <div className='h-10 rounded-md  w-[45%] bg-[#f4c694] text-center'>
                    <Link to='/enroll'>
                    <button className='h-10 rounded-md   bg-[#f4c694]'>Enroll Now</button></Link>
                    </div>
                  </div>
              </div>

              {/* //Project Training end */}
        </div>
        <div className='w-[40%] bg-[#08528e] flex items-end'>
            <img className=' hidden md:block h-[90%] mt-[8%] w-full' src="./Images/44883625679.png" alt="" />
        </div>
    </div>


      </div>
    </>
  );
}

export default SummerTraining;
