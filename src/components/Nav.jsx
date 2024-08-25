import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import { menu, close } from 'ionicons/icons';
import { NavLink } from 'react-router-dom';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white py-3">
            <nav className="flex justify-between items-center w-[94%] h-12 mx-auto">
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
                    <ul className="flex md:flex-row flex-col text-[20px] md:items-center md:gap-[4vw] gap-4">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        Home
                                        <div
                                            className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        Services
                                        <div
                                            className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        Courses
                                        <div
                                            className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        Blogs
                                        <div
                                            className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        About Us
                                        <div
                                            className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        Contact
                                        <div
                                            className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <IonIcon
                    icon={menuOpen ? close : menu}
                    onClick={onToggleMenu}
                    className="text-3xl cursor-pointer md:hidden"
                />
            </nav>
        </header>
    );
}

export default Nav;
