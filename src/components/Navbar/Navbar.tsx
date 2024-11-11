"use client";
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsArrowUpRight } from "react-icons/bs";
import NavbarDropdown from './HoverDropdown';
import SideBar from './SideBar';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="lg:flex justify-between items-center p-3 h-16 z-40 fixed w-full">
                {/* Background with opacity */}
                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

                {/* Navbar content wrapper */}
                <div className="relative z-10 lg:flex justify-between items-center h-16 lg:w-[1450px] mx-auto">
                    {/* Logo and Hamburger Menu */}
                    <div className="flex justify-between items-center">
                        <div className="text-white font-bold">
                            <Link href="/" className="text-xl lg:text-2xl">
                                North <span className="text-orange-400">Rays</span>
                            </Link>
                        </div>
                        <div className="text-white text-3xl lg:hidden cursor-pointer" onClick={toggleMenu}>
                            <RxHamburgerMenu />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul className="lg:flex flex-col md:flex-row md:space-x-6 lg:space-x-8 md:items-center hidden">
                            <li className="relative mb-4 md:mb-0 group w-fit transition-transform duration-500 ease-out">
                                <NavbarDropdown imgBoxHeading="Home" route="/" />
                            </li>
                            <li className="relative mb-4 md:mb-0 group w-fit">
                                <NavbarDropdown imgBoxHeading="Academy" route="/academy" />
                            </li>
                            <li className="relative mb-4 md:mb-0 group w-fit">
                                <NavbarDropdown imgBoxHeading="Blog" route="/blog" />
                            </li>
                            <li className="relative mb-4 md:mb-0 group w-fit">
                                <NavbarDropdown imgBoxHeading="Reviews" />
                            </li>
                            <li className="relative mb-4 md:mb-0 group w-fit">
                                <NavbarDropdown imgBoxHeading="Contact" route="/contact" />
                            </li>
                            <li className="relative mb-4 md:mb-0 group w-fit">
                                <NavbarDropdown imgBoxHeading="Services" route="/service" />
                            </li>
                            <li className="mb-4 md:mb-0 block md:hidden">
                                <button className="bg-[#FA8500] text-white hover:text-[#023047] py-2 px-4 rounded-md">
                                    Lets Talk
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Button at the end of the navbar */}
                    <div className="hidden lg:block">
                        <button className="bg-white text-black hover:bg-[#FA8500] hover:text-white py-2 px-4 rounded-md transition-colors duration-300 ease-in-out flex gap-4">
                            <span>Lets Talk</span>
                            <span className="relative top-1"><BsArrowUpRight /></span>
                        </button>
                    </div>
                </div>
            </nav>


            <div className={`w-full fixed lg:static left-0 top-0 lg:top-auto block lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-30`}>
                <SideBar
                    closeState={() => setIsOpen(!isOpen)}
                />
            </div>
            {/* <span className='relative bottom-1'> <hr /> </span> */}
        </>
    );
};

export default Navbar;