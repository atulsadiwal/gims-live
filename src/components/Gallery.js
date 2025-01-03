/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const memories = [
    {
        url: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/gallery-4.webp",
        icon: "Plus",
    },
    {
        url: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/gallery-5.webp",
        icon: "Plus",
    },
    {
        url: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/gallery-6.webp",
        icon: "Plus",
    },
    {
        url: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/gallery-3.webp",
        icon: "Plus",
    },
    {
        url: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/gallery.webp",
        icon: "Plus",
    },
    {
        url: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/gallery-2.webp",
        icon: "Plus",
    },
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 850);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
        <section className="w-full overflow-hidden py-10 max-md:py-7 max-sm:py-5">
            {isMobile ? (
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {memories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative group cursor-pointer transition-all duration-300">
                                <img
                                    src={item.url}
                                    alt={`Gallery image ${index + 1}`}
                                    loading="eager"
                                    className="object-cover w-full h-[50vh] max-sm:h-[30vh] brightness-75 group-hover:brightness-90 transition-all"
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="flex w-full">
                    {memories.map((item, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer transition-all duration-300"
                            style={{
                                width: activeIndex === index ? "50%" : "20%",
                                transition: "width 0.3s ease",
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={item.url}
                                alt={`Gallery image ${index + 1}`}
                                loading="eager"
                                className="object-cover w-full h-[400px] max-sm:h-[30vh] brightness-75 group-hover:brightness-90 transition-all"
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
            )}

            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Selected"
                            loading="eager"
                            className="object-contain w-full h-[80vh] max-sm:h-[60vh] rounded-lg"
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
