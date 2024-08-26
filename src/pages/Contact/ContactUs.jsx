import React from "react";

function ContactUs() {
  return (
    <div>
    <body className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div
          className="flex flex-col lg:flex-row justify-between lg:space-x-6 space-y-6 lg:space-y-0 bg-sky bg-black w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between lg:w-1/2">
            <div>
              <h1 className="pt-10 font-bold text-4xl tracking-wide">Get In Touch With Us</h1>
              <p className="pt-1 text-orange text-2xl">
              Book a free counseling session 
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="inline-flex space-x-2 items-center pt-2">
              <img src="./Icons/mobile (1).png" alt="" className="h-[38px]" />
                <span  className="text-lg mr-2">+91-9625040231</span>
              </div>
              <div className="inline-flex space-x-2 items-center pt-2">
              <img src="./Icons/email (1).png" alt="" />
                <p  className="text-lg" >jksd@gmail.com</p>
              </div>
              <div className="inline-flex space-x-2 items-center pt-2 tracking-wide">
                <img src="./Icons/gps.png" alt="" />
                <span className="text-lg"> 1st-floor H-61 Near Electronic City Metro Sta Rd, H Block  Sector-63 Noida Uttar Pradesh 201301</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -right-20 -top-20"></div>
            <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -left-20 -bottom-16"></div>
  
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for="" className="text-sm">Your Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"/>
                </div>
                <div>
                  <label for="" className="text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"/>
                </div>
                <div>
                  <label for="" className="text-sm">Phone Number</label>
                  <input
                    type="phone no."
                    placeholder="Phone Number"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"/>
                </div>
                <div>
                  <label for="" className="text-sm">How Can We Help You?</label>
                  <textarea
                    placeholder="Message...."
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"></textarea>
                </div>
                <button className="inline-block self-center bg-orange text-black font-bold rounded-2xl px-6 py-2 uppercase text-sm">Send Message </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </body>
  </div>
  
  
  );
}
export default ContactUs;