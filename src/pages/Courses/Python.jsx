import React, { useState } from 'react';
import python from '../../assets/images/python.jpg';
import download from '../../assets/images/download.png';
import share from '../../assets/images/share.png';
import certificate from '../../assets/images/Certificate.jpeg';
import telephone from '../../assets/images/telephone.png';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Python = () => {
    const pythonBrochureUrl = './brochures/Python.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };

    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            week: "Week 1: Introduction to Python",
            details: [
                "Why Python",
                "Application areas of python",
                "Python implementations",
               " 1. Cpython",
                " 2. Jython",
                " 3. Ironpython",
                " 4. Pypy",
               " Python versions",
               " Installing python",
                "Python interpreter architecture",
                "Python byte code compiler",
               "Python virtual machine(pvm)"
            ]
        },
        {
            week: "Week 2:Writing and executing first Python Program",
            details: [
                "Using interactive mode",
                "Using script mode",
                " General text editor and command window",
                " Idle editor and idle shell",
                " Understanding print() function",
                 "How to compile python program explicitly"
            ]
        },
        {
            week: "Week 3:Python Language Fundamentals",
            details: [
                "Character set",
                "Keywords",
                "Comments",
                "Variables",
                "Literals",
                "Operators",
                "Reading input from console",
                "Parsing string to int, float"
            ]
        },
        {
            week: "Week 4: Python Conditional Statements",
            details: [
                "If statement",
                "If else statement",
                "If elif statement",
                "If elif else statement",
                 "Nested if statement"
            ]
        },
        {
            week: "Week 5: Looping Statements",
            details: [
                "While loop",
                " For loop",
                 "Nested loops",
                 "Pass, break and continue keywords"
            ]
        },
        {
            week: "Week 6:  Standard Data Types",
            details: [
                "Int, float, complex, bool, nonetype",
                "Str, list, tuple, range",
                "Dict, set, frozenset"
                            ]
        },
        {
            week: "Week 7: String Handling",
            details: [
                 "What is string?",
                 "String representations",
                 "Unicode string",
                 "String functions, methods",
                 "String indexing and slicing"
            ]
        },
        {
            week: "Week 8:Python List",
            details: [
                "Creating and accessing lists",
                "Indexing and slicing lists",
                "List methods Nested lists",
                " List comprehension"
                
            ]
        },
        {
            week: "Week 9: Python Tuple",
            details: [
                 "Creating tuple",
                " Accessing tuple",
                "Immutability of tuple"
            ]
        },
        {
            week: "Week 10: Python Set",
            details: [
                "How to create a set",
                "Iteration over sets",
                "Python set methods",
                "Python frozenset"
            ]
        },
        {
            week: "Week 11: Python Dictionary",
            details: [
                "Creating a dictionary",
                 "Dictionary methods",
                 "Accessing values from dictionary",
                 "Updating dictionary",
                "Iterating dictionary",
                 "Dictionary comprehension"
            ]
        },
        {
            week: "Week 12:Python Functions",
            details: [
                "Defining a function",
               "Calling a function",
                "Types of functions",
               " Function arguments",
               " 1. Positional arguments, keyword arguments",
                "2. Default arguments, non-default arguments",
               " 3. Arbitrary arguments, keyword arbitrary arguments",
                " Function return statement",
                " Nested function",
               "Function as argument",
               "Function as return statement",
               "Decorator function Closure Map(), filter(), reduce(), any() functions",
               "Anonymous or lambda function"
         ]
        },
        {
            week: "Week 13: Modules & Packages",
            details: [
                "Why modules",
                "Script v/s module",
                "Importing module",
                "Standard v/s third party modules",
                "Why packages",
                "Understanding pip utility"
            ]
        },

         {
            week: "Week 14:File I/O",
            details: [
                " Introduction to file handling",
                " File modes",
                " Functions and methods related to file handling",
                " Understanding with block"
            ]
        },

        {
            week: "Week 15:Regular Expressions (Regex)",
            details: [
             "Need of regular expressions",
            " Re module",
             "Functions /methods related to regex",
            " Meta characters & special sequences"
                        ]
        },
        {
            week: "Week 16:Object Oriented Programming",
            details: [
                "Procedural v/s Object Oriented Programming",
                "OOP Principles",
                 "Defining a Class & Object Creation",
                " Inheritance",
                "Encapsulation",
                "Polymorphism",
                " Abstraction",
                " Garbage Collection",
               " Iterator & Generator"
                 ]
        },
        {
            week: "Week 17:Exception Handling",
            details: [
                "Difference between Syntax Errors and Exceptions",
                 "Keywords used in Exception Handling try, except, finally, raise, assert",
                 "Types of Except Blocks",
                 "User-defined Exceptions"
                 ]
        },

        {
            week: "Week 17:GUI Programming",
            details: [
                "Introduction to Tkinter Programming",
                "Tkinter Widgets",
                "Layout Managers",
                 "Event handling",
                 "Displaying image"
                 ]
        },
        {
            week: "Week 18:Multi-Threading Programming",
            details: [
                "Multi-processing v/s Multi-threading",
               "Need of threads",
                "Creating child threads ssss",
                "Functions /methods related to threads",
               "Thread synchronization and locking"
                 ]
        },
        {
            week: "Week 18:Introduction to RDBMS",
            details: [
                "What is Relational Database Package?",
                " Difference between SQL & Database",
                 "Installing MySQL Server database"
                 ]
        },
        {
            week: "Week 18:Python Database Connectivity",
            details: [
                "Database Drivers and connectors",
                "Creating connection object",
                "Understanding cursor object",
                 "Executing SQL statements using cursor",
                " Fetching records from cursor",
                " Storing and retrieving Date and Time"
                 ]
        }
    ];

    return (
        <div className=''>
            {/* Digital section start */}
            <div className='h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row'>
                <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
                    <h1 className='text-3xl lg:text-4xl font-bold'>Python Programming</h1>
                    <p className='pt-2 text-sm lg:text-base mr-10'>
                    Python is one of the most versatile and widely used programming languages today. This course will guide you through the fundamentals of Python, from basic syntax to advanced programming concepts, enabling you to build powerful applications. With hands-on projects and expert instruction, you’ll gain the skills necessary to excel in Python development.
                    </p>

                    <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
                        <button 
                            onClick={openModal} // Open modal on click
                            className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2"
                        >
                            Download Brochure
                            <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
                        </button>
                        <Link to='/contact'>
                        <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2">
                            Contact Now
                            <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
                        </button>
                        </Link>
                        <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2">
                            Share
                            <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" />
                        </button>
                    </div>
                </div>

                <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
                    <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={python} alt="Python" />
                </div>
            </div>
            {/* Digital section end */}

            {/* Table of Contents */}
            <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
                <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Python Programming: Master the Fundamentals</h1>
                <div className='flex flex-col lg:flex-row justify-center pt-5'>
                    <div className='lg:w-1/2 '>
                        <h1 className='text-xl lg:text-2xl font-medium'>Table of Contents</h1>
                        {weeks.map((item, index) => (
                            <div key={index} className="border-b border-orange">
                                <button
                                    className="w-full flex justify-between items-center py-4 text-lg font-semibold focus:outline-none"
                                    onClick={() => toggleWeek(index)}
                                >
                                    <span>{item.week}</span>
                                    <i className={`fas fa-chevron-down transform transition-transform duration-300 ${openWeek === index ? 'rotate-180' : ''}`}></i>
                                </button>
                                <ul
                                    className={`text-lg transition-all duration-500 overflow-hidden ${openWeek === index ? 'max-h-40 opacity-100 py-4 px-3' : 'max-h-0 opacity-0'}`}
                                >
                                    {item.details.map((detail, idx) => (
                                        <li key={idx} className="ml-4 list-disc">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Course Details */}
                    <div className='lg:ml-14 lg:pl-5 mt-6 lg:mt-0 lg:w-2/3'>
                        <h1 className='font-medium text-xl lg:text-2xl'>Course Details</h1>
                        <div className='text-[16px] lg:text-[20px] pt-3 font-medium'>
                            <pre>Level:             Beginner</pre>
                            <pre>Total Duration :   3/6 months</pre>
                            <pre>Certificate:      Certificate of Completion</pre>
                        </div>
                        
                        {/* Requirements */}
                        <div>
                            <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                            <p className='pt-3'>
                                No prior programming experience needed. Access to a computer with Python installed. Willingness to learn.
                            </p>
                        </div>

                        {/* Skills */}
                        <div>
                            <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                            <p className='pt-4'>At the completion of Python Programming training with us, you would be fully knowledgeable about various Python Programming disciplines that include:</p>
                            <ul className='list-disc pl-6 pt-2'>
                            <li>Python syntax and semantics</li>
                            <li>Data structures and algorithms</li>
                            <li>Object-oriented programming</li>
                            <li>Web development with Python frameworks</li>
                            <li>Adobe Photoshop, Illustrator, and InDesign</li>
                            <li>Database management with Python</li>
                            <li>Working with APIs and Automation</li>
                            <li>Testing and Debugging</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate section */}
            <div className='certificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-indigo-950 gap-4 justify-center items-center'>
                <div className="text-white lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
                    {/* First Decorative Circle */}
                <div className='relative'>
                    <div className='bg-red-300  h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 hidden lg:block  rounded-full absolute -top-16 md:-top-4 lg:-top-72'></div>
                </div>
                    <h1 className='text-orange ml-10 lg:ml-5 font-medium text-2xl lg:text-3xl pr-40 pt-0 lg:pt-16 '>
                        Validating Your Success: About Your Certificate
                    </h1>
                    <p className='pt-6 lg:pt-10 font-medium mr-6 ml-10 lg:ml-5'>
                        Once you complete the course videos, assignments, and quizzes, you will be able to generate the certificate.
                    </p>
                    <ul className='list-disc ml-10 lg:ml-5 pl-10 mr-6 pt-4 lg:pt-6'>
                        <li>After watching 60% of videos</li>
                        <li>After scoring 60% in quiz & assignment</li>
                        <li>After completing 1 medium-level project on Experience Portal</li>
                    </ul>
                    <div className='pt-6 '>
                        <h1 className='text-xl ml-10 lg:ml-5 lg:text-2xl font-medium'>
                            Certification From JKSD Infotech Pvt. Ltd.
                        </h1>
                    </div>
                    {/* Second Decorative Circle */}
                    <div className='relative '>
                        <div className='bg-green-300 hidden lg:block h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 rounded-full absolute bottom-0  right-0 mb-[-10px] md:mb-[-10px] lg:mb-[-340px]'></div>
                    </div>
                </div>

                <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 lg:p-5 flex justify-center">
                    <img className='h-auto w-full' src={certificate} alt="Certificate" />
                </div>
            </div>

            {/* Modal for Form */}
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <Form pdfUrl={pythonBrochureUrl}/>
            </Modal>
        </div>
    );
};

export default Python;
