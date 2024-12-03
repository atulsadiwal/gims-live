import React from "react";

const Card = ({ imageUrl, number, description }) => {
    return (
        <div
            className="relative flex flex-col justify-end bg-cover bg-center text-left text-white"
            style={{
                backgroundImage: `url(${imageUrl})`,
                height: "600px",
                width: "430px",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"/>
            <div className="relative p-10 mb-10 max-lg:p-8 max-lg:mb-8 max-md:p-6 max-md:mb-6 max-sm:p-4 max-sm:mb-4">
                <h2 className="text-[5rem] leading-none font-FONT2">{number}</h2>
                <p className="mt-2 text-xl font-FONT1">{description}</p>
            </div>
        </div>
    );
};

export default Card;
