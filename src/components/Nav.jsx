import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import '@ionic/react/css/core.css';
import { menu, close } from 'ionicons/icons';
import { NavLink, Link } from 'react-router-dom';
import ScrollProgress from './ScrollProgress';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-red-400 py-3 w-full z-50 transition-all duration-300 navbar">
            <ScrollProgress />
            <nav className="flex justify-between items-center w-[94%] h-12 mx-auto">
                <div>
                    <Link to="/">
                        <img
                            className="w-32 object-contain cursor-pointer"
                            src="./logo/jksd-logo.png"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex md:flex-row flex-col text-[20px] md:items-center md:gap-[4vw] gap-4">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `group ${isActive ? "active" : ""}`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.name}
                                            <div
                                                className={`bg-orange h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                            ></div>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
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
                <div className="navbar fixed top-0 left-0 w-full h-full bg-white backdrop-blur-lg z-40 transition-transform transform translate-y-0">
                    
                        <ul className="flex flex-col text-xl gap-4 mt-12 bg-red-200 p-1 backdrop-blur-lg bg-transparent h-full ">
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

