import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import AllInternship from "../Internship/AllInternship";

function TrainingP() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          autoplay: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#42246E] w-full h-auto text-white px-5 py-10 font-black">
        <h1 className="text-3xl font-philosopher text-center md:text-4xl lg:text-5xl mb-10">
          Training Program
        </h1>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {data.map((d, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#62438F] shadow-lg p-6 sm:w-[250px] md:w-[300px] lg:w-[350px] mx-auto">
                  <img
                    src={d.image}
                    alt="Program"
                    className="w-full h-auto mb-4"
                  />
                  <h1 className="text-xl md:text-2xl font-normal text-orange">
                    {d.Heading}
                  </h1>
                  <p className="pt-2 text-white font-light">{d.Discription}</p>
                  <div className="flex justify-center lg:justify-end pt-4">
                  <Link to={`/${d.id}`}>
                      <button className="bg-orange hover:bg-[#d97706] mt-3 h-10 w-36 text-center font-light text-sm lg:text-lg">
                        Explore More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    Heading: "Internship",
    Discription:
      "Kickstart your career with JKSD Infotech Pvt. Ltd. Discover our internship programs designed to give you real-world experience. Click below for more details.",
    image: "./Images/Internship.jpg",
    id: 'AllInternship',
  },
  {
    Heading: "Short Term Courses",
    Discription:
      "Unlock more opportunities with JKSD Infotech Pvt. Ltd. Click below to explore all our detailed courses and take the next step in your learning journey!",
    image: "./Images/ShortTerm.jpg",
    id: 'Courses',
  },
  {
    Heading: "Job Oriented Courses",
    Discription:
      "Get career-ready with JKSD Infotech Pvt. Ltd. Explore our job-oriented courses and fast-track your path to success. Click below for full course details.",
    image: "./Images/LongTerm.jpg",
    id: 'Courses',
  },
];

export default TrainingP;