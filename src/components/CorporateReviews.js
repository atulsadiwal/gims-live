import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const features = [
    {
        imgSrc: "./image/corporate/priti-goel.webp",
        name: "Ms. Priti Goel",
        designation: "Founder, CEO and MD",
        description: "Priti Goel, CEO of Prisha Wealth, brings 23+ years of global banking and entrepreneurship experience as a Corporate Mentor, guiding GNIOT students with expertise, support, and insights for success."
    },
    {
        imgSrc: "./image/corporate/nitin-kalra.webp",
        name: "Mr. Nitin Kalra",
        designation: "AGM-HR, North Zone",
        description: "Nitin Kalra, an HR leader with 18+ years of expertise, inspires GIMS students to embrace lifelong learning, build skills, and strive for excellence, shaping their path to future success."
    },
    {
        imgSrc: "./image/corporate/shivani-sharma-singh.webp",
        name: "Ms. Shivani Sharma Singh",
        designation: "Head Government Project",
        description: "A GIMS mentor emphasizes communication, analytics, creativity, customer focus, resilience, tech skills, negotiation, and time management as key Sales & Marketing skills, urging students to pursue excellence."
    },
    {
        imgSrc: "./image/corporate/rishika.webp",
        name: "Mrs. Rishika Verma Vohra",
        designation: "Career Campus & Lateral Recruitment",
        description: "A GIMS mentor with 12+ years in Talent Acquisition highlights student potential, offering expertise in recruiting, HR policies, DEI, and employee engagement to guide them toward successful careers."
    },
    {
        imgSrc: "./image/corporate/sandeep-kumar-rastogi.webp",
        name: "Mr. Sandeep Kumar Rastogi",
        designation: "Senior Vice President- Growth Financing",
        description: "A GIMS mentor advises PGDM students to embrace learning, set clear goals, build networks, gain practical experience, and develop soft skills to excel as future business leaders."
    },
    {
        imgSrc: "./image/corporate/harsh-raghuvanshi.webp",
        name: "Mr. Harsh Raghuvanshi",
        designation: "Assistant Manager, Aditya Birla Group",
        description: "A corporate HR mentor advises PGDM students to excel in analytics, leadership, communication, adaptability, ethics, technical skills, time management, networking, creativity, and continuous learning for successful corporate careers."
    },
    {
        imgSrc: "./image/corporate/harsh-raj-jain.webp",
        name: "Mr. Harsh Raj Jain",
        designation: "Talent Acquisition Head",
        description: "A corporate HR mentor advises students to focus on professionalism, work ethic, team collaboration, technological proficiency, integrity, and self-motivation to successfully transition into the corporate world."
    },
];

const CorporateReviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setItemsPerPage(1);
            } else if (width >= 640 && width < 768) {
                setItemsPerPage(2);
            } else if (width >= 768 && width < 1024) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(4);
            }
        };

        updateItemsPerPage();

        window.addEventListener('resize', updateItemsPerPage);

        return () => {
            window.removeEventListener('resize', updateItemsPerPage);
        };
    }, []);

    const startIndex = currentSlide * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentFeatures = features.slice(startIndex, endIndex);

    return (
        <>
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-FONT2 mb-4 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">Corporate speaks for GIMS</h2>
                        <p className="text-gray-400 max-w-4xl font-FONT1 mx-auto max-sm:text-sm">
                            "Corporate Speaks for GIMS" highlights testimonials and insights from industry leaders, showcasing the impact and excellence of GIMS in shaping professionals ready for the corporate world.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-lg:gap-5 max-md:gap-4 max-sm:gap-3">
                        {currentFeatures.map((feature, index) => (
                            <div key={index} className="bg-gray-900/50 border-gray-800 p-6 rounded-lg max-lg:p-5 max-sm:text-center max-md:p-4 max-sm:p-3">
                                <div className="rounded-full flex max-sm:justify-center w-full mb-4">
                                    <img src={feature.imgSrc} alt={feature.name} className="h-16 w-16 rounded-full object-cover" loading="eager"/>
                                </div>
                                <div className="mb-3">
                                    <h4 className="text-lg font-novaSemi max-sm:text-center max-sm:text-sm">{feature.name}</h4>
                                    <p className="text-sm font-novaReg max-sm:text-center text-gray-400 max-sm:text-xs">{feature.designation}</p>
                                </div>
                                <p className="text-gray-400 text-sm font-novaReg leading-relaxed max-sm:text-xs">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button
                            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                            className="text-white bg-gray-500 flex justify-center items-center hover:scale-110 transition duration-200 ease-linear w-8 h-8 rounded-full"
                            disabled={currentSlide === 0}>
                            <ArrowLeft className='w-5 h-5 text-black' />
                        </button>

                        <div className="w-64 max-sm:w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 transition-all duration-500"
                                style={{ width: `${((currentSlide + 1) / Math.ceil(features.length / itemsPerPage)) * 100}%` }} />
                        </div>
                        <button
                            onClick={() => setCurrentSlide(Math.min(Math.ceil(features.length / itemsPerPage) - 1, currentSlide + 1))}
                            className="text-white bg-gray-500 flex justify-center items-center hover:scale-110 transition duration-200 ease-linear w-8 h-8 rounded-full"
                            disabled={currentSlide === Math.ceil(features.length / itemsPerPage) - 1}
                        >
                            <ArrowRight className='w-5 h-5 text-black' />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CorporateReviews;
