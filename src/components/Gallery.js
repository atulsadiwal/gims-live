/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const memories = [
    {
        url: '/image/gallery/1731909052-marketing-adventure8.webp',
        icon: 'Plus',
    },
    {
        url: '/image/gallery/463790411_955925189885840_3238215167815083024_n.jpg',
        icon: 'Plus',
    },
    {
        url: '/image/gallery/461175028_936955695116123_7278237797990110738_n.jpg',
        icon: 'Plus',
    },
    {
        url: '/image/gallery/gallery-29.webp',
        icon: 'Plus',
    },
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    const handlePlusClick = (url, event) => {
        event.stopPropagation();
        setSelectedImage(url);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <section className="w-full overflow-hidden py-10">
            <div className="flex w-full">
                {memories.map((item, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer transition-all duration-300"
                        style={{
                            width: activeIndex === index ? '50%' : '25%',
                            transition: 'width 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={item.url}
                            alt={`Gallery image ${index + 1}`}
                            className="object-cover w-full h-[400px] brightness-75 group-hover:brightness-90 transition-all"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center text-white p-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <button
                                onClick={(e) => handlePlusClick(item.url, e)}
                                className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full"
                                aria-label="Open image"
                            >
                                <Plus className="w-8 h-8 mb-2 border-2 rounded-full p-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="object-contain w-full h-[80vh] rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded"
                            onClick={closeModal}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
