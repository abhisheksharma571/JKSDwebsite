import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import download from '../../assets/images/download.png';
import analyst from '../../assets/images/Data.webp';
import cartificate from '../../assets/images/certificate.jpeg'
import telephone from '../../assets/images/telephone.png'
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import '@fortawesome/fontawesome-free/css/all.min.css';




const DataAnalytics = () => {
    const dataAnalystBrochureUrl = './brochures/DataAnalyst.pdf';
    const [openWeek, setOpenWeek] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleWeek = (index) => {
        setOpenWeek(openWeek === index ? null : index);
    };
    const openModal = () => setIsModalOpen(true);  // Open modal function
    const closeModal = () => setIsModalOpen(false);  // Close modal function

    const weeks = [
        {
            week: "Week 1 : Introduction to Python",
            details: [
                "Why Python",
                " Application Areas of Python",
                 "Python Implementations",
                "1. Cpython",
                "2. Jython",
                "3. IronPython",
                "4. PyPy",
               " Python Versions",
                " Installing Python",
                 "Python Interpreter Architecture",
                "1. Python Byte Code Compiler",
               "2. Python Virtual Machine(PVM)"
            ]
        },
        {
            week: "Week 2: Writing and Executing First Python Program",
            details: [
                "Using Interactive Mode",
               " Using Script Mode",
                "1. General Text Editor and Command Window",
               " 2. IDLE Editor and IDLE Shell",
               "Understanding print() function",
                " How to compile python program explicitly?"
            ]
        },
        {
            week: "Week 3: Python Language Fundamentals",
            details: [
                "Character Set",
                " Keywords",
               "  Comments",
                " Variables",
               "  Literals",
               "  Operators",
               "  Reading input from console",
               "  Type conversion"
            ]
        },
        {
            week: "Week 4 : Python Conditional Statements",
            details: [
                " If Statement",
                 "If else Statement",
                 "If elif Statement If elif else Statement",
                 "Nested If Statement",
                "Looping Statements",
                " While Loop",
                " For Loop",
                " Nested Loops",
                " Pass, Break and Continue keywords"
            ]
        },
        {
            week: "Week 5 : Standard Data Types",
            details: [
                "int , float , complex",
                " bool , NoneType",
                " str , list , tuple",
                " dict , set , frozenset",
            ]
        },
        {
            week: "Week 6 : String Handling",
            details: [
                "What is string",
                 "String representations",
                 "Unicode String",
                " String Functions, Methods",
                " String Repetition and concatenation",
               " String Indexing and Slicing",
                "String Formatting"
            ]
        },
        {
            week: "Week 7: Python List",
            details: [
                 "Creating and Accessing Lists",
                 "Indexing and Slicing Lists",
                " List Methods",
                 "Nested Lists",
                " List Comprehension"
                
            ]
        },
        {
            week: "Week 8: Python Tuple",
            details: [
                 "Creating Tuple",
                 "Accessing Tuple",
                " Immutability of tuple"
                                
            ]
        },
        {
            week: "Week 9: Python Set",
            details: [
                "How to create a set",
                " Iteration Over Sets",
                 "Python Set Methods",
                 "Python Frozenset"
                
            ]
        },
        
        {
            week: "Week 10:Python Dictionary",
            details: [
                "Creating a Dictionary",
                 "Dictionary Methods",
                 "Accessing values from Dictionary",
                " Updating dictionary",
                " Iterating dictionary",
                " Dictionary Comprehension"
            ]
        },
        {
            week: "Week 9: Python Functions",
            details: [
                "Defining a Function",
                 "Calling a Function",
                " Types of Functions",
                " Function v/s Method",
                 "Function Arguments",
                "1. Positional arguments , Keyword arguments ,",
                "2. Default arguments , Non default arguments",
               " 3. Arbitrary arguments ,Keyword Arbitrary arguments",
                "Function Return Statement",
                " Nested Function",
                " Function as argument",
                " Function as return statement",
                " Decorator function",
                " Closure",
                " map(),filter() ,reduce(),any() functions",
                 "Anonymous or lambda Function"

            ]
        },
        {
            week: "Week 10: Modules & Packages",
            details: [
                "Why Modules",
                 "Script v/s Module",
                " Importing Module",
                " Standard & Third Party Modules",
                " Why Packages",
                "Understanding pip utility"
                
            ]
        },
        {
            week: "Week 11: File I/O",
            details: [
                "Introduction to File Handling",
                 "File modes",
                "Functions and methods related to File Handling",
                 "Understanding with block"
            ]
        },
        {
            week: "Week 12: Object Oriented Programming",
            details: [
                "Procedural v/s Object Oriented Programming",
                 "OOP Principles",
                " Defining a Class & Object Creation",
                " Inheritance",
                " Encapsulation",
                " Polymorphism",
                " Abstraction",
                " Garbage Collection",
                " Iterator & Generator",
                                
            ]
        },
        {
            week: "Week 13: Exception Handling",
            details: [
                "Difference Between Syntax Errors and Exceptions",
                " Keywords used in Exception Handling",
                "1. try , except , finally , raise , assert",
                " Types of Except Blocks",
                 "User-defined Exceptions",
                               
            ]
        },
        {
            week: "Week 14:GUI Programming",
            details: [
               " Introduction to Tkinter Programming",
                 "Tkinter Widgets",
               " 1. Tk , Label , Entry , TextBox , Buttons",
                "2. Frame , messagebox , filedialogetc",
                " Layout Managers",
                 "Event handling",
                " Displaying image"
            ]
        },
        {
            week: "Week 15:Multi-Threading Programming",
            details: [
                "Multi-processing v/s multi-threading",
                 "Need of threads",
                 "Creating child threads",
                "Functions /methods related to threads",
                " Thread synchronization and locking",
                               
            ]
        },
        {
            week: "Week 16:Regular Expressions (Regex)",
            details: [
                "Need of regular Expressions",
                " re module",
                "Functions /Methods related to regex",
                 "Meta Characters & Special Sequences"
                               
            ]
        },
        {
            week: "Week 17:SQL",
            details: [
                "Introduction to Database",
                "Database Concepts",
                 "What is Database Package?",
                 "Understanding Data Storage",
                 "Relational Database (RDBMS) Concept"
                               
            ]
        },
        {
            week: "Week 18: SQL (Structured Query Language)",
            details: [
                "SQL Basics",
                " DML, DDL & DQL",
                 "DDL: Create, Alter,Drop",
                 "SQL Constraints:-",
                  "  1. NOT NULL, UNIQUE",
                   " 2. PRIMARY & FOREIGN KEY, COMPOSITE KEY",
                   " 3. CHECK, DEFAULT",
                  "  DML: Insert, Update, Delete and Merge",
                   " DQL : Select",
                  "   SELECT DISTINCT",
                    " SQL WHERE",
                    " SQL Operators",
                 "  SQL LIKE",
                  "   SQL ORDER BY",
                  "   SQL Aliases",
                   " SQL Views ",
                   "  SQL JOINS",
                   " 1. INNER JOIN",
                   " 2. LEFT (OUTER) JOIN",
                   " 3. RIGHT (OUTER) JOIN",
                    "4. FULL (OUTER) JOIN",
                  " MySQL Functions",
                    " String Functions",
                  " 1. CHAR_LENGTH",
                   " 2. CONCAT",
                    "3. LOWER",
                   "4. REVERSE",
                  "  5. UPPER",
                  " Numeric Functions",
                   " 1. MAX, MIN, SUM",
                    "2. AVG, COUNT, ABS",
                  "   Date Functions",
                   " 1. CURDATE",
                   " 2. CURTIME",
                  "  3. NOW",
                                           
            ]
        },
        
        {
            week: "Week 19 : Introduction to Statistics",
            details: [
                "Sample or Population",
                "Measures of Central Tendency",
               "1. Arithmetic Mean", 
                "2. Harmonic Mean" ,
               " 3. Geometric Mean",
                "4. Mode",
                "5. Quartile",
                " First quartile",
                "Second quartile (Median)",
                "Third quartile",
                "1. Standard Deviation"
            ]
        },
        {
            week: "Week 20 : Data Distributions",
            details: [
               " Normal Distribution",
                " Uniform Distribution",
                " Right & Le Skewed Distribution"
            ]
        },
        {
            week: "Week 21 : Hypothesis Testing",
            details: [
                "Normality Test",
                " Central Limit Theorem ",
                " Mean Test",
                " 1. T-test",
                " 2. Z-test",
                " 3. ANOVA test",
                " Chi Square Test",
                " Correlation and Covariance"
            ]
        },
        {
            week: "Week 22 : Numpy Package",
            details: [
                "Difference between list and numpy array",
                "Vector and Matrix operations",
                 "Array indexing and slicing"
            ]
        },
        {
            week: "Week  23: Pandas Package",
            details: [
               " Introduction to pandas",
                "Labeled and structured data",
                " Series and Data Frame Objects",
                " How to load datasets",
                "1. From excel",
                "2. From csv",
               " 3. From html table"
            ]
        },
        {
            week: "Week  24 :Accessing data from Data Frame",
            details: [
                "at & iat",
                " loc & iloc",
                 "head() & tail()"
            ]
        },
        {
            week: "Week 25:Exploratory Data Analysis (EDA)",
            details: [
                "Describe()",
                "Groupby()",
                " Crosstab()",
                " boolean slicing / query()"
            ]
        },
        {
            week: "Week 26: Data Manipulation & Cleaning",
            details: [
                "Map(),apply()",
                " Combining data frames",
                " Adding/removing rows & columns",
               "  Sorting data",
               "  Handling missing",
                " values Handling",
                " duplicacy Handling",
                " Data Error"
            ]
        },
        {
            week: "Week 26:Categorical Data Encoding",
            details: [
                "Label Encoding",
                "One Hot Encoding",
                 "Handling Date and Time"
            ]
        },
        
        {
            "week": "Week 27: Introduction to Power BI",
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
            "week": "Week 28: Data Visualization ",
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
            "week": "Week 29: Power BI Service, Publishing & Sharing",
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
            "week": "Week 30: Data Transformation - Shaping & Combining Data",
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
            "week": "Week 31: Data Modeling & DAX",
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
            "week": "Week 32: Tableau",
            "details": [
                "Tableau Introduction",
                " Comparing Tableau with Power bi",
                " Dimension & Measure",
                " Tableau Charts",
                " Tableau Filters",
                " Tableau Dashboards",
                " Tableau Story",
                " Calculated Fields",
                 "Publishing Report to Server"

            ]
        },
        {
            "week": "Week 33: Advanced Excel Course -Overview of the  Basics of Excel",
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
            "week": "Week 34: Advanced Excel Course - Data Validation",
            "details": [
                "Specifying a valid range of values for a cell",
                 "Specifying a list of valid values for a cell",
                "Specifying custom validations based on formula for a cell"

            ]
        },
        {
            "week": "Week 35: Advanced Excel Course- Working with Templates",
            "details": [
               "Designing the structure of a template" ,
                "Using templates for standardization of worksheets"
            ]
        },
        {
            "week": "Week 36: Advanced Excel  Course - Sorting and filtering Data",
            "details": [
                "Sorting tables",
                 "Using multiple-level sorting",
                " Using custom sorting",
                "Filtering data for selected view (AutoFilter)",
                 "Using advanced filter options"
            ]
        },
        {
            "week": "Week 37: Advanced Excel Course - Working with Reports",
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
            "week": "Week 38: Advanced Excel Course - More Functions",
            "details": [
                "Date and time functions",
                 "Text functions",
                 "Database functions",
                "Power Functions (CountIf, CountIFS, SumIF, SumIfS)",
                 "Advanced Excel Course – Formatting",
                 "Using auto formatting option for worksheets",
               "Using conditional formatting option for rows, columns and cells" 
            ]
        },
        {
            "week": "Week 39: Advanced Excel Course – Formatting",
            "details": [
                "Using auto formatting option for worksheets",
               " Using conditional formatting option for rows, columns and cells"
            ]
        },
        {
            "week": "Week 40: Advanced Excel Course – Macros",
            "details": [
                " Relative & Absolute Macros",
                " Editing Macro's "
            ]
        },
        {
            "week": "Week 41: Advanced Excel Course – What If Analysis",
            "details": [
               " Goal Seek",
                " Data Tables",
                 "Scenario Manager",
                 "Using Bar and Line Chart together",
                 "Using Secondary Axis in Graphs",
                 "Sharing Charts with PowerPoint / MS Word, Dynamically",
                 "(Data Modified in Excel, Chart would automatically get updated)"
            ]
        }
    ];

    return (
        <div className=''>

             {/* digital section start here  */}

             <div className='h-auto lg:h-96 bg-[#0A528E] w-full flex flex-col-reverse lg:flex-row'>
    <div className="text-white w-full lg:w-[55%] mx-4 lg:mx-6 pt-4 lg:pt-6 pl-4 lg:pl-8">
        <h1 className='text-3xl lg:text-4xl font-bold'>Data Analyst</h1>
        <p className='pt-2 text-sm lg:text-base mr-10'>
        Becoming a data analyst is a strategic career choice in today’s data-driven world. The demand for data professionals continues to surge as businesses increasingly rely on data to inform decision-making and drive growth. Our Data Analyst certification program equips you with the essential skills needed to analyze complex datasets, generate actionable insights, and contribute to data-driven strategies. This course is meticulously designed to provide a blend of theoretical knowledge and hands-on experience with industry-standard tools and technologies. Guided by experienced professionals, you’ll master data visualization, statistical analysis, and data management, preparing you for a successful career in this dynamic field.
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
    </button></Link>
    <Link to ='/enrollnow' >
    <button className="font-sans font-bold text-center bg-white text-xs sm:text-sm lg:text-lg py-[10px] px-3 lg:px-12 mt-2 ml-2 rounded-lg text-black flex items-center gap-2" type="button">
        Enroll Now
        {/* <img className='h-4 sm:h-5 w-4 sm:w-5' src={share} alt="" /> */}
    </button>
    </Link>
</div>

    </div>

    <div className="p-4 lg:p-8 flex justify-center items-center lg:items-start">
        <img className='rounded-lg h-[180px] sm:h-[240px] lg:h-[280px]' src={analyst} alt="" />
    </div>
</div>
 {/* digital section close here  */}


{/* Digital Marketing: Thrive and Grow section start here  */}

<div className=''>
    <div className='h-auto w-[90%] lg:w-[80%] mx-auto lg:mx-32'>
        <h1 className='text-center text-2xl lg:text-3xl font-bold pt-4'>Data Analytics: Mastering Data-Driven Decisions</h1>

        <div className='flex flex-col lg:flex-row justify-center pt-5 m-3'>
            {/* Table of Contents */}
            <div className='lg:w-1/2 '>
                <h1 className='text-xl lg:text-2xl font-bold text-center'>Table of Contents</h1>
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
                    Basic understanding of statistics and mathematics
                    Proficiency in Excel and basic programming skills
                    Access to a computer with internet
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h1 className='font-medium text-xl lg:text-2xl pt-4'>What Skills/Competencies Do You Develop?</h1>
                    <p className='pt-4'>At the completion of Data Analyst training with us, you would be fully knowledgeable about various Data Analyst disciplines that include:</p>
                    <ul className='list-disc pl-6 pt-2'>
                        <li>Data analysis techniques</li>
                        <li>Data visualization using tools like Tableau and Power BI</li>
                        <li>Statistical analysis and hypothesis testing</li>
                        <li>SQL and database management</li>
                        <li>Python for data analysis</li>
                        <li>Machine learning basics</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>


            {/* Digital Marketing: Thrive and Grow section close here  */}


 {/* cartificate section start here  */}

            <div className='cartificate flex flex-col sm:flex-col md:flex-row lg:flex-row mt-4 bg-white gap-4 justify-center items-center'>
    {/* Left Content Section */}
    <div className="text-black lg:h-[460px] pt-8 w-[100%] md:w-[60%] lg:w-[60%] overflow-hidden">
        
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
    </div>

    {/* Right Image Section */}
    <div className="img w-[60%] md:w-[40%] lg:w-[25%] pb-5 mb-5 lg:p-5 flex justify-center shadow-xl">
        <img className='h-auto w-full' src={cartificate} alt="Certificate" />
    </div>
</div>
{/* Modal for Form */}
<Modal isOpen={isModalOpen} closeModal={closeModal}>
                <Form pdfUrl={dataAnalystBrochureUrl}/>
            </Modal>
        </div>
    
    );
};

export default DataAnalytics;
