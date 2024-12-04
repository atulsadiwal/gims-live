import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Building } from 'lucide-react';

export const collaborationsLogo = [
    { alt: "NHRD", src: "/image/recruiter/logo7.webp" },
    { alt: "DCAL", src: "/image/recruiter/logo8.webp" },
    { alt: "AIMS", src: "/image/recruiter/logo9.webp" },
    { alt: "COURSERA", src: "/image/recruiter/logo10.webp" },
    { alt: "ATAL", src: "/image/recruiter/logo11.webp" },
    { alt: "SOI", src: "/image/recruiter/logo12.webp" },
    { alt: "AIT", src: "/image/recruiter/logo13.webp" },
    { alt: "LSUS", src: "/image/recruiter/logo14.webp" },
    { alt: "BFSI", src: "/image/recruiter/logo15.webp" },
    { alt: "KATHMANDU", src: "/image/recruiter/logo16.webp" },
    { alt: "MAHSA", src: "/image/recruiter/logo17.webp" },
    { alt: "DE MONTFORT", src: "/image/recruiter/logo18.webp" },
    { alt: "XYZ", src: "/image/recruiter/logo19.webp" },
    { alt: "Financial University", src: "/image/recruiter/logo20.webp" },
    { alt: "Uniglobe", src: "/image/recruiter/logo21.webp" },
    { alt: "Archer", src: "/image/recruiter/logo22.webp" },
    { alt: "EY", src: "/image/recruiter/logo23.webp" },
    { alt: "CNH", src: "/image/recruiter/logo24.webp" },
    { alt: "INFOSYS", src: "/image/recruiter/logo25.webp" },
    { alt: "ASHOK", src: "/image/recruiter/logo26.webp" },
    { alt: "ANAND", src: "/image/recruiter/logo27.webp" },
    { alt: "YESBANK", src: "/image/recruiter/logo28.webp" },
    { alt: "PhonePe", src: "/image/recruiter/logo29.webp" },
    { alt: "Deloitte", src: "/image/recruiter/logo30.webp" },
    { alt: "ACCENTURE", src: "/image/recruiter/logo31.webp" },
    { alt: "BOB", src: "/image/recruiter/logo32.webp" },
    { alt: "UPGRAD", src: "/image/recruiter/logo33.webp" },
    { alt: "DECATHLON", src: "/image/recruiter/logo34.webp" },
    { alt: "HDB", src: "/image/recruiter/logo35.webp" },
    { alt: "HCL", src: "/image/recruiter/logo36.webp" },
    { alt: "KPMG", src: "/image/recruiter/logo37.webp" },
    { alt: "IBM", src: "/image/recruiter/logo38.webp" },
    { alt: "ITC", src: "/image/recruiter/logo39.webp" },
    { alt: "DS GROUP", src: "/image/recruiter/logo40.webp" },
    { alt: "HITACHI", src: "/image/recruiter/logo41.webp" },
    { alt: "SPARK", src: "/image/recruiter/logo42.webp" },
    { alt: "AU", src: "/image/recruiter/logo43.webp" },
    { alt: "DELL", src: "/image/recruiter/logo44.webp" },
    { alt: "INFOEDGE", src: "/image/recruiter/logo45.webp" },
    { alt: "PRISM", src: "/image/recruiter/logo46.webp" },
    { alt: "SBI", src: "/image/recruiter/logo47.webp" },
    { alt: "SBIOS", src: "/image/recruiter/logo48.webp" },
    { alt: "KANSAI", src: "/image/recruiter/logo49.webp" },
    { alt: "NAUKRI", src: "/image/recruiter/logo50.webp" },
    { alt: "LAKSH", src: "/image/recruiter/logo51.webp" },
    { alt: "HDFC", src: "/image/recruiter/logo52.webp" },
    { alt: "OLN", src: "/image/recruiter/logo53.webp" },
    { alt: "PROPERTY", src: "/image/recruiter/logo54.webp" },
    { alt: "ANZ", src: "/image/recruiter/logo55.webp" },
    { alt: "KPL", src: "/image/recruiter/logo56.webp" },
    { alt: "TEAMC", src: "/image/recruiter/logo57.webp" },
    { alt: "KOTAK", src: "/image/recruiter/logo58.webp" },
    { alt: "SIMP", src: "/image/recruiter/logo59.webp" },
    { alt: "LR", src: "/image/recruiter/logo60.webp" },
    { alt: "SIMP", src: "/image/recruiter/logo61.webp" },
    { alt: "RADISSON", src: "/image/recruiter/logo62.webp" },
    { alt: "KENT", src: "/image/recruiter/logo63.webp" },
    { alt: "Lifestyle", src: "/image/recruiter/logo64.webp" },
    { alt: "AXIS", src: "/image/recruiter/logo65.webp" },
    { alt: "BAJAJ", src: "/image/recruiter/logo66.webp" },
    { alt: "DTDC", src: "/image/recruiter/logo67.webp" },
    { alt: "TECHGO", src: "/image/recruiter/logo68.webp" },
    { alt: "EDU", src: "/image/recruiter/logo69.webp" },
    { alt: "LR", src: "/image/recruiter/logo70.webp" },
    { alt: "AMAZON", src: "/image/recruiter/logo71.webp" },
    { alt: "WIPRO", src: "/image/recruiter/logo72.webp" },
    { alt: "CROMA", src: "/image/recruiter/logo73.webp" },
    { alt: "BLINKIT", src: "/image/recruiter/logo74.webp" },
    { alt: "CAFE", src: "/image/recruiter/logo75.webp" },
    { alt: "BERGE", src: "/image/recruiter/logo76.webp" },
    { alt: "DABUR", src: "/image/recruiter/logo77.webp" },
    { alt: "INDIAMART", src: "/image/recruiter/logo78.webp" },
    { alt: "ICICI", src: "/image/recruiter/logo79.webp" },
    { alt: "UJJIVAN", src: "/image/recruiter/logo80.webp" },
    { alt: "Sheela", src: "/image/recruiter/logo81.webp" },
];

const group1 = collaborationsLogo.slice(0, 25);
const group2 = collaborationsLogo.slice(25, 50);
const group3 = collaborationsLogo.slice(50);

const PlacementRecruiters = () => {
    const breakpoints = {
        320: { slidesPerView: 2 },
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
                                <div className="flex justify-center items-center border rounded-md h-16 max-sm:h-12">
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
                                <div className="flex justify-center items-center border rounded-md h-16 max-sm:h-12">
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
                                <div className="flex justify-center items-center border rounded-md h-16 max-sm:h-12">
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
