import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Building } from 'lucide-react';

export const collaborationsLogo = [
    { alt: "COURSERA", src: "/apply-now/image/placement-recruiter/logo10.webp" },
    { alt: "Archer", src: "/apply-now/image/placement-recruiter/logo22.webp" },
    { alt: "EY", src: "/apply-now/image/placement-recruiter/logo23.webp" },
    { alt: "CNH", src: "/apply-now/image/placement-recruiter/logo24.webp" },
    { alt: "INFOSYS", src: "/apply-now/image/placement-recruiter/logo25.webp" },
    { alt: "ASHOK", src: "/apply-now/image/placement-recruiter/logo26.webp" },
    { alt: "ANAND", src: "/apply-now/image/placement-recruiter/logo27.webp" },
    { alt: "YESBANK", src: "/apply-now/image/placement-recruiter/logo28.webp" },
    { alt: "PhonePe", src: "/apply-now/image/placement-recruiter/logo29.webp" },
    { alt: "Deloitte", src: "/apply-now/image/placement-recruiter/logo30.webp" },
    { alt: "ACCENTURE", src: "/apply-now/image/placement-recruiter/logo31.webp" },
    { alt: "BOB", src: "/apply-now/image/placement-recruiter/logo32.webp" },
    { alt: "UPGRAD", src: "/apply-now/image/placement-recruiter/logo33.webp" },
    { alt: "DECATHLON", src: "/apply-now/image/placement-recruiter/logo34.webp" },
    { alt: "HDB", src: "/apply-now/image/placement-recruiter/logo35.webp" },
    { alt: "HCL", src: "/apply-now/image/placement-recruiter/logo36.webp" },
    { alt: "KPMG", src: "/apply-now/image/placement-recruiter/logo37.webp" },
    { alt: "IBM", src: "/apply-now/image/placement-recruiter/logo38.webp" },
    { alt: "ITC", src: "/apply-now/image/placement-recruiter/logo39.webp" },
    { alt: "DS GROUP", src: "/apply-now/image/placement-recruiter/logo40.webp" },
    { alt: "HITACHI", src: "/apply-now/image/placement-recruiter/logo41.webp" },
    { alt: "SPARK", src: "/apply-now/image/placement-recruiter/logo42.webp" },
    { alt: "AU", src: "/apply-now/image/placement-recruiter/logo43.webp" },
    { alt: "DELL", src: "/apply-now/image/placement-recruiter/logo44.webp" },
    { alt: "INFOEDGE", src: "/apply-now/image/placement-recruiter/logo45.webp" },
    { alt: "PRISM", src: "/apply-now/image/placement-recruiter/logo46.webp" },
    { alt: "SBI", src: "/apply-now/image/placement-recruiter/logo47.webp" },
    { alt: "SBIOS", src: "/apply-now/image/placement-recruiter/logo48.webp" },
    { alt: "KANSAI", src: "/apply-now/image/placement-recruiter/logo49.webp" },
    { alt: "NAUKRI", src: "/apply-now/image/placement-recruiter/logo50.webp" },
    { alt: "LAKSH", src: "/apply-now/image/placement-recruiter/logo51.webp" },
    { alt: "HDFC", src: "/apply-now/image/placement-recruiter/logo52.webp" },
    { alt: "OLN", src: "/apply-now/image/placement-recruiter/logo53.webp" },
    { alt: "PROPERTY", src: "/apply-now/image/placement-recruiter/logo54.webp" },
    { alt: "ANZ", src: "/apply-now/image/placement-recruiter/logo55.webp" },
    { alt: "KPL", src: "/apply-now/image/placement-recruiter/logo56.webp" },
    { alt: "TEAMC", src: "/apply-now/image/placement-recruiter/logo57.webp" },
    { alt: "KOTAK", src: "/apply-now/image/placement-recruiter/logo58.webp" },
    { alt: "SIMP", src: "/apply-now/image/placement-recruiter/logo59.webp" },
    { alt: "LR", src: "/apply-now/image/placement-recruiter/logo60.webp" },
    { alt: "SIMP", src: "/apply-now/image/placement-recruiter/logo61.webp" },
    { alt: "RADISSON", src: "/apply-now/image/placement-recruiter/logo62.webp" },
    { alt: "KENT", src: "/apply-now/image/placement-recruiter/logo63.webp" },
    { alt: "Lifestyle", src: "/apply-now/image/placement-recruiter/logo64.webp" },
    { alt: "AXIS", src: "/apply-now/image/placement-recruiter/logo65.webp" },
    { alt: "BAJAJ", src: "/apply-now/image/placement-recruiter/logo66.webp" },
    { alt: "DTDC", src: "/apply-now/image/placement-recruiter/logo67.webp" },
    { alt: "TECHGO", src: "/apply-now/image/placement-recruiter/logo68.webp" },
    { alt: "EDU", src: "/apply-now/image/placement-recruiter/logo69.webp" },
    { alt: "LR", src: "/apply-now/image/placement-recruiter/logo70.webp" },
    { alt: "AMAZON", src: "/apply-now/image/placement-recruiter/logo71.webp" },
    { alt: "WIPRO", src: "/apply-now/image/placement-recruiter/logo72.webp" },
    { alt: "CROMA", src: "/apply-now/image/placement-recruiter/logo73.webp" },
    { alt: "BLINKIT", src: "/apply-now/image/placement-recruiter/logo74.webp" },
    { alt: "CAFE", src: "/apply-now/image/placement-recruiter/logo75.webp" },
    { alt: "BERGE", src: "/apply-now/image/placement-recruiter/logo76.webp" },
    { alt: "DABUR", src: "/apply-now/image/placement-recruiter/logo77.webp" },
    { alt: "INDIAMART", src: "/apply-now/image/placement-recruiter/logo78.webp" },
    { alt: "ICICI", src: "/apply-now/image/placement-recruiter/logo79.webp" },
    { alt: "UJJIVAN", src: "/apply-now/image/placement-recruiter/logo80.webp" },
];

