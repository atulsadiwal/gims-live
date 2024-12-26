import React from 'react';
import { Star } from 'lucide-react';

const bulletData = [
    {
        image: "path/to/image1.webp",
        heading: "D30 Youth Icon",
        description:
            "Awarded D30 International Excellence and Youth Icon at De-addiction and Disability Awareness Summit in 30 Countries by Kashiyana Foundation.",
    },
    {
        image: "path/to/image2.webp",
        heading: "Promising B-School",
        description:
            "Awarded Promising B School for Strong Industry Connect by Indian Institutional Ranking Framework (IIRF).",
    },
    {
        image: "path/to/image3.webp",
        heading: "Top 20 B-School",
        description:
            "Ranked among Top 20 B-schools in Outlook ICARE- India's Best School 2025 ranking.",
    },
    {
        image: "path/to/image4.webp",
        heading: "Best Management College",
        description:
            "Awarded Best Management College in North India by Intiexcellent Chamber of Commerce & Industry.",
    },
    {
        image: "path/to/image5.webp",
        heading: "Corporate Interface Excellence",
        description:
            "Excellence in Corporate Interface award by Bharat Expo & Awards 2024.",
    },
    {
        image: "path/to/image6.webp",
        heading: "Top 23 B-School North Zone",
        description:
            "Ranked 23rd among Top B Schools in North Zone by BUSINESS WORLD.",
    },
    {
        image: "path/to/image7.webp",
        heading: "Top 20 Private B-School NCR",
        description:
            "Ranked 20th among Top Private B Schools in Delhi/NCR by THE WEEK.",
    },
    {
        image: "path/to/image8.webp",
        heading: "Top 19 Private B-School North Zone",
        description:
            "Ranked 19th among Top Private B Schools in North Zone by Outlook.",
    },
    {
        image: "path/to/image9.webp",
        heading: "North Zone Top Private",
        description: "Top Private Institute in North India by JAGRAN JOSH.",
    },
    {
        image: "path/to/image10.webp",
        heading: "A+ Category",
        description: "A+ category & Ranked 36th in the B-School Survey.",
    },
    {
        image: "path/to/image11.webp",
        heading: "Top Emerging B-School",
        description: "Ranked in Top Emerging B Schools by Times of India.",
    },
    {
        image: "path/to/image12.webp",
        heading: "AA+ Top Management College",
        description:
            "Ranked AA+ among top management colleges in Delhi/NCR by Career360.",
    },
];

const AwardsAndRecognition = () => {
    return (
        <section className="relative bg-BG4 bg-cover bg-no-repeat bg-center min-h-screen flex flex-col justify-end">
            <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>
            <div className="max-w-[1500px] mx-auto px-4 relative z-10 py-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-7/12 py-6 px-2 flex flex-col justify-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-FONT2 text-white mb-6 text-center">
                            Awards & Recognitions
                        </h1>
                        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-8 gap-x-3">
                            {bulletData.map((bullet, index) => (
                                <div key={index} className="relative group">
                                    <h2 className="max-w-52 mx-auto text-center text-white font-novaSemi mt-4 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center relative">
                                        <img
                                            src="/apply-now/image/left.webp"
                                            alt="award"
                                            className="w-6 h-16 md:w-8 md:h-20"
                                        />
                                        <span className="z-10 text-sm md:text-base">{bullet.heading}</span>
                                        <img
                                            src="/apply-now/image/right.webp"
                                            alt="award"
                                            className="w-6 h-16 md:w-8 md:h-20"
                                        />
                                    </h2>
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white p-2 md:p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                    >
                                        <p className="text-xs md:text-sm text-center">{bullet.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 px-4 py-6">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-FONT2 text-white mb-6 flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
                            <Star className="w-8 h-8 md:w-10 md:h-10 mr-2 text-yellow-400 animate-pulse" />
                            Latest @GIMS
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className='bg-gray-200 p-1 rounded-lg'>
                                <div className="bg-white text-black p-3 h-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 transform hover:bg-indigo-100">
                                    <h3 className="text-lg md:text-xl font-novaBold mb-3 text-indigo-600 flex items-center">
                                        <img
                                            src="/apply-now/image/placement-recruiter/logo10.webp"
                                            alt="CourseEra Logo"
                                            className="w-28 h-10 mr-2"
                                        />
                                        Certifications
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-700">Students have received various certifications through online platforms like CourseEra to enhance their skills.</p>
                                </div>
                            </div>
                            <div className='bg-gray-200 p-1 rounded-lg'>
                                <div className="bg-white text-black p-3 h-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 transform hover:bg-indigo-100">
                                    <h3 className="text-lg md:text-xl font-novaBold mb-3 text-indigo-600">MoU Signing with International Universities</h3>
                                    <p className="text-xs md:text-sm text-gray-700">We have signed MoUs with several international universities for student exchange and research opportunities.</p>
                                </div>
                            </div>
                            <div className='bg-gray-200 p-1 rounded-lg'>
                                <div className="bg-white text-black p-3 h-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 transform hover:bg-indigo-100">
                                    <h3 className="text-lg md:text-xl font-novaBold mb-3 text-indigo-600">IIP to Malaysia</h3>
                                    <p className="text-xs md:text-sm text-gray-700">An immersive Industrial Internship Program (IIP) in Malaysia to broaden global industry perspectives for students.</p>
                                </div>
                            </div>
                            <div className='bg-gray-200 p-1 rounded-lg'>
                                <div className="bg-white text-black p-3 h-full rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105 transform hover:bg-indigo-100">
                                    <h3 className="text-lg md:text-xl font-novaBold mb-3 text-indigo-600">Global Sustainable Aviation Conclave</h3>
                                    <p className="text-xs md:text-sm text-gray-700">Our students participated in the Global Sustainable Aviation Conclave at the Indian Aviation Academy in New Delhi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AwardsAndRecognition;

