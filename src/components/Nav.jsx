import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import { menu, close } from 'ionicons/icons';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (

        <header className="bg-white py-3">
            <nav className="flex justify-between items-center  w-[94%] h-12 mx-auto">
                <div>
                    <img
                        className="w-24 h-10 cursor-pointer"
                        src="https://jksd.in/wp-content/themes/impulsebyte/assets/img/logo.png"
                        alt="Logo"
                    />
                </div>
                <div
                    className={`nav-links duration-500 md:static absolute bg-white-900 md:min-h-fit min-h-[50vh] left-0 ${menuOpen ? 'top-[12%]' : 'top-[-100%]'
                        } md:w-auto w-1/2 flex items-center px-5 `}
                >
                    <ul className="flex md:flex-row flex-col text-[20px]   md:items-center md:gap-[4vw] gap-4">
                        <li  >
                            <a className="group " href="#">
                                Home
                                <div className="bg-orange h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                            </a>
                        </li>
                        <li>
                            <a className="group " href="#">
                                Services
                                <div className="bg-orange h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                            </a>
                        </li>

                        <li>
                            <a className="  group " href="#">
                                Courses
                                <div className="bg-orange h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                            </a>
                        </li>
                        <li>
                            <a className="group" href="#">
                                Blog
                                <div className="bg-orange h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                            </a>
                        </li>
                        <li>
                            <a className="group" href="#">
                                About Us
                                <div className="bg-orange h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                            </a>
                        </li>
                        <li>
                            <a className="group" href="#">
                                Contact
                                <div className="bg-orange  h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>

                            </a>
                        </li>
                    </ul>
                </div>
                {/* <div> */}
                    {/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                        Sign in
                    </button> */}
                    <IonIcon
                        icon={menuOpen ? close : menu}
                        onClick={onToggleMenu}
                        className="text-3xl cursor-pointer md:hidden"
                    />
                {/* </div> */}
            </nav>
        </header>
    );
}

export default Nav;