const group1 = collaborationsLogo.slice(0, 25);
const group2 = collaborationsLogo.slice(25, 50);
const group3 = collaborationsLogo.slice(50);

const PlacementRecruiters = () => {
    const breakpoints = {
        320: { slidesPerView: 3 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 9 },
    };

    return (
        <section className="py-10">
            <div className="break1:max-w-[1650px] break2:max-w-[1320px] break3:max-w-[1140px] break4:max-w-[960px] mx-auto bg-white block py-10 px-16 max-lg:py-7 max-lg:px-8 max-md:py-5 max-md:px-6 max-sm:px-3 max-sm:py-3">
                <h1 className="font-FONT2 text-4xl flex items-center justify-center gap-2 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                    <Building className='w-6 h-6 sm:h-8 sm:w-8' />
                    Placements Recruiters
                </h1>
                <div className="mx-auto py-10 max-md:py-6 max-sm:py-4 space-y-8">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        speed={2000}
                        breakpoints={breakpoints}
                        className="py-5"
                    >
                        {group1.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center border rounded-md h-20 max-sm:h-12">
                                    <img
                                        alt={logo.alt}
                                        src={logo.src}
                                        className="p-2 h-full w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                        speed={2000}
                        breakpoints={breakpoints}
                        className="py-5"
                    >
                        {group2.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center border rounded-md h-20 max-sm:h-12">
                                    <img
                                        alt={logo.alt}
                                        src={logo.src}
                                        className="p-2 h-full w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{ delay: 0, disableOnInteraction: false }}
                        speed={2000}
                        breakpoints={breakpoints}
                        className="py-5"
                    >
                        {group3.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center items-center border rounded-md h-20 max-sm:h-12">
                                    <img
                                        alt={logo.alt}
                                        src={logo.src}
                                        className="p-2 h-full w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PlacementRecruiters;
