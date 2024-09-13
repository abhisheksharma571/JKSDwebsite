import React, { useState } from 'react';
import cybersecurity from '../../assets/images/cybersecurity.jpg';
import download from '../../assets/images/download.png';
import cartificate from '../../assets/images/Certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const BusinessAnalyst = () => {
    const bussinessanalystBrochureUrl = './brochures/BussinessAnalyst.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };
    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            "week": "Week 1: SQL",
            "details": [
                "Introduction to Database",
                "Database Concepts",
                "What is Database Package?",
                "Understanding Data Storage",
                "Relational Database (RDBMS) Concept"
            ]
        },
        {
            "week": "Week 2: SQL (Structured Query Language)",
            "details": [
                "SQL Basics",
                "DML, DDL & DQL",
                "DDL: Create, Alter, Drop",
                "SQL Constraints",
                "1.NOT NULL, UNIQUE",
                "2.PRIMARY & FOREIGN KEY, COMPOSITE KEY",
                "3.CHECK, DEFAULT",
                "DML: Insert, Update, Delete, Merge",
                "DQL: Select",
                "SELECT DISTINCT",
                "SQL WHERE",
                "SQL Operators",
                "SQL Like",
                "SQL ORDER BY",
                "SQL Aliases",
                "SQL Views",
                "SQL JOINS",
                "1.INNER JOIN",
                "2.LEFT (OUTER) JOIN",
                "3.RIGHT (OUTER) JOIN",
                "4.FULL (OUTER) JOIN",
                "MySQL functions",
                "String Functions",
                "1.CHAR_LENGTH",
                "2. CONCAT",
                "3. LOWER",
                "4.REVERSE",
                "5.UPPER",
                "Numeric Functions",
                "1.MAX, MIN, SUM",
                "2.AVG, COUNT, ABS",
                "Date Functions",
                "1.CURDATE", 
                "2.CURTIME",
                "3.NOW"
            ]
        },
        
       
      
        
        {
            "week": "Week 3: Introduction to Power BI",
            "details": [
                "Introduction to Business Intelligence (BI)",
                "Various BI tools",
                "Introduction to Power BI",
                "Why Power BI",
                "Power BI Components",
                "Introduction to Power BI Desktop",
                "Installation of Power BI Desktop"
            ]
        },
        {
            "week": "Week 4: Data Visualization ",
            "details": [
                     "Understanding Power View and Power Map",
                    " Data visualization techniques",
                    "Page layout & Formatting",
                    " Power BI Desktop visualization",
                     "Formatting and customizing visuals,",
                    "Column chart, Pie chart, Donut chart,",
                    "Scatter chart, Funnel chart ,",
                    "Include & exclude,",
                    " Geographical data visualization using Maps",
                    " Drill down,",
                    " Drill through,",
                     "Page navigations,",
                     "Bookmarks,",
                    "Selection pane to show/hide visuals,",
                    "Comparing volume and value-based analytics," ,
                    "Combinations charts (dual axis charts)," ,
                     "Filter pane,",
                    " Slicers,",
                    "Use of Hierarchies in drill down analysis,",
                    " Sync slicers,",
                    " Tooltips & custom tooltips,",
                    "Tables & matrix,",
                    " Conditional formatting on visuals,",

            ]
        },
        {
            "week": "Week 5: Power BI Service, Publishing & Sharing",
            "details": [
                "Introduction to Power BI ",
                "Service Introduction of workspace ",
                "Dashboard ",
                "Creating & Configuring Dashboards",
                "Dashboard theme",
                "Reports vs Dashboards",
                "Sharing reports & dashboards"
            ]
        },
        {
            "week": "Week 6: Data Transformation - Shaping & Combining Data",
            "details": [
                "Shaping data using Power Query Editor",
                "Formatting data",
                "Transformation of data",
                "Understanding of Data types",
                "Naming conventions & best practice to consider",
                "Working with Paramters",
                "Merge Query",
                "Append Query",
                "Group by data(aggregation of data)",
                "Duplicate & Reference tables",
                "Fill",
                "Pivot & Un-pivot of data",
                "Custom columns",
                "Conditional columns", 
                "Replace data from the tables",
                "Split columns values",
               "Move columns & sorting of data", 
                "Detect data type, count rows & reverse rows" ,
                 "Promote rows as column headers",
                "Hierarchiesin Power BI"
            ]
        },
        {
            "week": "Week 7: Data Modeling & DAX",
            "details": [
                "Introduction of relationships",
                "Creating relationships",
                "Cardinality",
                "Crossfilter direction",
                "Use of inactive relationships",
                "Introduction of DAX",
                 "Why DAX is used",
                "DAX syntax",
                " DAX functions",
                " Context in DAX",
                "Calculated columns using DAX",
                " Measures using DAX",
                " Calculated tables using DAX",
               " Learning about table, information, logical, text, iterator",
                "Time intelligence functions (YTD, QTD, MTD)",
                " Cumulative values, calculated tables, and ranking and rank over groups",
                "Date and me functions"

            ]
        },
        {
            "week": "Week 8: Advanced Excel -Overview of the  Basics of Excel",
            "details": [
                "Customizing common options in Excel",
                 "Absolute and relative cells",
                "Protecting and un-protecting worksheets and cells",
                 "Working with Functions",
                 "Using logical functions (AND, OR, NOT)",
                 "Using lookup and reference functions (VLOOKUP, HLOOKUP, MATCH, INDEX)",
                 "VlookUP with Exact Match, Approximate Match",
                "Nested VlookUP with Exact Match", 
                "VlookUP with Tables, Dynamic Ranges" ,
               "Nested VlookUP with Exact Match", 
                "Using VLookUP to consolidate Data from Multiple Sheets" 
            ]
        },
        {
            "week": "Week 9: Advanced Excel Course - Data Validation",
            "details": [
                "Specifying a valid range of values for a cell",
                 "Specifying a list of valid values for a cell",
                "Specifying custom validations based on formula for a cell"

            ]
        },
        {
            "week": "Week 10: Advanced Excel Course- Working with Templates",
            "details": [
               "Designing the structure of a template" ,
                "Using templates for standardization of worksheets"
            ]
        },
        {
            "week": "Week 11: Advanced Excel  Course - Sorting and filtering Data",
            "details": [
                "Sorting tables",
                 "Using multiple-level sorting",
                " Using custom sorting",
                "Filtering data for selected view (AutoFilter)",
                 "Using advanced filter options"
            ]
        },
        {
            "week": "Week 12: Advanced Excel Course - Working with Reports",
            "details": [
                 "Creating subtotals",
                 "Multiple-level subtotals",
                 "Creating Pivot tables",
                 "Formatting and customizing Pivot tables",
                 "Using advanced options of Pivot tables",
                 "Pivot charts",
                 "Consolidating data from multiple sheets and files using Pivot tables",
                " Using external data sources",
                "Using data consolidation feature to consolidate data" ,
                 "Show Value As(% of Row, % of Column, Running Total, Compare with Specific Field)",
                "Viewing Subtotal under Pivot", 
                " Creating Slicers (Version 2010 & Above)"
            ]
        },
        {
            "week": "Week 13: Advanced Excel Course - More Functions",
            "details": [
                "Date and time functions",
                 "Text functions",
                 "Database functions",
                "Power Functions (CountIf, CountIFS, SumIF, SumIfS)",
                 "Advanced Excel Course – Formatting",
                 "Using auto formatting option for worksheets",
               "Using conditional formatting option for rows, columns and cells" 
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-indigo-950 w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Bussiness Analyst</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
        A Business Analyst at our institute equips students with the essential skills to drive organizational success. Through comprehensive training, students learn to analyze business processes, gather and document requirements, and offer data-driven solutions. They gain expertise in communication, stakeholder management, and project management methodologies. Our program emphasizes practical problem-solving and data analysis, preparing students to transform complex business challenges into strategic opportunities. Join us to become a key player in shaping business strategies and enhancing operational efficiency in today’s dynamic business environment.
            {/* Truncated for brevity */}
        </p>

        <div className='flex flex-wrap justify-start lg:justify-evenly mt-4 mb-5'>
    <button 
        onClick={openModal}
        className="font-sans font-bold text-center bg-orange text-xs sm:text-sm lg:text-lg py-1.5 px-2 sm:px-4 lg:px-6 mt-2 rounded-lg border-2 border-orange text-black flex items-center gap-2" type="button">
        Download Brochure
        <img className='h-4 sm:h-5 w-4 sm:w-5' src={download} alt="" />
    </button>
    <Link to='/contact'>
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-2 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Contact Now
        <img className='h-5 sm:h-6 w-5 sm:w-6' src={telephone} alt="" />
    </button>
    </Link>
    <Link to ='/enrollnow' >
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-2 px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Enroll Now
        {/* <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" /> */}
    </button>
    </Link>
</div>

    </div>

    <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={cybersecurity} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Cyber Security: Defend and Secure</h1>

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
                    <pre className='font-sans text-lg font-semibold'>Level:                   Beginner</pre>
                    <pre className='font-sans text-lg font-semibold'>Total Duration :   3/6 months</pre>
                    <pre className='font-sans text-lg font-semibold'>Certificate:           Certificate of Completion</pre>
                </div>
                
                {/* Requirements */}
                <div>
                    <h1 className='text-xl lg:text-2xl pt-4 font-medium'>Requirements</h1>
                    <p className='pt-3'>
                    Basic knowledge of Analytical Skills,Data Analysis,SQL and Data Visualization
                    Familiarity with Understanding of Business Processes.
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of Business Analyst training with us, you would be fully knowledgeable about various Business Analyst disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>Understanding of Project Management Basics</li>
                        <li>Analytical Thinking</li>
                        <li>Requirements Gathering and Documentation</li>
                        <li>Data Analysis and Interpretation</li>
                        <li>Problem-Solving</li>
                        <li>Stakeholder Management</li>
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
                <Form pdfUrl={bussinessanalystBrochureUrl}/>
            </Modal>
        </div>
    
    );
};

export default BusinessAnalyst;
