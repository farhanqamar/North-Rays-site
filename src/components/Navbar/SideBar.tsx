import Link from 'next/link';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { MdArrowForwardIos } from "react-icons/md";


interface SideBarProp {
    closeState: React.MouseEventHandler<HTMLSpanElement>;
}

const SideBar = ({ closeState }: SideBarProp) => {

    const [homeChild, setHomeCHild] = useState(false);


    return (
        <>
            <div className='bg-white z-30 h-screen'>
                <div className='flex justify-between mb-5 lg:hidden py-2 px-4'>
                    <div className="text-orange-400 text-2xl font-bold">
                        <Link href="/">North Rays</Link>
                    </div>
                    <span className="text-black text-2xl cursor-pointer relative top-2" onClick={closeState}> <RxCross1 />
                    </span>
                </div>
                <hr/>
                {
                    !homeChild && (
                        <>
                            <ul className={`w-full py-2 px-4`}>
                                <li className="font-medium text-xl mb-4 md:mb-0 group transition-transform duration-500 ease-out flex justify-between border-b" onClick={() => setHomeCHild(!homeChild)}>
                                    <span>Home</span>
                                    <span className='relatve top-2'> <MdArrowForwardIos /> </span>
                                </li>
                                <Link href={`/academy`}><li className="relative mb-4 md:mb-0 group flex justify-between font-medium text-xl border-b">
                                    <span>Acadmy</span>
                                    <span className='relatve top-2'> <MdArrowForwardIos /> </span>
                                </li>
                                </Link>
                                <li className="relative mb-4 md:mb-0 group font-medium text-xl border-b">
                                    Blog
                                </li>
                                <li className="relative mb-4 md:mb-0 group font-medium text-xl border-b">
                                    Reviews
                                </li>
                                <li className="relative mb-4 md:mb-0 group font-medium text-xl border-b">
                                    Contact
                                </li>
                                <li className="relative mb-4 md:mb-0 group font-medium text-xl border-b">
                                    Services
                                </li>
                                <li className="mb-4 md:mb-0 block md:hidden">
                                    <button className="bg-[#FA8500] text-white hover:text-[#023047] py-2 px-4 rounded-md">Lets Talk</button>
                                </li>
                            </ul>
                        </>
                    )
                }

                {
                    homeChild && (
                        <ul className={`w-full py-2 px-4`}>
                            <li className=" mb-4 md:mb-0 group font-medium text-xl border-b flex gap-1" onClick={() => setHomeCHild(!homeChild)}>
                                <span className='relative top-1' > <MdArrowForwardIos /> </span>
                                <span >Acadmy</span>
                            </li>
                            <li className="relative mb-4 md:mb-0 group font-normal text-xl border-b">
                                Blog
                            </li>
                            <li className="relative mb-4 md:mb-0 group font-normal text-xl border-b">
                                Reviews
                            </li>
                            <li className="mb-4 md:mb-0 block md:hidden">
                                <button className="bg-[#FA8500] text-white hover:text-[#023047] py-2 px-4 rounded-md">Lets Talk</button>
                            </li>
                        </ul>
                    )
                }
            </div>
        </>
    )
}

export default SideBar