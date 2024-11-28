import { Check } from "lucide-react";
import React from "react";

const Top = () => {
    return (
        <>
            <section className="max-w-[1400px] mx-auto px-2 py-10 flex w-full bg-cover bg-center" style={{ backgroundImage: "url(/image/pgdmBG.jpg)" }}>
                <div className="w-5/12">
                    <h2 className="text-[#4B3B8E] text-sm font-novaReg tracking-widest mb-4">WHY CHOOSE US</h2>

                    <h3 className="text-4xl md:text-5xl font-FONT2 mb-6">Why GIMS University</h3>

                    <p className="text-gray-600 max-w-2xl mb-12 font-FONT1">
                        GIMS University, Greater Noida, is a premier AICTE-approved institute accredited by HLACT, UK, and partnered with IIM Bangalore for certification courses. With global collaborations, industry-driven curriculum, and experiential learning, it fosters entrepreneurial intent and holistic growth. Join GNIOT University for world-class education and a transformative learning experience.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="space-y-4 font-FONT1">
                            <div className="flex items-center gap-3">
                                <Check className="text-[#4B3B8E]" />
                                <span>Graduate Programs</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-[#4B3B8E]" />
                                <span>Undergraduate Programs</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-[#4B3B8E]" />
                                <span>Doctoral Degrees</span>
                            </div>
                        </div>
                        <div className="space-y-4 font-FONT1">
                            <div className="flex items-center gap-3">
                                <Check className="text-[#4B3B8E]" />
                                <span>International Hubs</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-[#4B3B8E]" />
                                <span>Alumni & Giving</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="text-[#4B3B8E]" />
                                <span>Global Students</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="flex flex-col items-baseline gap-1">
                            <span className="text-5xl font-FONT2">21+</span>
                            <span className="text-gray-600 font-FONT1 ml-3">Years Of Experience</span>
                        </div>
                        <div className="flex flex-col items-baseline gap-1">
                            <span className="text-5xl font-FONT2">5000</span>
                            <span className="text-gray-600 font-FONT1 ml-3">Global Students</span>
                        </div>
                    </div>

                    <button className="py-3 px-10 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-blue-500 hover:text-blue-600 text-white w-max hover:border hover:border-blue-300 hover:bg-transparent hover:border-b-4 hover:transform transition duration-200 ease-linear scale-y-105 tracking-widest">READ MORE</button>
                </div>
            </section>
        </>
    );
};

export default Top;
