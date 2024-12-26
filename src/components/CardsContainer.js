import React, { useState, useEffect } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const CardsContainer = () => {
    const [isCarousel, setIsCarousel] = useState(false);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const updateView = () => {
            const width = window.innerWidth;

            if (width >= 1280) {
                setIsCarousel(false);
            } else if (width >= 768) {
                setIsCarousel(true);
                setSlidesPerView(2);
            } else {
                setIsCarousel(true);
                setSlidesPerView(1);
            }
        };

        updateView();

        window.addEventListener("resize", updateView);

        return () => window.removeEventListener("resize", updateView);
    }, []);

    return (
        <section className="bg-[#f8f9fd] py-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center max-sm:py-4">
                    <h1 className="text-5xl font-FONT2 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
                        Tutelage-An Exclusive Corporate Readiness
                        <br />
                        Training Programme
                    </h1>
                    <div className="flex justify-center flex-wrap mt-4 px-4 py-3 text-lg font-FONT1 leading-5 text-gray-600 max-w-4xl mx-auto max-sm:text-sm">
                        <p>
                            GIMS, Greater Noida, proudly launches "Tutelage," a transformative training program featuring India's Youth Icon, Mr. Sonu Sharma, motivational speaker and corporate trainer. This unique collaboration between GIMS' Learning and Development Department and Mr. Sonu Sharma empowers students to boost their self-confidence, enhance learning capabilities, and prepare for the challenges of the corporate world.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center p-1">
                    {isCarousel ? (
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={slidesPerView}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            className="w-full max-w-4xl"
                        >
                            <SwiperSlide>
                                <div className="flex justify-center">
                                    <Card imageUrl="/apply-now/image/gims4.webp" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center">
                                    <Card imageUrl="/apply-now/image/gims5.webp" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex justify-center">
                                    <Card imageUrl="/apply-now/image/gims6.webp" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <div className="flex gap-6 justify-center p-2 max-xl:gap-2 max-xl:p-0">
                            <Card imageUrl="/apply-now/image/gims4.webp" />
                            <Card imageUrl="/apply-now/image/gims5.webp" />
                            <Card imageUrl="/apply-now/image/gims6.webp" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CardsContainer;
