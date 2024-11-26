import React, { useState } from 'react';

const features = [
    {
        imgSrc: "/image/swati-mishra.jpg",
        studentName: "RAVI KUMAR",
        companyName: "Tata Consultancy Services",
        description: "I am deeply grateful to GIMS for their continuous support and encouragement, which helped me land a role at TCS. The faculty and resources provided by the college played an important part in my success."
    },
    {
        imgSrc: "/image/12.png",
        studentName: "PRIYA SINGH",
        companyName: "Accenture",
        description: "A huge thank you to GIMS for their unwavering support. The guidance and career services provided by the college helped me secure my dream job at Accenture. I am excited to start this new journey."
    },
    {
        imgSrc: "/image/13.png",
        studentName: "AMAN VERMA",
        companyName: "Amazon",
        description: "I feel blessed to have had the opportunity to be part of GIMS. The training and mentorship I received here played a key role in me securing a position at Amazon. Thank you to everyone who helped me along the way!"
    },
    {
        imgSrc: "/image/15.png",
        studentName: "MEERA JAIN",
        companyName: "Google",
        description: "Thank you to the entire GIMS family for believing in me. The college's emphasis on practical learning and industry exposure helped me land my dream job at Google. I am forever grateful for the support."
    },
    {
        imgSrc: "/image/14.png",
        studentName: "RAJESH KUMAR",
        companyName: "Wipro",
        description: "A special thanks to GIMS for providing me with the skills and confidence to secure a position at Wipro. The college’s focus on real-world applications and industry internships made a huge difference in my journey."
    },
    {
        imgSrc: "/image/17.png",
        studentName: "SITA RANI",
        companyName: "Infosys",
        description: "Thanks to GIMS for their constant encouragement and support. The knowledge and exposure I received here were instrumental in my journey to securing a role at Infosys. I am excited to take the next step in my career."
    },
    {
        imgSrc: "/image/16.png",
        studentName: "VIKRAM SAHU",
        companyName: "IBM",
        description: "I am immensely grateful to GIMS for providing the right environment for growth and development. With their support, I secured a job at IBM. This journey has been incredible, and I look forward to contributing to the industry."
    },
    {
        imgSrc: "/image/12.png",
        studentName: "NISHA SHARMA",
        companyName: "Deloitte",
        description: "Thank you to GIMS for their guidance and training that helped me land a job at Deloitte. The exposure to industry best practices and real-world scenarios prepared me for this amazing opportunity."
    },
    {
        imgSrc: "/image/19.png",
        studentName: "ANUJ GUPTA",
        companyName: "Microsoft",
        description: "I'm extremely grateful to GIMS for their support in helping me secure a role at Microsoft. The mentorship and resources available at the college gave me the confidence to take on challenges and succeed."
    },
];


const StudentReviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerPage = 4;

    const startIndex = currentSlide * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentFeatures = features.slice(startIndex, endIndex);

    return (
        <>
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why do business with Payoneer?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Cross-border payments can get complicated but we've made it our mission to uncomplicate them.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentFeatures.map((feature, index) => (
                            <div key={index} className="bg-gray-900/50 border-gray-800 p-6 rounded-lg backdrop-blur-sm">
                                <div className="h-12 w-12 rounded-full overflow-hidden mb-4">
                                    <img
                                        src={feature.imgSrc}
                                        alt={feature.studentName}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="mb-3">
                                    <h4 className="text-lg font-semibold">{feature.studentName}</h4>
                                    <p className="text-sm text-gray-400">{feature.companyName}</p>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-4">
                        <button
                            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                            className="text-white hover:bg-gray-800 p-2 rounded-full"
                            disabled={currentSlide === 0}
                        >
                            <span className="sr-only">Previous slide</span>
                            ←
                        </button>

                        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 transition-all duration-500"
                                style={{ width: `${((currentSlide + 1) / Math.ceil(features.length / itemsPerPage)) * 100}%` }}
                            />
                        </div>

                        <button
                            onClick={() => setCurrentSlide(Math.min(Math.ceil(features.length / itemsPerPage) - 1, currentSlide + 1))}
                            className="text-white hover:bg-gray-800 p-2 rounded-full"
                            disabled={currentSlide === Math.ceil(features.length / itemsPerPage) - 1}
                        >
                            <span className="sr-only">Next slide</span>
                            →
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StudentReviews;
