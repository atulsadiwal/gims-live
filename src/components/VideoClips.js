import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const videos = [
    { id: 'mPnsuSYSkPc' },
    { id: 'R3spn6b0GQk' },
    { id: '3ciUNVaJHSc' },
    { id: 'kMMWujcG8rA' },
    { id: 'k0ZTyDDKAE8' },
];

const VideoClips = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const [viewport, setViewport] = useState({ isMobile: false, isTablet: false, isDesktop: false });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            setViewport({
                isMobile: width <= 640,
                isTablet: width > 640 && width <= 800,
                isDesktop: width <= 1024,
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="max-w-[1400px] mx-auto px-2 py-8">
            <div className="text-center">
                <h3 className="text-4xl font-FONT2 max-md:text-3xl max-sm:text-2xl">Video Clips</h3>
            </div>
            {viewport.isMobile ? (
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    className="lg:hidden"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => setActiveVideo(index)}
                            >
                                {activeVideo === index ? (
                                    <iframe
                                        className="w-full h-64 md:h-80"
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt="Video thumbnail"
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : viewport.isTablet ? (
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    className="lg:hidden"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => setActiveVideo(index)}
                            >
                                {activeVideo === index ? (
                                    <iframe
                                        className="w-full h-64 md:h-80"
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt="Video thumbnail"
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : viewport.isDesktop ? (
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    className="hidden lg:block"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => setActiveVideo(index)}
                            >
                                {activeVideo === index ? (
                                    <iframe
                                        className="w-full h-64 md:h-80"
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={`Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt="Video thumbnail"
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                // Default grid layout showing all 5 videos (large screens)
                <div className="grid grid-cols-5 gap-4 py-4">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="w-full rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => setActiveVideo(index)}
                        >
                            {activeVideo === index ? (
                                <iframe
                                    className="w-full h-64 md:h-80"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt="Video thumbnail"
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default VideoClips;
