import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const videos = [
    { id: 'mPnsuSYSkPc' },
    { id: 'R3spn6b0GQk' },
    { id: '3ciUNVaJHSc' },
    { id: 'kMMWujcG8rA' },
    { id: 'k0ZTyDDKAE8' },
];

const VideoClips = () => {
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeVideo, setActiveVideo] = useState(null);
    const [isManual, setIsManual] = useState(false);

    const SLIDE_DURATION = 3000; // Auto-slide duration
    const TRANSITION_SPEED = 500; // Transition speed for sliding

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            const isSmallScreen = window.innerWidth <= 768; // Define tablet and mobile breakpoint
            setIsMobileOrTablet(isSmallScreen);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Auto-slide functionality for mobile/tablet
    useEffect(() => {
        if (!isMobileOrTablet || isManual) return; // Stop auto-slide for manual mode or non-mobile views

        const interval = setInterval(() => {
            slideTo((currentIndex + 1) % videos.length);
        }, SLIDE_DURATION);

        return () => clearInterval(interval);
    }, [currentIndex, isManual, isMobileOrTablet]);

    // Slide to a specific index
    const slideTo = (index) => {
        setActiveVideo(null); // Reset active video
        setCurrentIndex(index);
    };

    // Handle video click
    const handleVideoClick = (index) => {
        setIsManual(true); // Stop auto-sliding
        setActiveVideo(index); // Play the clicked video
    };

    // Swipe Handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            setIsManual(true);
            slideTo((currentIndex + 1) % videos.length);
        },
        onSwipedRight: () => {
            setIsManual(true);
            slideTo((currentIndex - 1 + videos.length) % videos.length);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // Full-screen layout
    const renderFullScreenView = () => (
        <section className='max-w-[1400px] mx-auto px-2 py-8'>
            <div className='text-center'>
                <h3 className='text-4xl font-FONT2'>Video Clips</h3>
            </div>
            <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 py-4">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="w-full md:w-1/4 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
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
        </section>
    );

    // Mobile/tablet layout (carousel)
    const renderCarouselView = () => (
        <section className="max-w-screen-xl mx-auto px-4 py-8 relative">
            <div className="text-center mb-6">
                <h3 className="text-3xl md:text-4xl font-FONT2">Video Clips</h3>
            </div>
            <div className="relative overflow-hidden" {...swipeHandlers}>
                <div
                    className="flex transition-transform"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: `transform ${TRANSITION_SPEED}ms ease-in-out`,
                    }}
                >
                    {videos.map((video, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-4">
                            {activeVideo === index ? (
                                <iframe
                                    className="w-full h-[200px] md:h-[350px] lg:h-[500px] rounded-lg"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                    title={`Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="w-full h-[200px] md:h-[350px] lg:h-[500px] overflow-hidden rounded-lg">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                        alt="Video thumbnail"
                                        className="w-full h-full object-cover cursor-pointer"
                                        onClick={() => handleVideoClick(index)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                        onClick={() => {
                            setIsManual(true);
                            slideTo(index);
                        }}
                    ></button>
                ))}
            </div>
        </section>
    );
    
        
    return isMobileOrTablet ? renderCarouselView() : renderFullScreenView();
};

export default VideoClips;
