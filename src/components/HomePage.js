import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { easeIn } from 'framer-motion';
import PopupForm from './PopupForm';

const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useGSAP(() => {
    gsap.from(".heading", {
      x: -1000,
      duration: 0.7,
      ease: easeIn
    })

    gsap.from(".navbar", {
      y: -100,
      duration: 0.7,
      ease: easeIn,
    })

    gsap.from(".bottom-section", {
      y: 120,
      duration: 0.7,
      ease: easeIn,
    })
  })

  return (
    <section className='relative h-screen w-full'>
      <div className='absolute inset-0 bg-black bg-blend-multiply bg-opacity-70'></div>
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src="/video/GIMS_Video.mp4" type="video/mp4" />
      </video>
      <div className='absolute z-10 inset-0'>
        <div className='flex flex-col justify-between h-full'>
          <div className="navbar">
            <Navbar />
          </div>
          <div className='max-w-[1400px] mx-auto w-full'>
            <div className='heading'>
              <p className='uppercase pl-1 font-novaReg text-gray-300 mb-1 tracking-widest'>Best Institute in this town</p>
              <h1 className="max-w-4xl font-novaReg leading-[60px] max-sm:text-3xl tracking-tight text-white max-xl:text-5xl text-6xl max-lg:text-center max-md:pt-20 max-[350px]:text-2xl">
                GNIOT Institute Of <br />
                <span className="relative whitespace-nowrap ">
                  <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/90" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                  <span className="relative font-novaBold text-white uppercase">Management Studies</span>
                </span>
              </h1>
              <p className='mt-8 max-w-3xl font-novaReg text-gray-200 text-xl'>GNIOT Institute of Management Studies (GIMS) is a leading business school in Greater Noida, Uttar Pradesh, offering industry-focused management programs.</p>
              <div className='h-1'>
                <button onClick={openPopup} className='py-3 px-10 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-yellow-500 text-white w-max hover:border hover:border-gray-300  hover:bg-transparent hover:border-b-4 hover:transform transition duration-200 ease-linear scale-y-105 tracking-widest'>Apply Now</button>
                <PopupForm isOpen={isOpen} closePopup={closePopup} />
              </div>
            </div>
          </div>
          <div className='bg-indigo-900 w-full bg-opacity-90'>
            <div className='bottom-section max-w-7xl mx-auto grid grid-cols-4 py-14'>
              <div className='text-white text-center'>
                <span className='text-4xl font-FONT2'>17000+</span>
                <p className='font-FONT1'>Proud Alumni</p>
              </div>
              <div className='text-white text-center'>
                <span className='text-4xl font-FONT2'>93%</span>
                <p className='font-FONT1'>Placements</p>
              </div>
              <div className='text-white text-center'>
                <span className='text-4xl font-FONT2'>5000+</span>
                <p className='font-FONT1'>Students</p>
              </div>
              <div className='text-white text-center'>
                <span className='text-4xl font-FONT2'>400+</span>
                <p className='font-FONT1'>Faculties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage