import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SelectedStudents() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-[1300px] mx-auto">
            <h1 className='text-2xl md:text-5xl font-bold text-orange text-center pt-10'>OUR SELECTED STUDENTS </h1>
            <div className="mt-5 md:mt-10 [767px]:mt-0 px-10">
                <Slider {...settings}>
                    {data.map((d, index) => (
                        <div
                            key={index}
                            className="bg-cardscolor h-[375px] text-black rounded-xl custom-shadow"
                        >
                            <div className="flex justify-center items-center h-56 rounded-t-xl">
                                <img src={d.image} alt={d.name} className="rounded-full h-32 w-32 sm:h-34 sm:w-34 md:h-38 md:w-38 lg:h-40 lg:w-40"/>
                            </div>
                            <div className="flex flex-col justify-center items-center p-1">
                                <p className="text-xl font-bold pb-2">{d.name}</p>
                                <p className="font-medium text-center">{d.Role}</p>
                                <p className="font-medium text-center">{d.comapany}</p>
                                <p className="font-medium text-center">{d.Location}</p>
                                <p className="font-medium text-center">{d.CTC}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'Abhishek Sharma',
        image: './students/student1.png',
        comapany: 'Company : Google',
        Role : 'Role : Full Stack Developer',
        Location: 'Location : Dubai, UAE',
        CTC: 'CTC : 32 LPA',
    },
    {
        name: 'Abhishek Kumar',
        image: './students/student1.png',
        comapany: 'Company : Amazon',
        Role : 'Role : Full Stack Developer',
        Location: 'Location : New York, USA',
        CTC: 'CTC : 28 LPA',
    },
    {
        name: 'Abhishek Singh',
        image: './students/student1.png',
        comapany: 'Company : Netflix',
        Role : 'Role : Full Stack Developer',
        Location: 'Location : London, UK',
        CTC: 'CTC : 34 LPA',
    },
    {
        name: 'Abhishek Shakya',
        image: './students/student1.png',
        comapany: 'Company : Google',
        Role : 'Role : Full Stack Developer',
        Location: 'Location : Dubai, UAE',
        CTC: 'CTC : 32 LPA',
    }
];

export default SelectedStudents;
