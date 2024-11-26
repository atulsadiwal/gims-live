import React, { useState } from 'react';

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
        name: 'Mr.s Jaya Kishori'
    },
];

const CilebHighlights = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="relative w-full max-w-[1450px] mx-auto overflow-hidden py-16">
            <div className="flex space-x-2">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`relative ${index === activeIndex ? "min-w-[76%]" : "min-w-[8%]"} bg-white rounded-3xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
                        onClick={() => handleClick(index)}
                    >
                        <div
                            className={`absolute bottom-0 left-0 w-full text-white m-6 transition-opacity duration-300 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <h2 className="text-3xl">{slide.name}</h2>
                        </div>
                        <img
                            src={slide.imageUrl}
                            alt={slide.name}
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                ))}
            </div>
            {/* <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                <button className="bg-green-500 text-white p-2 rounded-md">
                    &#8592;
                </button>
            </div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <button className="bg-green-500 text-white p-2 rounded-full">
                    &#8594;
                </button>
            </div> */}
        </section>
    );
};

export default CilebHighlights;
