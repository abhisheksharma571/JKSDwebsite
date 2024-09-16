import React from 'react'
import contact from '../assets/images/customer-service.png'
import { Link } from 'react-router-dom'
import hero from '../assets/images/hero.jpg'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Type = () => {
    const [typewriter] = useTypewriter({
        words: ['<Training/> ', '<Internship/>', '<IoT Labs/>', '<Marketing/>'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 70,
    })

    return (
        <div className="w-full  h-auto md:h-[500px] flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col items-center  md:items-start justify-center text-center md:text-left pt-6  md:pt-12 h-auto md:h-[90%] font-bold w-[100%] md:w-[40%] text-3xl md:text-4xl">
                <div> <h1 className="pb-2">Get a Step Ahead</h1>
                    with Our
                    <span className="text-orange">{typewriter}<Cursor /></span>
                    <br />
                    <h1 className="pt-2">Platform.</h1></div>
                <p className="text-sm md:text-base font-medium pt-4 w-[80%] md:w-full">
                    Unlock your potential with JKSD’s high-quality courses. Whether starting a new career or enhancing skills, we offer immersive training in cloud computing, IoT, Python, and digital marketing to help you thrive in today’s competitive landscape.
                </p>
                <a href="">
                  <div  className=''>
                    <div className=''>
                        <Link to='/contact'>
                        <button
                            className="h-10  pr-10 mt-4 mb-4  md:mt-8 w-40 align-middle bg-orange font-bold text-center uppercase text-sm px-4 rounded-3xl text-black shadow-sm hover:shadow-lg hover:bg-[#D97706] relative flex items-center justify-center md:justify-start   md:pr-[50px]"
                            type="button">
                           <a href="link"> Contact Us</a>
                            <span className="absolute right-0 md:right-0 grid  h-full transition-colors place-items-center bg-light-blue-600 group-hover:bg-light-blue-700">
                                <img src={contact} alt="metamask" className="w-6 h-6 mr-4 " />
                            </span>
                        </button>
                        </Link>

                    </div>
                    </div>
                </a>
            </div>
            {/* Home image right section */}
            <div className="w-[90%]  md:w-auto h-auto md:h-[80%] flex justify-center md:ml-10 mt-0 md:mt-0">
                <img className="w-full md:w-auto h-full" src={hero} alt="Hero Image" />
            </div>
        </div>
    )
}

export default Type
