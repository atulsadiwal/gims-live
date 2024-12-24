import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Building } from 'lucide-react';

export const collaborationsLogo = [
    { alt: "COURSERA", src: "/apply-now/image/placement-recruiter/logo10.png" },
    { alt: "Archer", src: "/apply-now/image/placement-recruiter/logo22.png" },
    { alt: "EY", src: "/apply-now/image/placement-recruiter/logo23.png" },
    { alt: "CNH", src: "/apply-now/image/placement-recruiter/logo24.png" },
    { alt: "INFOSYS", src: "/apply-now/image/placement-recruiter/logo25.png" },
    { alt: "ASHOK", src: "/apply-now/image/placement-recruiter/logo26.png" },
    { alt: "ANAND", src: "/apply-now/image/placement-recruiter/logo27.png" },
    { alt: "YESBANK", src: "/apply-now/image/placement-recruiter/logo28.png" },
    { alt: "PhonePe", src: "/apply-now/image/placement-recruiter/logo29.png" },
    { alt: "Deloitte", src: "/apply-now/image/placement-recruiter/logo30.png" },
    { alt: "ACCENTURE", src: "/apply-now/image/placement-recruiter/logo31.png" },
    { alt: "BOB", src: "/apply-now/image/placement-recruiter/logo32.png" },
    { alt: "UPGRAD", src: "/apply-now/image/placement-recruiter/logo33.png" },
    { alt: "DECATHLON", src: "/apply-now/image/placement-recruiter/logo34.png" },
    { alt: "HDB", src: "/apply-now/image/placement-recruiter/logo35.png" },
    { alt: "HCL", src: "/apply-now/image/placement-recruiter/logo36.png" },
    { alt: "KPMG", src: "/apply-now/image/placement-recruiter/logo37.png" },
    { alt: "IBM", src: "/apply-now/image/placement-recruiter/logo38.png" },
    { alt: "ITC", src: "/apply-now/image/placement-recruiter/logo39.png" },
    { alt: "DS GROUP", src: "/apply-now/image/placement-recruiter/logo40.png" },
    { alt: "HITACHI", src: "/apply-now/image/placement-recruiter/logo41.png" },
    { alt: "SPARK", src: "/apply-now/image/placement-recruiter/logo42.png" },
    { alt: "AU", src: "/apply-now/image/placement-recruiter/logo43.png" },
    { alt: "DELL", src: "/apply-now/image/placement-recruiter/logo44.png" },
    { alt: "INFOEDGE", src: "/apply-now/image/placement-recruiter/logo45.png" },
    { alt: "PRISM", src: "/apply-now/image/placement-recruiter/logo46.png" },
    { alt: "SBI", src: "/apply-now/image/placement-recruiter/logo47.png" },
    { alt: "SBIOS", src: "/apply-now/image/placement-recruiter/logo48.png" },
    { alt: "KANSAI", src: "/apply-now/image/placement-recruiter/logo49.png" },
    { alt: "NAUKRI", src: "/apply-now/image/placement-recruiter/logo50.png" },
    { alt: "LAKSH", src: "/apply-now/image/placement-recruiter/logo51.png" },
    { alt: "HDFC", src: "/apply-now/image/placement-recruiter/logo52.png" },
    { alt: "OLN", src: "/apply-now/image/placement-recruiter/logo53.png" },
    { alt: "PROPERTY", src: "/apply-now/image/placement-recruiter/logo54.png" },
    { alt: "ANZ", src: "/apply-now/image/placement-recruiter/logo55.png" },
    { alt: "KPL", src: "/apply-now/image/placement-recruiter/logo56.png" },
    { alt: "TEAMC", src: "/apply-now/image/placement-recruiter/logo57.png" },
    { alt: "KOTAK", src: "/apply-now/image/placement-recruiter/logo58.png" },
    { alt: "SIMP", src: "/apply-now/image/placement-recruiter/logo59.png" },
    { alt: "LR", src: "/apply-now/image/placement-recruiter/logo60.png" },
    { alt: "SIMP", src: "/apply-now/image/placement-recruiter/logo61.png" },
    { alt: "RADISSON", src: "/apply-now/image/placement-recruiter/logo62.png" },
    { alt: "KENT", src: "/apply-now/image/placement-recruiter/logo63.png" },
    { alt: "Lifestyle", src: "/apply-now/image/placement-recruiter/logo64.png" },
    { alt: "AXIS", src: "/apply-now/image/placement-recruiter/logo65.png" },
    { alt: "BAJAJ", src: "/apply-now/image/placement-recruiter/logo66.png" },
    { alt: "DTDC", src: "/apply-now/image/placement-recruiter/logo67.png" },
    { alt: "TECHGO", src: "/apply-now/image/placement-recruiter/logo68.png" },
    { alt: "EDU", src: "/apply-now/image/placement-recruiter/logo69.png" },
    { alt: "LR", src: "/apply-now/image/placement-recruiter/logo70.png" },
    { alt: "AMAZON", src: "/apply-now/image/placement-recruiter/logo71.png" },
    { alt: "WIPRO", src: "/apply-now/image/placement-recruiter/logo72.png" },
    { alt: "CROMA", src: "/apply-now/image/placement-recruiter/logo73.png" },
    { alt: "BLINKIT", src: "/apply-now/image/placement-recruiter/logo74.png" },
    { alt: "CAFE", src: "/apply-now/image/placement-recruiter/logo75.png" },
    { alt: "BERGE", src: "/apply-now/image/placement-recruiter/logo76.png" },
    { alt: "DABUR", src: "/apply-now/image/placement-recruiter/logo77.png" },
    { alt: "INDIAMART", src: "/apply-now/image/placement-recruiter/logo78.png" },
    { alt: "ICICI", src: "/apply-now/image/placement-recruiter/logo79.png" },
    { alt: "UJJIVAN", src: "/apply-now/image/placement-recruiter/logo80.png" },
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
