import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

export default function LogoSlider({logos, title, speed}) {

    const breakpoints = {
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 9 }
    };

    return (
        
        <div className="break1:max-w-[1650px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto bg-white block px-16 max-md:px-3 py-10">
            <h1 className="font-FONT2 text-3xl flex items-center justify-center gap-2">{title}</h1>
            <div className="mx-auto py-10">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={speed}
                    breakpoints={breakpoints}
                >
                    {logos?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center border rounded-md h-16 max-sm:h-12">
                                <img
                                    alt={image.alt}
                                    src={image.src}
                                    className="p-2 h-full w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
