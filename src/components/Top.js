import { Check } from "lucide-react";
import React from "react";

const Top = () => {
    return (
        <>
            <section className="bg-BG6 bg-cover bg-center">
                <div className="max-w-[1400px] max-2xl:max-w-6xl max-xl:px-10 mx-auto py-10 w-full max-md:py-6 max-sm:py-4 max-sm:px-5">
                    <h2 className="text-[#3e2897] text-sm font-FONT2 tracking-widest mb-4 max-md:mb-3 max-sm:mb-2 max-sm:text-[10px]">WHY CHOOSE US</h2>

                    <h3 className="text-5xl font-FONT2 mb-6 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-md:mb-4 max-sm:mb-3">Why GIMS</h3>

                    <p className="text-base text-gray-600 max-w-2xl mb-12 font-FONT1 max-md:mb-6 max-sm:text-sm max-sm:mb-4 max-xl:max-w-lg">
                    The PGDM program at GIMS, Greater Noida, provides students with a unique opportunity to specialize in two key management areas, aligning with the needs of the modern workplace. The program's curriculum combines traditional management concepts with practical experience and modern learning methods, ensuring students are well-prepared for the challenges of today's competitive business environment. By developing both their technical skills and interpersonal abilities, students gain the tools necessary to succeed in their careers.
                    </p>

                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-16 max-w-2xl max-md:mb-8 max-md:gap-6 max-sm:gap-4 max-sm:mb-4">
                        <div className="space-y-4 font-FONT1 max-md:space-y-3 max-sm:space-y-2">
                            <div className="flex items-center gap-3 max-sm:text-sm">
                                <Check className="text-[#4B3B8E]" />
                                <span>Graduate Programs</span>
                            </div>
                            <div className="flex items-center gap-3 max-sm:text-sm">
                                <Check className="text-[#4B3B8E]" />
                                <span>Undergraduate Programs</span>
                            </div>
                            <div className="flex items-center gap-3 max-sm:text-sm">
                                <Check className="text-[#4B3B8E]" />
                                <span>Doctoral Degrees</span>
                            </div>
                        </div>
                        <div className="space-y-4 font-FONT1 max-md:space-y-3 max-sm:space-y-2">
                            <div className="flex items-center gap-3 max-sm:text-sm">
                                <Check className="text-[#4B3B8E]" />
                                <span>International Hubs</span>
                            </div>
                            <div className="flex items-center gap-3 max-sm:text-sm">
                                <Check className="text-[#4B3B8E]" />
                                <span>Alumni & Giving</span>
                            </div>
                            <div className="flex items-center gap-3 max-sm:text-sm">
                                <Check className="text-[#4B3B8E]" />
                                <span>Global Students</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-2xl grid md:grid-cols-2 gap-8 mb-12 max-md:mb-8 max-md:gap-6 max-sm:mb-4 max-sm:gap-4">
                        <div className="flex flex-col items-baseline gap-1">
                            <span className="text-5xl font-FONT2 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">21+</span>
                            <span className="text-gray-600 font-FONT1 ml-3 max-sm:text-sm">Years Of Experience</span>
                        </div>
                        <div className="flex flex-col items-baseline gap-1">
                            <span className="text-5xl font-FONT2 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">5000</span>
                            <span className="text-gray-600 font-FONT1 ml-3 max-sm:text-sm">Global Students</span>
                        </div>
                    </div>

                    <button className="py-3 px-10 max-sm:py-2 max-sm:px-5 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-blue-500 hover:text-blue-600 text-white w-max hover:border hover:border-blue-300 hover:bg-transparent hover:border-b-4 hover:transform transition duration-200 ease-linear scale-y-105 tracking-widest max-md:mt-4 max-sm:text-sm max-sm:mt-3">READ MORE</button>
                </div>
            </section>
        </>
    );
};

export default Top;
