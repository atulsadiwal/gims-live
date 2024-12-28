import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Building } from 'lucide-react';

export const collaborationsLogo = [
    { alt: "COURSERA", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo10.webp" },
    { alt: "Archer", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo22.webp" },
    { alt: "EY", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo23.webp"},
    { alt: "CNH", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo24.webp"},
    { alt: "INFOSYS", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo25.webp" },
    { alt: "ASHOK", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo26.webp" },
    { alt: "ANAND", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo27.webp" },
    { alt: "YESBANK", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo28.webp" },
    { alt: "PhonePe", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo29.webp" },
    { alt: "Deloitte", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo30.webp" },
    { alt: "ACCENTURE", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo31.webp" },
    { alt: "BOB", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo32.webp" },
    { alt: "UPGRAD", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo33.webp" },
    { alt: "DECATHLON", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo34.webp" },
    { alt: "HDB", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo35.webp" },
    { alt: "HCL", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo36.webp" },
    { alt: "KPMG", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo37.webp" },
    { alt: "IBM", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo38.webp" },
    { alt: "ITC", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo39.webp" },
    { alt: "DS GROUP", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo40.webp" },
    { alt: "HITACHI", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo41.webp" },
    { alt: "SPARK", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo42.webp" },
    { alt: "AU", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo43.webp" },
    { alt: "DELL", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo44.webp" },
    { alt: "INFOEDGE", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo45.webp" },
    { alt: "PRISM", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo46.webp" },
    { alt: "SBI", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo47.webp" },
    { alt: "SBIOS", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo48.webp" },
    { alt: "KANSAI", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo49.webp" },
    { alt: "NAUKRI", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo50.webp" },
    { alt: "LAKSH", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo51.webp" },
    { alt: "HDFC", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo52.webp" },
    { alt: "OLN", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo53.webp" },
    { alt: "PROPERTY", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo54.webp" },
    { alt: "ANZ", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo55.webp" },
    { alt: "KPL", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo56.webp" },
    { alt: "TEAMC", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo57.webp" },
    { alt: "KOTAK", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo58.webp" },
    { alt: "SIMP", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo59.webp" },
    { alt: "LR", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo60.webp" },
    { alt: "SIMP", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo61.webp" },
    { alt: "RADISSON", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo62.webp" },
    { alt: "KENT", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo63.webp" },
    { alt: "Lifestyle", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo64.webp" },
    { alt: "AXIS", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo65.webp" },
    { alt: "BAJAJ", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo66.webp" },
    { alt: "DTDC", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo67.webp" },
    { alt: "TECHGO", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo68.webp" },
    { alt: "EDU", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo69.webp" },
    { alt: "LR", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo70.webp" },
    { alt: "AMAZON", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo71.webp" },
    { alt: "WIPRO", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo72.webp" },
    { alt: "CROMA", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo73.webp" },
    { alt: "BLINKIT", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo74.webp" },
    { alt: "CAFE", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo75.webp" },
    { alt: "BERGE", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo76.webp" },
    { alt: "DABUR", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo77.webp" },
    { alt: "INDIAMART", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo78.webp" },
    { alt: "ICICI", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo79.webp" },
    { alt: "UJJIVAN", src: "https://csip-image.blr1.digitaloceanspaces.com/csip-image/img/content/logo80.webp" },
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
                                        loading="eager"
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
                                        loading="eager"
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
                                        loading="eager"
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
