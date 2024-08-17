import React from 'react'
import image1 from '../assets/images/logo.webp'
import foot1 from '../assets/images/footer.png'
import supp from '../assets/images/support.png'
import email from '../assets/images/email.png'
import add from '../assets/images/gps.png'
import msme from '../assets/images/msme1.png'
import iso from '../assets/images/iso.png'
import copy from '../assets/images/copyright.png'
import youtube from '../assets/images/youtube.png'
import insta from '../assets/images/instagram.png'
import linkdin from '../assets/images/linkedin.png'
import fb from '../assets/images/facebook.png'
const Foot = () => {
    return (

        <footer className='bg-white pt-4'>

            <div className='flex justify-around w-auto'>
                <div className="logo  w-[30%] ">
                    <img className='h-14 pt-4 w-auto pl-6 ' src={image1} alt="" />
                    <div className='pt-2 pb-4 '>
                        <h1 className='flex'> <img className='h-6' src={supp} alt="" /> <a href="Phone No">+91 96250 40231</a></h1>
                        <h1 className='flex gap-2 pt-2' > <img className='h-6' src={email} alt="" /> <a href="Email">info@jksd.in</a></h1>
                        <h1 className=' flex pt-2  gap-1' > <img className='h-7 ' src={add} alt="" /> <a className='' href="">Office No. 103. First Floor H-61, Sector 63, Noida, UP, 201301</a></h1>
                    </div>
                    <div className="flex">
                        <img className='h-16 w-auto' src={msme} alt="" />
                        <img className='h-14 pl-7 ' src={iso} alt="" />
                    </div>

                </div>
                <div className='  w-[30%]  '>
                    <h1 className='text-center font-medium' >Company</h1>
                    <div className='bg-orange mt-2 mb-2 h-[3px] w-full' ></div>
                    <div className='flex  flex-wrap justify-between'>
                        <div>

                            <li><a href="#">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">FAQ</a></li>
                        </div>
                        <div>

                            <li><a href="">Job Assistance</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Term and Conditions</a></li>
                        </div>
                        <div className='text-center w-[80%] ml-6  items-center' >
                            <h1 className='text-center pt-4 font-medium ' >Join Us</h1>
                            <div className='bg-orange mt-2 mb-2 h-[3px] w-full ' ></div>

                            <div className='flex gap-5 pt-2  justify-center '>

                                <a href="https://www.youtube.com/@jksdinfotech01" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={youtube}
                                        alt="YouTube"
                                        className="h-8 w-8 object-cover rounded-lg hover:opacity-80"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/company/jksdinfotechpvtltd/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={linkdin}
                                        alt="LinkedIn"
                                        className="w-8 h-8 object-cover rounded-lg hover:opacity-80"
                                    />
                                </a>
                                <a href="https://www.instagram.com/jksdinfotech/" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={insta}
                                        alt="Instagram"
                                        className="w-8 h-8 object-cover rounded-lg hover:opacity-80"
                                    />
                                </a>
                                <a href="https://www.facebook.com/jksdinfotech" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={fb}
                                        alt="facebook"
                                        className="w-8 h-8 object-cover rounded-lg hover:opacity-80"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' '>
                    <h1 className='font-medium' >Product</h1>
                    <div className="bg-orange mt-2 mb-2 h-[3px] w-full  "></div>

                    <div className='pb-4' >
                        <li><a href="">Website Develement</a></li>
                        <li><a href="">HR Consulting</a></li>
                        <li><a href="">Innovative Lab setups</a></li>
                        <li><a href="">Digital Marketing</a></li>
                        <li><a href="">Summer Marketing</a></li>

                        <li><a href="">Short Term Courses</a></li>
                        <li><a href="">Job Oriented courses</a></li>
                    </div>
                </div>
            </div>
            <div className='bg-orange h-[3px]  w-full'></div>
            <div className='flex justify-between pl-12 mt-3 pb-3 '>
                <div className='flex gap-2' >
                    <img className='h-6' src={copy} alt="" />
                    <h1>  Copyright 2024 JKSD </h1>

                </div>
                <div className='flex gap-10  pr-12 '>
                    <h1>Support Policy</h1>
                    <h1>Term & Condistions</h1>
                    <h1>Privacy Policy</h1>
                </div>
            </div>
        </footer>
    )
}

export default Foot
