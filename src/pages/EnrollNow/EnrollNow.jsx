import React from 'react'



const Enroll = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const courses = document.getElementById("courses").value;
    const paymentid = document.getElementById("paymentid").value;


    // Add Web3forms access key
    formData.append("access_key", "859752b6-f538-4101-9d21-5eebd9ed7d0b");

    // Construct subject and body
    const subject = "Contact Form Enquiry";
    const body =
      "Name: " + name +
      "<br>Email: " + email +
      "<br>Phone no: " + phone +
      "<br>Courses: " + courses;
    "<br>Payment Id: " + paymentid;
    formData.append("subject", subject);



    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          <div className="text-orange font-bold text-lg text-center pt-2">
            <img src="./Images/digitall.png" alt="" />
            Details Sent Successfully
          </div>
        );
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("There was an error submitting the form");
    }
  };

  return (
    <body className="antialiased pt-5 bg-gray-100">
    
    <div className='flex   gap-1  justify-center '>
    <div className=" flex gap-12  pt-4 pb-5 w-[60%] rounded-xl bg-[#0A528E]">
    <div className='bg-[#0A528E]  ' >
     <form onSubmit={onSubmit} className='  h-[490px] w-[100%] ml-2 space-x-6 space-y-4  '  >
        <h1 className='text-3xl font-bold text-center  text-white ' >Online Registration Form </h1>
        <label for="courses">  </label>
        <select className='text-center rounded-md  h-10 w-72 border-2 ' name="courses" id="courses">
          <option value="" disabled selected>Select a course</option>
          <option value="cyber-security">Cyber Security</option>
          <option value="data-analytics">Data Analytics</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="embedded-system">Embedded System</option>
          <option value="graphics-designing">Graphics Designing</option>
          <option value="iot">Internet of Things (IoT)</option>
          <option value="java-full-stack">Java Full Stack</option>
          <option value="python">Python</option>
          <option value="robotics">Robotics</option>
        </select> <br />
        <label for="duration">  </label>
        <select className='text-center rounded-md  h-10 w-72 border-2 ' name="duration" id="duration">
          <option value="" disabled selected>Select Duration</option>
          <option value="cyber-security1.0">6 Weeks</option>
          <option value="cyber-security">3 Months</option>
          <option value="data-analytics">6 Months</option>
        </select> <br />

        <label For="name"></label>
        <input className='text-center rounded-md  h-10 w-72 border-2 ' type="text" placeholder='Full Name' name="name" id="name" required /> <br />
        <label For="email"></label>
        <input className='text-center rounded-md  h-10 w-72 border-2 ' type="email" placeholder='Enter Email here' name="email" id="email" required /> <br />
        <label For="phone"></label>
        <input className='text-center rounded-md  h-10 w-72 border-2 ' type="phone" placeholder='Enter Phone No here ' name="phone" id="phone" required /> <br />

        <label for="courses"></label>
        <select className='text-center rounded-md  h-10 w-72 border-2 ' name="courses" id="courses">
          <option value="" disabled selected>Select Gender</option>
          <option value="cyber-security">Male</option>
          <option value="data-analytics">Female</option>
          <option value="data-analytics">Other</option>
        </select> <br />
        <label for="paymentid"> </label>
        <input className='text-center rounded-md  h-10 w-72 border-2 ' placeholder='Transaction Id here ' type="text" name="paymentid" id="paymentid" required /> <br />
        <label for="paymentid"> </label>
        <input className='text-center rounded-md  h-10 w-72 border-2 ' placeholder='Amount ' type="text" name="amount" id="amount" required /> <br />
        <label for="enrollnow"> </label>
 <button 
 type="submit"
 className="inline-block self-center h-10 w-44 bg-orange text-black font-medium   rounded-2xl  focus:outline-none">
          Enroll Now
        </button>
       

      </form>
     </div>
        <div className=' bg-[#0A528E]'  >
          <h1 className='text-3xl font-bold text-center text-white' >UPI Payment </h1>
          <div className='justify-center flex pt-3 ' >
            <img className='h-[380px] w-[300px] rounded-xl' src='./Images/qr code.png' alt="" />
          </div>
         <div className='text-md text-center   text-white w-[105%]' >
         <h1 className='text-2xl font-bold pt-4 text-center  text-white' >Banking Details</h1>
          <h1 >Account Name :- JKSD Infotech Private  Limited </h1>
          <h1>Acoount Number :- 259833276255 </h1>
          <h1>IFSC Code :- INDB0000162 </h1>
          <h1>Bank Name :- The IndusInd Bank </h1>
         </div>
        </div>


      <p>{result}</p> 
    </div>
    </div></body>
   

  )
}

export default Enroll