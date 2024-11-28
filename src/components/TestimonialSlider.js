import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        const slideInterval = setInterval(() => {
            nextTopSlide();
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [currentTopSlide]);


    return (
        <section className='max-w-[1400px] mx-auto grid grid-cols-5 gap-5 place-items-center py-10'>
            <div className="relative col-span-3 w-full h-full overflow-hidden rounded-3xl">
                {studentReviews ?
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
                                <div className="relative w-full h-full grid grid-cols-5 bg-[#E8E8E8]">
                                    <div className='col-span-2'>
                                        <img
                                            src={studentReviews[currentTopSlide].image}
                                            alt="Slide"
                                            className="w-full h-full object-cover max-md:w-full max-md:h-full"
                                        />
                                    </div>
                                    <div className='col-span-3 h-full flex flex-col items-start justify-center px-16'>
                                        <span className='text-2xl italic font-novaLight'>{studentReviews[currentTopSlide].heading}</span>
                                        <p className='py-4 font-FONT1 italic'>{studentReviews[currentTopSlide].description}</p>
                                        <h4 className='font-FONT2 text-xl text-red-500'>{studentReviews[currentTopSlide].studentName}</h4>
                                        <span className='text-sm font-FONT1'>{studentReviews[currentTopSlide].company}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    : null}
                <button
                    variant="outline"
                    size="icon"
                    className="flex items-center justify-center absolute left-4 top-1/2 transform -translate-y-1/2 bg-white opacity-50 rounded-full hover:bg-opacity-75 w-4 h-4 lg:w-12 lg:h-12 max-md:w-6 max-md:h-6 "
                    onClick={prevTopSlide}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    variant="outline"
                    size="icon"
                    className="flex items-center justify-center absolute right-4 top-1/2 transform -translate-y-1/2 bg-white opacity-50 rounded-full hover:bg-opacity-75  w-4 h-4 lg:w-12 lg:h-12 max-md:w-6 max-md:h-6"
                    onClick={nextTopSlide}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            <div className="relative col-span-2">
                <div
                    className="cursor-pointer"
                    onClick={openModal}
                >
                    <img
                        src="https://cucet.cuchd.in/new-assets/img/student-video-thumb-1.jpg" // Add your thumbnail image path
                        alt="Video Thumbnail"
                        className="w-full rounded-3xl"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 rounded-3xl">
                        <img src="/image/play.gif" alt="play" className='rounded-full w-14' />
                    </div>
                </div>

                {/* Modal for YouTube video */}
                {isOpen && (
                    <div
                        className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center "
                        onClick={closeModal}
                    >
                        <div
                            className="relative p-4 rounded-lg max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute -top-5 -right-5 text-black bg-white rounded-full w-10 h-10 flex justify-center items-center"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                            <div>
                                <iframe
                                    width="990"
                                    height="600"
                                    src="https://www.youtube.com/embed/R3spn6b0GQk" // Replace VIDEO_ID with the actual YouTube video ID
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TestimonialSlider