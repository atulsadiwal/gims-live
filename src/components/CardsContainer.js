import React from "react";
import Card from "./Card";

const CardsContainer = () => {
    return (
        <div className="bg-[#f8f9fd] py-8">
            <div className="text-center max-sm:py-4">
                <h1 className="text-5xl font-FONT2 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">Tutelage-An Exclusive Corporate Readiness
                    <br />
                    Training Programme</h1>
                <div className="flex justify-center flex-wrap mt-4 px-4 py-3 text-lg font-FONT1 leading-5 text-gray-600 max-w-4xl mx-auto max-sm:text-sm">
                    <p className="">
                        GIMS, Greater Noida, proudly launches "Tutelage," a transformative training program featuring India's Youth Icon, Mr. Sonu Sharma, motivational speaker and corporate trainer,his unique collaboration between GIMS' Learning and Development Department and Mr. Sonu Sharma empowers students to boost their self-confidence, enhance learning capabilities, and prepare for the challenges of the corporate world.
                    </p>
                </div>
            </div>
            <div className="overflow-x-auto custom-scrollbar .overflow-x-auto {-webkit-overflow-scrolling: touch;}">
                <div
                    className="flex flex-wrap gap-6 justify-center p-2">
                    <Card
                        imageUrl="/image/gims4.jpg"
                    />
                    <Card
                        imageUrl="/image/gims5.jpg"
                    />
                    <Card
                        imageUrl="/image/gims6.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardsContainer;
