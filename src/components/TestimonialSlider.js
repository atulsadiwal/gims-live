import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const studentReviews = [
    {
        id: 1,
        studentName: "Swati Mishra​",
        company: "InfoEdge India",
        heading: "Countless Opportunities at One Place",
        description: "A big thank you to my support system GIMS for their unwavering belief in me which resulted into getting me a job in INFOEDGE. I am extremely grateful to the college for playing a significant role in helping me secure my dream job.​",
        image: "/image/student/1.png"
    },
    {
        id: 2,
        studentName: "Ritika Saxena",
        company: "Deloitte",
        heading: "Countless Opportunities at One Place",
        description: "Sky is the limit' is what is taught in GIMS. Delighted to announce my placement at Deloitte. Thanks for the guidance and opportunities my college provided.​",
        image: "/image/student/2.png"
    },
    {
        id: 3,
        studentName: "Aditya Kumar",
        company: "Decathlon",
        heading: "Countless Opportunities at One Place",
        description: "I am thrilled to have secured a position at DECATHALON. And I credit much of my success to my college GIMS to provide me such an amazing Opportunity.​",
        image: "/image/student/4.png"
    },
    {
        id: 4,
        studentName: "Dilpreet Singh",
        company: "Sonalika International",
        heading: "Countless Opportunities at One Place",
        description: "A huge thank you to GIMS for their unwavering support. The guidance and career services provided by the college helped me secure my dream job at Accenture. I am excited to start this new journey.",
        image: "/image/student/4.png"
    },
    {
        id: 5,
        studentName: "Navda Tyagi",
        company: "ITC Limited",
        heading: "Countless Opportunities at One Place",
        description: "A big shoutout to my support system GIMS for enlightening my career by providing me with an opportunity to work with ITC LTD. Your continual support is really appreciable.​",
        image: "/image/student/1.png"
    },
    {
        id: 6,
        studentName: "Kishan Kumar Singh",
        company: "Asian Paints Ltd",
        heading: "Countless Opportunities at One Place",
        description: "Securing a placement opportunity through GIMS was one of the most valuable experiences of my academic journey. The support and guidance provided by the college were instrumental in helping me find a placement in ASIAN PAINTS. that aligned perfectly with my career goals.",
        image: "/image/student/4.png"
    },
    {
        id: 7,
        studentName: "Vibha Kumari",
        company: "Bandhan Bank",
        heading: "Countless Opportunities at One Place",
        description: "Choosing GIMS was a game-changer for me. The rigorous curriculum, supplemented by practical experiences and industry connections, set me up for success in the competitive job market .Thrilled to get placed at BANDHAN BANK. Thanks a ton to GIMS.",
        image: "/image/student/2.png"
    },
    {
        id: 8,
        studentName: "Shivam Pandey",
        company: "Ujjivan Small Finance Bank",
        heading: "Countless Opportunities at One Place",
        description: "Thanks to my college GIMS, I landed a job that aligns perfectly with my interests and aspirations. Got successfully placed in UJJIVAN SMALL FINANCE BANK.",
        image: "/image/student/4.png"
    },
    {
        id: 9,
        studentName: "Ankur Kumar",
        company: "HCLTech",
        heading: "Countless Opportunities at One Place",
        description: "I am very proud and blessed to be a part of this college as it has taught me many lessons for life. A deep sense of gratitude for being placed in HCL. Really appreciate the support provided by my college GIMS.",
        image: "/image/student/4.png"
    },
];

const TestimonialSlider = () => {
    const [currentTopSlide, setCurrentTopSlide] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const nextTopSlide = () => {
        setCurrentTopSlide((prev) => (prev + 1) % studentReviews.length);
    };

    const prevTopSlide = () => {
        setCurrentTopSlide((prev) => (prev - 1 + studentReviews.length) % studentReviews.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextTopSlide, 3000);
        return () => clearInterval(slideInterval);
    }, [currentTopSlide]);

    return (
        <section className="max-w-[1400px] mx-auto py-6 px-4 sm:py-10 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="relative col-span-1 lg:col-span-3 w-full h-[400px] overflow-hidden rounded-2xl">
                    <AnimatePresence initial={false}>
                        {studentReviews[currentTopSlide] && (
                            <motion.div
                                key={currentTopSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <div className="relative w-full h-full flex flex-col sm:flex-row bg-[#E8E8E8]">
                                    <div className="w-full sm:w-2/5 h-1/3 sm:h-full">
                                        <img
                                            src={studentReviews[currentTopSlide].image}
                                            alt="Student"
                                            className="w-full h-full object-cover max-sm:object-contain"
                                        />
                                    </div>
                                    <div className="w-full sm:w-3/5 h-2/3 sm:h-full flex flex-col items-start justify-center p-6 max-sm:p-2">
                                        <span className="text-lg sm:text-2xl italic font-light">{studentReviews[currentTopSlide].heading}</span>
                                        <p className="py-2 sm:py-4 text-sm sm:text-base italic">{studentReviews[currentTopSlide].description}</p>
                                        <h4 className="text-lg sm:text-xl text-red-500 font-semibold">{studentReviews[currentTopSlide].studentName}</h4>
                                        <span className="text-xs sm:text-sm">{studentReviews[currentTopSlide].company}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
                        onClick={prevTopSlide}
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full hover:bg-opacity-75 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center"
                        onClick={nextTopSlide}
                    >
                        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                </div>
                <div className="relative col-span-1 lg:col-span-2 h-[200px] sm:h-[300px] lg:h-[400px]">
                    <div
                        className="cursor-pointer w-full h-full"
                        onClick={openModal}
                    >
                        <img
                            src="/image/maxresdefault.jpg"
                            alt="Video Thumbnail"
                            className="w-full h-[400px] rounded-2xl object-cover"
                        />
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-2xl">
                            <Play className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute -top-10 right-0 text-white bg-red-500 rounded-full w-8 h-8 flex justify-center items-center"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/FlHxgIwPRXs"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TestimonialSlider;

