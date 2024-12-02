import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const bulletPoints = [
    "AICTE Approved, 2 Year Full time PGDM Course",
    "Accredited to HLACT UK",
    "Legacy of 21 years in professional education",
    "18500+ Group Alumni Base",
    "Faculty with diverse experience",
    "International Immersion Programme(IIP) for all",
    "100+ Certifications by Coursera on contemporary industry relevant topics",
    "Corporate mentorship for each student",
    "Industry oriented curriculum",
];

const Affiliated = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobileOrTablet(isSmallScreen);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            {isMobileOrTablet ? (
                <section className="relative bg-BG5 bg-cover bg-center bg-no-repeat">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="max-w-[1400px] mx-auto px-4 w-full flex flex-col justify-center items-center py-6">
                        <h1 className="relative text-white text-4xl font-FONT2 text-center mb-6 z-10">Glimpses</h1>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 2 },
                            }}
                            loop
                            className="w-full"
                        >
                            {bulletPoints.map((point, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-black bg-opacity-60 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-md transition-shadow h-[300px] w-full">
                                        <h2 className="text-center text-white font-novaSemi mt-4 flex items-center justify-center">
                                            <img
                                                src="/image/left-white.png"
                                                alt="leaf left"
                                                className="w-8 h-20"
                                            />
                                            <span className="z-10">{point}</span>
                                            <img
                                                src="/image/right-white.png"
                                                alt="leaf right"
                                                className="w-8 h-20"
                                            />
                                        </h2>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            ) : (
                <section className="relative bg-BG5 bg-cover bg-center bg-no-repeat">
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                    <div className="max-w-[1400px] mx-auto px-2 w-full flex flex-col justify-center items-center py-6">
                        <h1 className="relative text-white text-4xl font-FONT2 text-center mb-6 z-10">Glimpses</h1>
                        <div className="relative z-10 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-12 gap-x-8 px-6">
                            {bulletPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="bg-black bg-opacity-60 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h2 className="max-w-52 text-center text-white font-novaSemi mt-4 flex items-center justify-center">
                                        <img
                                            src="/image/left-white.png"
                                            alt="leaf left"
                                            className="w-8 h-20"
                                        />
                                        <span className="z-10">{point}</span>
                                        <img
                                            src="/image/right-white.png"
                                            alt="leaf right"
                                            className="w-8 h-20"
                                        />
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Affiliated;
