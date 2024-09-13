import React, { useState } from 'react';
import iot from '../../assets/images/IoT.png';
import download from '../../assets/images/download.png';
import share from '../../assets/images/share.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Iot = () => {
    const [pdfUrl, setPdfUrl] = useState('');
    const iotBrochureUrl6Months = './brochures/IoT6months.pdf';
    const iotBrochureUrl3Months = './brochures/IoT3months.pdf';
    const iotBrochureUrlAdvanced = './brochures/IoTAdvanced.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };
    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            "week": "Week 1: Recap of Embedded C",
            "details": [
                "Datatypes",
                "Array",
                "Conditional statements",
                "Functions / Callback function",
                "Structures",
                "Pointers",
                "Storage classes"
            ]
        },
        {
            "week": "Week 2: Embedded System",
            "details": [
                "Basic concepts",
                "Sensors/Actuators",
                "Microcontroller units and architecture (Arduino)",
                "Interfaces (serial port, SPI, I2C, UART)",
                "ADC, timers, RTC, interrupts, polling, DMA",
                "Memory architecture and handling (stack, heap, cache)",
                "Application-driven selection of microcontrollers"
            ]
        },
        {
            "week": "Week 3: IoT Architecture",
            "details": [
                "Architecture and tech stack",
                "Hardware development platforms",
                "Software development platforms",
                "Communication protocols",
                "Power requirements in IoT",
                "Cloud, its components, and IoT",
                "Data streaming and IoT",
                "Data store and IoT",
                "Analytics & visualization in IoT",
                "IoT security"
            ]
        },
        {
            "week": "Week 4: NodeMCU (ESP8266)",
            "details": [
                "Install IDE software",
                "Introduction to NodeMCU (ESP8266)",
                "Pinout of NodeMCU",
                "Programming of NodeMCU",
                "Weather monitoring solution",
                "Automatic street lights"
            ]
        },
        {
            "week": "Week 5: Communication",
            "details": [
                "Introduction to communication architecture - network protocol stack",
                "Different protocols",
                "RF: ZigBee, Bluetooth, BLE, Z-Wave, Google Thread, Mesh network",
                "Communication channels: GSM/GPRS, 2G, 3G, 4G, LTE, WiFi, PLC",
                "LPWAN - LoRa & LoRaWAN, Sigfox, Weightless. 3GPP - NB-IoT, LTE-M",
                "Comparison between different RF technologies",
                "IPv4 addressing problem for IoT and introduction to IPv6"
            ]
        },
        {
            "week": "Week 6: ARM Microcontroller (STM32)",
            "details": [
                "Introduction to microcontrollers (based on architecture selected)",
                "Instruction set architecture - pipelines",
                "Registers banks/mode and states",
                "Clock and reset systems, timers and memory organization",
                "IDE configuration, linker script, compiler optimization options",
                "Exception/interrupt handling",
                "C and Embedded C migration",
                "Memory/IO and peripherals - (I2C/SPI/UART/GPIO/Timer/PWM/ADC)",
                "Debugging tools like JTAG debugger, CRO",
                "MMU",
                "CubeMX"
            ]
        },
        {
            "week": "Week 7: ARM Processor and ARM-Based Subsystem",
            "details": [
                "ARM processor architecture",
                "Memory/IO and peripherals - (I2C/SPI/UART/GPIO/Timer/PWM/ADC)",
                "Debugging tools like JTAG debugger, CRO",
                "MMU",
                "ARM-based embedded subsystem architecture",
                "Multicore architecture"
            ]
        },
        {
            "week": "Week 8: Python",
            "details": [
                "Data types and type conversion",
                "Variables and basic operations",
                "Flow control",
                "Loops",
                "Lists, set, and tuple",
                "Dictionary",
                "Functions",
                "File handling",
                "Class and objects",
                "Error/exception handling"
            ]
        },
        {
            "week": "Week 9: RPI",
            "details": [
                "Introduction to Raspberry Pi",
                "Setup and installation",
                "Raspberry Pi OS walkthrough",
                "Network setup",
                "Code execution and data generation",
                "Sending data to cloud"
            ]
        },
        {
            "week": "Week 10: Linux Internals",
            "details": [
                "Linux internals",
                "Linux introduction and installation",
                "Linux shell commands",
                "Shell scripting",
                "C programming in Linux",
                "Make files",
                "Process management",
                "File operations",
                "Signals in Linux",
                "Linux scheduler & memory management",
                "Linux multi-threading programming",
                "Inter-process communication (pipes, semaphores, queues, shared memory)",
                "Network programming in Linux"
            ]
        },
        {
            "week": "Week 11: Sockets",
            "details": [
                "Socket connection",
                "Socket attributes",
                "Creating a socket",
                "Socket addresses",
                "Naming a socket",
                "Creating a socket queue",
                "Accepting connections",
                "Requesting connections",
                "Closing a socket",
                "Socket communication processes and signals",
                "What is a process?",
                "Process structure",
                "The process table",
                "Viewing processes",
                "System processes"
            ]
        },
        {
            "week": "Week 12: Module-II: E-Linux Porting",
            "details": [
                "Introduction, setup & hardware",
                "Toolchain & hardware practicals",
                "Bootloader U-Boot",
                "U-Boot porting",
                "Customizing bootloader",
                "Linux kernel",
                "Kernel porting & compilation",
                "Kernel modification",
                "Root file system",
                "Embedded application development"
            ]
        },
        {
            "week": "Week 13: Module-III: Linux - Device Drivers",
            "details": [
                "Introduction and architecture of Linux device drivers",
                "Kernel module programming",
                "Character device drivers",
                "Interrupts in device drivers",
                "Interrupt handling & bottom half",
                "Process creation calls (fork, vfork, execv)",
                "LDDM (Linux device driver model)",
                "Writing and testing of board file",
                "Device tree",
                "Advanced device drivers",
                "Debugging techniques using GDB & Valgrind and other tools"
            ]
        },
        {
            "week": "Week 14: Inter-Process Communication",
            "details": [
                "Pipes",
                "Semaphores, message queues, and shared memory",
                "Shared memory",
                "Message queues"
            ]
        },
        {
            "week": "Week 15: Module-IV: Yocto",
            "details": [
                "Yocto architecture",
                "Recipes define everything in Yocto",
                "Layers make Yocto modular & structured",
                "Adding new hardware support using BSP layers",
                "Custom distribution & images",
                "Creating SDK using Yocto for application development"
            ]
        },
        {
            "week": "Week 16: IoT Protocols",
            "details": [
                "Yocto HTTP/REST, MQTT, COAP, AMQP, WebSockets, 6LoWPAN"
            ]
        },
        {
            "week": "Week 17: Node-RED",
            "details": [
                "Installation of Node.js",
                "Installation of Node-RED",
                "Building your first flows",
                "Basic nodes and flows",
                "A tour of the core nodes",
                "The Node-RED programming model",
                "Dashboards and UI techniques",
                "Local broker installation",
                "Connection between local broker and Node-RED"
            ]
        },
        {
            "week": "Week 18: Cloud Computing",
            "details": [
                "Cloud computing",
                "Benefits of cloud",
                "Deployment models",
                "AWS IoT Core/ SageMaker",
                "Green-grass",
                "Google IoT Cloud",
                "Thingspeak",
                "IBM Bluemix",
                "AWS",
                "Azure",
                "Google Firebase",
                "SQL and NoSQL databases",
                "Integration with MySQL",
                "MongoDB",
                "IoT cloud platform: device management"
            ]
        },
        {
            "week": "Week 19: IoT Security",
            "details": [
                "Introduction to mbed TLS and SSL",
                "Importance of IoT application",
                "AES encryption"
            ]
        },
        {
            "week": "Week 20: Edge AI",
            "details": [
                "Standards and best practices",
                "Types of analytics and machine learning",
                "Supervised/unsupervised learning",
                "Python for IoT analytics",
                "Computer vision for image data",
                "Anomaly detection",
                "Edge Impulse/TinyML"
            ]
        },
        {
            "week": "Week 21: Industry 4.0",
            "details": [
                "Introduction to Industry 4.0",
                "Road to Industry 4.0",
                "Role of data, information, knowledge, and collaboration in future organizations",
                "Related disciplines, systems, technologies for enabling Industry 4.0",
                "IoT deployment with legacy systems (PLC/SCADA/OPC-UA)"
            ]
        },
        {
            "week": "Week 22: Use Cases",
            "details": [
                "Automobile",
                "Electric vehicle"
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-indigo-950 w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Internet of Things (IoT)</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
        The Internet of Things (IoT) is revolutionizing industries by connecting everyday objects to the internet, creating smarter environments. This IoT course is designed to prepare you for a career in this rapidly growing field, where you’ll learn to design, develop, and deploy IoT solutions. Through this program, you’ll gain expertise in areas such as embedded systems, sensor networks, data analytics, and IoT security. With hands-on projects and expert guidance, you’ll be equipped to contribute to the development of innovative IoT applications that are transforming industries like healthcare, agriculture, and smart cities.
            {/* Truncated for brevity */}
        </p>

        <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5 gap-5'>
                        <button 
                            onClick={() => openModal(iotBrochureUrl6Months)} 
                            className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2">
                            6-Months Brochure
                            <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
                        </button>
                        <button 
                            onClick={() => openModal(iotBrochureUrl3Months)} 
                            className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2">
                            3-Months Brochure
                            <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
                        </button>
                        <button 
                            onClick={() => openModal(iotBrochureUrlAdvanced)} 
                            className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2">
                            6-Weeks Brochure
                            <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
                        </button>
                        <Link to='/contact'>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Contact Now
        <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
    </button>
    </Link>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Share
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" />
    </button>
</div>

    </div>

    <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={iot} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>IoT: Innovate and Connect</h1>

        <div className='flex flex-col lg:flex-row justify-center pt-5'>
            {/* Table of Contents */}
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
                    Basic programming skills
                    Understanding of microcontrollers and sensors
                    Access to IoT development kits
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of Internet of Things (IoT) training with us, you would be fully knowledgeable about various Internet of Things (IoT) disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>IoT architecture and protocols</li>
                        <li>Embedded systems and sensor integration</li>
                        <li>Data collection and analysis</li>
                        <li>IoT security considerations</li>
                        <li>Cloud platforms for IoT</li>
                        <li>Building and deploying IoT solutions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


            {/* Digital Marketing: Thrive and Grow section close here  */}


 {/* cartificate section start here  */}

            <div className='cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-indigo-950 gap-4 justify-center items-center'>
    {/* Left Content Section */}
    <div className="text-white lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
        {/* First Decorative Circle */}
        <div className='relative'>
            <div className='bg-red-300  h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 hidden lg:block  rounded-full absolute -top-16 md:-top-4 lg:-top-72'></div>
        </div>
        
        {/* Text Content */}
        <h1 className='text-orange ml-10 lg:ml-5 font-medium text-2xl lg:text-3xl pr-40 pt-0 lg:pt-16 '>
            Validating Your Success: About Your Certificate
        </h1>
        <p className='pt-6 lg:pt-10 font-medium mr-6  ml-10 lg:ml-5'>
            Once you complete the course videos, assignments, and quizzes, you will be able to generate the certificate.
        </p>
        <ul className='list-disc ml-10 lg:ml-5 pl-10 mr-6 pt-4 lg:pt-6'>
            <li>After watching 60% of videos</li>
            <li>After scoring 60% in quiz & assignment</li>
            <li>After completing 1 medium-level project on Experience Portal</li>
        </ul>
        
        {/* Certificate Information */}
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

    {/* Right Image Section */}
    <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 lg:p-5 flex justify-center">
        <img className='h-auto w-full' src={cartificate} alt="Certificate" />
    </div>
</div>
{/* Modal for Form */}
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <Form pdfUrl={pdfUrl}/>
            </Modal>

        </div>
    
    );
};

export default Iot;
