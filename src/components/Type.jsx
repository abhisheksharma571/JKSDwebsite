import React from 'react'
import contact from '../assets/images/customer.png'
import homeb from '../assets/images/homeb.jpg'
import homew from '../assets/images/homww.jpg'
import hero from '../assets/images/hero.webp'

import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Type = () => {
    const [typewriter] = useTypewriter({
        words: ['<Training/> ', '<Internship/>', '<IoT Labs/>', '<Marketing/>'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 70,

    })
    return (
        <div className=' h-auto ml-20 pt-4  flex  ' >
            <div className='ml-2 pt-32 font-bold w-[50%] text-4xl' >
                <h1 className='pb-2'>Get a Step Ahead</h1>
                with Our

                <span className=' text-orange ' > {typewriter}   </span>
                <br />
                <h1 className='pt-2' > Platform.</h1>
                <p className='text-sm font-medium pt-4   ' >Unlock your potential with JKSD’s high-quality courses. Whether starting a new career or enhancing skills, we offer immersive training in cloud computing, IoT, Python, and digital marketing to help you thrive in today’s competitive landscape.</p>
                <a href="http://www.youtube.com">
                <button
                    className="  h-10 mt-7  align-middle bg-orange  font-bold text-center uppercase     text-sm  px-5  rounded-3xl  text-black shadow-sm  hover:shadow-lg hover:bg-[#D97706]  relative flex items-center   pr-[50px]"
                    type="button">
                    Contact Us
                    <span className="absolute right-0 grid w-12 h-full transition-colors place-items-center bg-light-blue-600 group-hover:bg-light-blue-700">
                    
                        <img src={contact} alt="metamask" className="w-6 h-6 mr-2 " />
                      
                        
                    </span>
                </button>
                </a>
            </div>
            {/* home image right section start here  */}
            <div>
            <img className='h-[70%] ml-28 ' src={hero} alt="" />

            </div>
        </div>
    )
}

export default Type
