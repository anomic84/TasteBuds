import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal/LoginModal';

const Navbar = ({ currentPage, handlePageChange }) => {
    // toggles navbar mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);




    return (
        <div className="w-full py-3 lg:py-7 relative bg-navbg">
            {/* // MONITORS */}
            <div className="hidden md:flex flex-row justify-between items-center px-4">
                <div className=''>
                    <p className='text-4xl py-5 font-anrope text-navtext1'>TasteBuds</p>
                </div>
                <div className="flex items-center justify-end">
                    <p className='text-2xl py-5 font-manrope text-navtext1 pr-4'><a href='#home' onClick={() => handlePageChange('Home')}>Home</a></p>
                    <p className='text-2xl py-5 font-manrope text-navtext1 pr-4'><a href='#admin' onClick={() => handlePageChange('Admin')}>Profile</a></p>
                    <p className='text-2xl py-5 font-manrope text-navtext1 pr-4'><a href='#istings' onClick={() => handlePageChange('Listings')}>Listings</a></p>
                </div>
            </div>
            {/* MOBILE */}

            <div className="md:hidden flex flex-row justify-between items-center px-4 w-full">
                {toggleMenu
                    ? ''
                    : <h1 className="text-navtext1 text-lg">TasteBuds</h1>
                }
                {toggleMenu
                    ? ''
                    : <FaBars className="text-navtext1" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
                }
                {toggleMenu && (
                    <div className='flex flex-col w-full'>
                        <FaTimes className="text-navtext1  right-4" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
                        <div className="z-10 h-screen  flex justify-center items-center">
                            <div className="text-navtext  sm:text-xl text-center w-full flex flex-col justify-center">
                                <p className='text-2xl py-5 font-manrope text-navtext1'>
                                    <a
                                        href='#home'
                                        onClick={() => { handlePageChange('Home'); setToggleMenu((prev) => !prev) }}>
                                        Home
                                    </a>
                                </p>
                                <p className='text-2xl py-5 font-manrope text-navtext1'>
                                    <a
                                        href='#admin'
                                        onClick={() => { handlePageChange('Admin'); setToggleMenu((prev) => !prev) }}>
                                        Profile
                                    </a>
                                </p>
                                <p className='text-2xl py-5 font-manrope text-navtext1'>
                                    <a
                                        href='#listings'
                                        onClick={() => { handlePageChange('Listings'); setToggleMenu((prev) => !prev) }}>
                                        Listings
                                    </a>
                                </p>
                                <div className='mx-auto md:w-full'>
                                    <LoginModal />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Navbar