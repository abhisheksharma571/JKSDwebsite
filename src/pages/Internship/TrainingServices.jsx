import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TrainingServices() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full  md:h-[670px] bg-[#08528e] flex-col md:flex md:flex-col justify-center items-center p-3 md:p-6">
      <div>
        <h1 className="md:text-5xl text-[#FCFAF6] font-philosopher font-black text-3xl text-center">
          Our Training Services
        </h1>
      </div>

      {/* Card Layout for larger devices */}
      <div className=' hidden w-[60%] md:w-[70%] md:h-full md:columns-3 mt-10 items-center '>
        
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='md:w-full md:h-full rounded-xl' src="./Images/SoftwareTr.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Software Training</h1>
            <p className='pt-4'>Gain practical skills and in-depth knowledge with our hands-on Software Training, tailored to boost your proficiency!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 my-4 p-7'>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/4.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Weekend Workshop</h1>
            <p className='pt-5'>Level up your skills with our weekend workshops – dive deep, learn fast, and accelerate your growth!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/3.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Project Training</h1>
            <p className='pt-4'>Enhance your expertise with hands-on Project Training, designed to equip you with real-world skills for career success!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 my-4 p-7 '>
        <div className='h-12 w-12 rounded-xl ml-5'>
            <img className='w-full h-full rounded-xl' src="./Images/2.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Classroom Training</h1>
            <p className='pt-4'>Master new skills with focused Classroom Training, offering expert guidance and interactive learning experiences!</p>
        </div>
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/1.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>Weekend Workshop</h1>
            <p className='pt-4'>Fast-track your learning with immersive Weekend Workshops, designed to deepen your expertise in key areas!</p>
        </div> 
        <div className='h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 my-4 p-7 '>
        <div className='h-12 w-12 rounded-xl '>
            <img className='w-full h-full rounded-xl' src="./Images/5.png" alt="" />
            </div>
            <h1 className='text-2xl font-semibold pt-5'>On the Job Training </h1>
            <p className='pt-5'>Level up your skills with our weekend workshops – dive deep, learn fast, and accelerate your growth!</p>
        
        </div>
        
     </div>

      {/* Slider for mobile devices only */}
      <div className="md:hidden mt-3">
        <Slider {...settings}>
          <div className="h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7">
            <div className="h-12 w-12 rounded-xl">
              <img className="w-full h-full rounded-xl" src="./Images/SoftwareTr.png" alt="Software Training" />
            </div>
            <h1 className="text-2xl font-semibold pt-5">Software Training</h1>
            <p className="pt-4">
              Gain practical skills and in-depth knowledge with our hands-on Software Training, tailored to boost your proficiency!
            </p>
          </div>

          <div className="h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7">
            <div className="h-12 w-12 rounded-xl">
              <img className="w-full h-full rounded-xl" src="./Images/4.png" alt="Weekend Workshop" />
            </div>
            <h1 className="text-2xl font-semibold pt-5">Weekend Workshop</h1>
            <p className="pt-5">
              Level up your skills with our weekend workshops – dive deep, learn fast, and accelerate your growth!
            </p>
          </div>

          <div className="h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7">
            <div className="h-12 w-12 rounded-xl">
              <img className="w-full h-full rounded-xl" src="./Images/3.png" alt="Project Training" />
            </div>
            <h1 className="text-2xl font-semibold pt-5">Project Training</h1>
            <p className="pt-4">
              Enhance your expertise with hands-on Project Training, designed to equip you with real-world skills for career success!
            </p>
          </div>

          <div className="h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7">
            <div className="h-12 w-12 rounded-xl">
              <img className="w-full h-full rounded-xl" src="./Images/2.png" alt="Classroom Training" />
            </div>
            <h1 className="text-2xl font-semibold pt-5">Classroom Training</h1>
            <p className="pt-4">
              Master new skills with focused Classroom Training, offering expert guidance and interactive learning experiences!
            </p>
          </div>

          <div className="h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7">
            <div className="h-12 w-12 rounded-xl">
              <img className="w-full h-full rounded-xl" src="./Images/1.png" alt="On the Job Training" />
            </div>
            <h1 className="text-2xl font-semibold pt-5">On the Job Training</h1>
            <p className="pt-4">
              Gain real-world experience with our hands-on On the Job Training, designed to prepare you for workplace challenges!
            </p>
          </div>

          <div className="h-64 w-80 bg-[#ffffff] rounded-xl shadow-cyan-500/50 p-7">
            <div className="h-12 w-12 rounded-xl">
              <img className="w-full h-full rounded-xl" src="./Images/5.png" alt="Weekend Workshop" />
            </div>
            <h1 className="text-2xl font-semibold pt-5">Weekend Workshop</h1>
            <p className="pt-4">
              Fast-track your learning with immersive Weekend Workshops, designed to deepen your expertise in key areas!
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TrainingServices;
