import React from "react";

const Top = () => {
    return (
        <>
            <section className="bg-BG6 bg-cover bg-center bg-no-repeat bg-blue-800/70 bg-blend-multiply max-sm:h-fit">
                <div className="max-w-[1400px] max-2xl:max-w-6xl max-xl:px-10 mx-auto py-10 w-full max-md:py-6 max-sm:py-4 max-sm:px-5">
                    <h2 className="text-gray-200 text-sm font-FONT2 tracking-widest mb-4 max-md:mb-3 max-sm:mb-2 max-sm:text-[10px]">WHY CHOOSE US</h2>

                    <h3 className="text-5xl text-gray-200 font-FONT2 mb-6 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl max-md:mb-4 max-sm:mb-3">Why GIMS</h3>

                    <p className="text-base text-white max-w-2xl mb-8 font-novaReg max-md:mb-6 max-sm:text-sm max-sm:mb-4 max-xl:max-w-lg">
                    The PGDM program at GIMS, Greater Noida, provides students with a unique opportunity to specialize in two key management areas, aligning with the needs of the modern workplace. The program's curriculum combines traditional management concepts with practical experience and modern learning methods, ensuring students are well-prepared for the challenges of today's competitive business environment. By developing both their technical skills and interpersonal abilities, students gain the tools necessary to succeed in their careers.
                    </p>

                    <button className="py-3 px-10 max-sm:py-2 max-sm:px-5 mt-5 text-[15px] rounded-xl font-novaBold uppercase bg-blue-500 hover:text-blue-600 text-white w-max hover:border hover:border-blue-300 hover:bg-transparent hover:border-b-4 hover:transform transition duration-200 ease-linear scale-y-105 tracking-widest max-md:mt-4 max-sm:text-sm max-sm:mt-3">READ MORE</button>
                </div>
            </section>
        </>
    );
};

export default Top;
