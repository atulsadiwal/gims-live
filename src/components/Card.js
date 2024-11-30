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
            <div className="p-10 mb-10 max-lg:p-8 max-lg:mb-8 max-md:p-6 max-md:mb-6 max-sm:p-4 max-sm:mb-4">
                <h2 className="text-[5rem] leading-none font-FONT2 max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">{number}</h2>
                <p className="mt-2 text-xl font-FONT1 max-md:text-lg max-sm:text-base">{description}</p>
            </div>
        </div>
    );
};

export default Card;
