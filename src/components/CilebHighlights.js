import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slides = [
    {
        imageUrl: "/image/celebrities/1689335261-2.jpg",
        name: 'Ashneer Grover'
    },
    {
        imageUrl: "/image/celebrities/1696931894-5.jpg",
        name: 'Sanjay Mishra'
    },
    {
        imageUrl: "/image/celebrities/1682057215-10.jpg",
        name: 'Panther'
    },
    {
        imageUrl: "/image/celebrities/1719548341-Hosted-9.webp",
        name: 'Ms. Jaya Kishori'
    },
];

const CilebHighlights = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="relative w-full max-w-[1450px] mx-auto py-14 max-xl:py-12 max-lg:py-10 max-md:py-8 max-sm:py-6">
            {isMobile ? (
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="lg:hidden"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`relative group bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
                                onClick={() => handleClick(index)}
                            >
                                <div
                                    className={`absolute bottom-0 left-0 w-full text-white m-6 transition-opacity duration-300 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                                >
                                    <h2 className="text-3xl text-white relative z-10 max-md:text-2xl max-sm:text-xl">{slide.name}</h2>
                                </div>
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.name}
                                    className="w-full h-[500px] object-cover rounded-3xl border border-transparent group-hover:border-gray-400 transition-all duration-500"
                                />
                                <div className="absolute inset-0 rounded-3xl border border-gray-400 opacity-0 group-hover:opacity-100 group-hover:animate-border"></div>
                                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent bg-blend-multiply bg-opacity-80' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex space-x-2">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`relative group ${index === activeIndex ? "min-w-[76%]" : "min-w-[8%]"} bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
                            onClick={() => handleClick(index)}
                        >
                            <div
                                className={`absolute bottom-0 left-0 w-full text-white m-6 transition-opacity duration-300 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
                            >
                                <h2 className="text-3xl text-white relative z-10 max-md:text-2xl max-sm:text-xl">{slide.name}</h2>
                            </div>
                            <img
                                src={slide.imageUrl}
                                alt={slide.name}
                                className="w-full h-[500px] object-cover rounded-3xl border border-transparent group-hover:border-gray-400 transition-all duration-500"
                            />
                            <div className="absolute inset-0 rounded-3xl border border-gray-400 opacity-0 group-hover:opacity-100 group-hover:animate-border"></div>
                            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent bg-blend-multiply bg-opacity-80' />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CilebHighlights;
