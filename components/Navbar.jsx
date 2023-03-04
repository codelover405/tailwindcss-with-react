import React from 'react'
import { close, logo, menu } from "../src/assets";
import { navLinks } from "../src/constants";

const Navbar = () => {
    console.log(navLinks, "lll");
    return (
        <>
            <nav className='w-full flex py-6 justify-between items-center navbar text-white'>
                <img src={logo} alt='..' className='w-[124] h-[32px]' />
                <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                    {
                        navLinks.map((nav, index) => {
                            console.log("oooo", nav);
                            return (
                                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                                    <a href={`#${nav.id}`} >
                                        {nav.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    {/* <img src='' */}
                </div>

            </nav >
        </>
    )
}

export default Navbar