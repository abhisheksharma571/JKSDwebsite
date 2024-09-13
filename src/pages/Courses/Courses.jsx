import React from 'react'
import {Link} from 'react-router-dom'
const Courses = () => {
    return (
        <div className="courses  ">
            <div className="coureshading items-center mt-5 text-orange text-center font-roboto-slab font-black text-5xl">
                <h1 >Our Courses</h1>
            </div >
            <div className='flex flex-wrap gap-12 justify-evenly mx-24 py-4 '>
                {
                    data.map((d, index) => (
                        <div className="courseslist flex gap-7 flex-wrap justify-center pt-6 ">
                            <div className="c1   h-72 w-80  border-solid border-1 rounded-lg  justify-between shadow-[0_0.1px_13px_0.1px_#9da39e]">
                                <img className='rounded-lg h-40 w-80' src={d.image} alt="" />

                                <h1 className='font-medium text-2xl text-center pt-2 ' >{d.title}</h1>
                                <p className='text-xs text-center mt-2 '>{d.description}</p>

                                <div className='flex justify-evenly   mt-2 ' >
                                <Link to={`/${d.id}`}>
                                    <button
                                        class="  font-sans font-medium text-sm text-center bg-orange py-1.5 ml-2 px-2  mt-2  rounded-lg  border-2 border-orange text-black  flex items-center gap-2  "

                                        type="button">

                                        Brochure
                                        <img className='h-5 w-5' src='./Images/download.png' alt="" />
                                    </button>
                                    </Link>
                                    <Link to={`/${d.id}`}>
                                    <button
                                        class="  font-sans font-medium text-center uppercase  text-xs py-1.5 ml-2 px-2  mt-2  rounded-lg  bg-white border-2 border-orange text-black  flex items-center gap-2  "
                                        type="button">

                                        Explore Now
                                        <img className='h-5 w-5' src='./Images/right-arrow.png' alt="" />

                                    </button>
                                    </Link>
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
        id: 'digitalmarketing',
        title: 'Digital Marketing',
        description: 'Thrive in digital brand growth',
        image: './Images/digitall.png'
    },
    {

        id: 'dataanalytics',
        title: 'Data Analytics',
        description: 'Analyze data for actionable insights',
        image: './Images/Data.webp'
    },
    {
        id: 'python',
        title: 'Python',
        description: 'Build full-stack web applications',
        image: './Images/python.jpg'
    },
    {
        id: 'businessanalyst',
        title: 'Business Analyst',
        description: 'Protect systems from digital threats',
        image: './Images/cybersecurity.jpg'
    },
    {
        id: 'iot',
        title: 'Internet of Things',
        description: 'Connect and manage smart devices',
        image: './Images/IoT.png'
    },
    {
        id: 'embedded',
        title: 'Embedded Systems',
        description: 'Design and develop embedded technologies',
        image: './Images/embebded.jpg'
    }
]

export default Courses