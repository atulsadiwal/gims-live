'use client'

import React, { useState } from 'react'
import { Menu, X, Phone, MailCheck } from 'lucide-react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className='relative max-sm:bg-black/80 text-white'>
            <div className='pt-10 px-20 max-md:px-10 max-md:pt-6 max-sm:pt-4 max-sm:px-5'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0'>
                        <img src="/apply-now/image/gims-logo.png" alt="logo" className='max-md: max-sm:w-28'/>
                    </div>
                    <div className='hidden md:flex items-center space-x-4'>
                        <span className='flex items-center gap-2 font-FONT1 text-sm'>
                            <Phone className="w-4 h-4" />
                            1800-274-6969
                        </span>
                        <span className='flex items-center gap-2 font-FONT1 text-sm'>
                            <MailCheck className="w-4 h-4" />
                            admission@gniot.net.in
                        </span>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {/* Directly include contact information here */}
                        <span className='flex items-center gap-2 font-FONT1 text-sm'>
                            <Phone className="w-4 h-4" />
                            1800-274-6969
                        </span>
                        <span className='flex items-center gap-2 font-FONT1 text-sm'>
                            <MailCheck className="w-4 h-4" />
                            admission@gniot.net.in
                        </span>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
