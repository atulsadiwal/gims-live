import React from "react";
import Card from "./Card";

const CardsContainer = () => {
    return (
        <div className="bg-white">
            <div className="text-center py-8 bg-white max-sm:py-4">
                <h1 className="text-3xl font-FONT2 max-sm:text-xl">Tutelage-An Exclusive Corporate Readiness Training Programme</h1>
                <div className="flex justify-center flex-wrap mt-4 px-4 text-lg font-FONT1 leading-5 text-gray-600 max-w-4xl mx-auto max-sm:text-sm">
                    <p className="mr-2">
                    GIMS, Greater Noida, proudly launches "Tutelage," a transformative training program featuring India's Youth Icon, Mr. Sonu Sharma, motivational speaker and corporate trainer,his
                    unique collaboration between GIMS' Learning and Development Department and Mr. Sonu Sharma empowers students to boost their self-confidence, enhance learning capabilities,
                    and prepare for the challenges of the corporate world.
                    </p>
                </div>
            </div>
            <div className="overflow-x-auto custom-scrollbar .overflow-x-auto {-webkit-overflow-scrolling: touch;}">
                <div
                    className="flex flex-wrap gap-6 justify-center p-2">
                    <Card
                        imageUrl="/image/gims1.png"
                        number="150+"
                        description="Start-ups running very successfully"
                    />
                    <Card
                        imageUrl="/image/gims2.png"
                        number="7"
                        description="Start-ups Recognised by Start-up India"
                    />
                    <Card
                        imageUrl="/image/gims3.png"
                        number="50+"
                        description="Companies with more than 50 Lakh Turnover"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardsContainer;
