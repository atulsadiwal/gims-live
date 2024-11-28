import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const videos = [
    {
        id: 1,
        videoUrl: "https://www.youtube.com/watch?v=CwPHw8gCjYY"
    },
    {
        id: 2,
        videoUrl: "https://youtu.be/6X_o0R1em6o?si=gxuadWRTfc3GIQVS"
    },
    {
        id: 3,
        videoUrl: "https://youtu.be/EE-mB4IPy9g?si=bW0NHY74xWYjMt1A"
    },
    {
        id: 4,
        videoUrl: "https://youtu.be/hHRM_12nQxI?si=IRn17C7sG3yPOXvP"
    },
    {
        id: 5,
        videoUrl: "https://youtu.be/OLRHojz-8Yw?si=lZoKokNvLVTG7jvh"
    },
    {
        id: 6,
        videoUrl: "https://youtu.be/czbZKMK91S0?si=nl31LzADdd1Iwm4n"
    },
    {
        id: 7,
        videoUrl: "https://youtu.be/CVhdTYx3qfg?si=sUup0Tv0HnQyXtjM"
    }
];

const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|https?:\/\/(?:www\.)?youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const GimsiansSpeak = () => {
    return (
        <>
            <div className="max-w-[1400px] mx-auto px-2 py-8">
                <h1 className="text-4xl font-FONT2 text-center text-gray-900 mb-8 uppercase">
                    Gimsians Speak
                </h1>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {videos.map((video) => {
                        const videoId = extractVideoId(video.videoUrl);
                        if (!videoId) return null;

                        return (
                            <SwiperSlide key={video.id}>
                                <div className="bg-white shadow-lg rounded-md overflow-hidden">
                                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                                            alt={`Video thumbnail`}
                                            className="w-full h-auto rounded-md"
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

export default GimsiansSpeak;
