import React from 'react'
import download from '../assets/images/download.png'
import arrow from '../assets/images/right-arrow.png'

const Cources = () => {
    return (
        <div className="courses  ">
            <div className="coureshading items-center text-5xl mt-5 text-orange text-center font-bold ">
                <h1 >Our Courses</h1>
            </div >
            <div className='flex flex-wrap gap-6 justify-evenly mx-16 mt-4 '>
                {
                    data.map((d, index) => (
                        <div className="courseslist flex gap-7 flex-wrap justify-center pt-6 ">
                            <div className="c1   h-72 w-80  border-solid border-1 rounded-lg  justify-between shadow-[0_0.1px_13px_0.1px_#9da39e]">
                                <img className='rounded-lg' src={d.image} alt="" />

                                <h1 className='font-medium text-2xl text-center ' >{d.title}</h1>
                                <p className='text-xs text-center mt-2 '>{d.description}</p>

                                <div className='flex justify-evenly  mt-3 ' >
                                    <button
                                        class="  font-sans font-bold  text-center uppercase  text-xs py-1.5 ml-2 px-2  mt-2  rounded-lg  bg-orange border-2  text-black  flex items-center gap-2  "
                                        type="button">
                                         Brochure
                                        <img className='h-5 w-5  ' src={download} alt="" />
                                    </button>

                                    <button
                                        class="  font-sans font-medium text-center uppercase  text-xs py-1.5 ml-2 px-2  mt-2  rounded-lg  bg-white border-2 border-orange text-black  flex items-center gap-2  "
                                        type="button">

                                        Explore Now
                                        <img className='h-5 w-5' src={arrow} alt="" />

                                    </button>
                                </div>

                                {/* second courses start here  */}


                            </div>


                        </div>
                    ))
                }
            </div>


        </div>
    )
}

const data = [
    {
        title: 'Digital Marketing',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Course',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital IoT',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Marketing',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Management',
        description: 'BEST DIGITAL MARKETING COURSE IN DELHI NCR',
        image: './Images/digitall.png'
    },
    {
        title: 'Digital Marketing',
        description: 'BEST DIGITAL IN DELHI NCR',
        image: './Images/digitall.png'
    }
]

export default Cources