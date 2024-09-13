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
import { Link } from 'react-router-dom'

const Foot = () => {
    return (
        <footer className="bg-white pt-4">
            <div className="flex flex-col md:flex-row justify-around w-full px-4 md:px-0">
                {/* Logo and Contact Information */}
                <div className="logo w-full md:w-[30%] mb-8 md:mb-0">
                    <img className="h-14 pt-4 w-auto mx-auto md:mx-0" src={image1} alt="" />
                    <div className="pt-2 pb-4 text-center md:text-left">
                        <h1 className="flex items-center justify-center md:justify-start">
                            <img className="h-6 mr-2" src={supp} alt="" />
                            <a href="tel:+919625040231">+91 96250 40231</a>
                        </h1>
                        <h1 className="flex items-center justify-center md:justify-start gap-2 pt-2">
                            <img className="h-6" src={email} alt="" />
                            <a href="mailto:info@jksd.in?subject=Subject%20Here&body=Body%20Here">info@jksd.in</a>
                        </h1>
                        <h1 className="flex items-center justify-center md:justify-start gap-1 pt-2">
                            <img className="h-7" src={add} alt="" />
                            <a href="https://www.google.com/maps/place/JKSD+Infotech+Pvt.+Ltd./@28.626222,77.3767477,17z/data=!4m14!1m7!3m6!1s0x390ce5d4a8d2c129:0xc7e167387b2afd44!2sJKSD+Infotech+Pvt.+Ltd.!8m2!3d28.626222!4d77.3767477!16s%2Fg%2F11y3n542j8!3m5!1s0x390ce5d4a8d2c129:0xc7e167387b2afd44!8m2!3d28.626222!4d77.3767477!16s%2Fg%2F11y3n542j8?entry=ttu&g_ep=EgoyMDI0MDgyMy4wIKXMDSoASAFQAw%3D%3D">Office No. 103, First Floor H-61, Sector 63, Noida, UP, 201301</a>
                        </h1>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <img className="h-16 w-auto" src={msme} alt="" />
                        <img className="h-14 pl-7" src={iso} alt="" />
                    </div>
                </div>

                {/* Company Information */}
                <div className="w-full md:w-[30%] mb-8 md:mb-0">
                    <h1 className="text-center font-medium">Company</h1>
                    <div className="bg-orange mt-2 mb-2 h-[3px] w-full"></div>
                    <div className="flex flex-wrap justify-around md:justify-between">
                        <div>
                            <li><Link to="about">About Us</Link></li>
                            <li><Link to="contact">Contact Us</Link></li>
                            <li><Link to="faq">FAQ</Link></li>
                        </div>
                        <div>
                            <li><a href="#">Job Assistance</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <h1 className="font-medium">Join Us</h1>
                        <div className="bg-orange mt-2 mb-2 h-[3px] w-full"></div>
                        <div className="flex gap-5 justify-center pt-2">
                            <a href="https://www.youtube.com/@jksdinfotech01" target="_blank" rel="noopener noreferrer">
                                <img src={youtube} alt="YouTube" className="h-8 w-8 object-cover rounded-lg hover:opacity-80" />
                            </a>
                            <a href="https://www.linkedin.com/company/jksdinfotechpvtltd/" target="_blank" rel="noopener noreferrer">
                                <img src={linkdin} alt="LinkedIn" className="w-8 h-8 object-cover rounded-lg hover:opacity-80" />
                            </a>
                            <a href="https://www.instagram.com/jksdinfotech/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className="w-8 h-8 object-cover rounded-lg hover:opacity-80" />
                            </a>
                            <a href="https://www.facebook.com/jksdinfotech" target="_blank" rel="noopener noreferrer">
                                <img src={fb} alt="Facebook" className="w-8 h-8 object-cover rounded-lg hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Product Information */}
                <div className="w-full  mb-4 md:w-[20%]">
                    <h1 className="font-medium text-center  md:text-left">Product</h1>
                    <div className="bg-orange mt-2  mb-2 h-[3px]  md:w-full"></div>
                    <div className=" md:text-left ">
                        <li><a href="#">Website Development</a></li>
                        <li><a href="#">HR Consulting</a></li>
                        <li><a href="#">Innovative Lab Setups</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Summer Marketing</a></li>
                        <li><a href="#">Short Term Courses</a></li>
                        <li><a href="#">Job Oriented Courses</a></li>
                    </div>
                </div>
            </div>

            <div className="bg-orange h-[3px] w-full"></div>
            <div className="flex flex-col md:flex-row justify-between items-center pl-4 md:pl-12 mt-3 pb-3">
                <div className="flex items-center gap-2">
                    <img className="h-6" src={copy} alt="" />
                    <h1>Copyright 2024 JKSD</h1>
                </div>
                <div className="flex gap-5 md:gap-10 pr-4 md:pr-12 mt-2 md:mt-0">
                    <h1>Support Policy</h1>
                    <h1>Terms & Conditions</h1>
                    <h1>Privacy Policy</h1>
                </div>
            </div>
        </footer>
    )
}

export default Foot
