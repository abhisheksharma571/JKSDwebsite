import React, { useState, useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import { menu, close } from 'ionicons/icons';
import { NavLink, Link } from 'react-router-dom';
import ScrollProgress from './ScrollProgress';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`bg-white py-3 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'scrolled' : ''
            }`}
        >
            <ScrollProgress />
            <nav className="flex justify-between items-center w-[94%] h-12 mx-auto">
                <div>
                    <Link to="/">
                        <img
                            className="w-24 h-10 cursor-pointer"
                            src="https://jksd.in/wp-content/themes/impulsebyte/assets/img/logo.png"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div
                    className={`nav-links duration-1000 md:static absolute bg-white md:min-h-fit min-h-[42vh]  left-0 ${menuOpen ? 'top-[10.6%]' : 'top-[-100%]'
                        } md:w-auto w-1/4  md:bg-white sm:to-blue-500 z-10 flex items-center px-7  `}
                >
                    <ul className="flex lg:flex-row flex-col text-[20px] md:items-center md:gap-[4vw] gap-4">
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
                                        Contact Us
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

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-white backdrop-blur-lg z-40 transition-transform transform translate-y-0">
                    <div className="p-8 h-full">
                        <IonIcon
                            icon={close}
                            onClick={onToggleMenu}
                            className="text-3xl cursor-pointer absolute top-4 right-4"
                        />
                        <ul className="flex flex-col text-xl gap-4 mt-12">
                            {menuItems.map((item, index) => (
                                <li key={index} className="w-full">
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block text-center py-2 ${isActive ? "text-orange" : "text-black"}`
                                        }
                                        onClick={() => setMenuOpen(false)} // Close menu on selection
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
];

export default Nav;


