import React from "react";

const Card = ({ imageUrl, number, description }) => {
    return (
        <div
            className="relative flex flex-col justify-end bg-cover bg-center text-left text-white"
            style={{
                backgroundImage: `url(${imageUrl})`,
                height: "600px",
                width: "430px", // Adjust this based on your exact image height
            }}
        >
            {/* Text Content */}
            <div className="p-10 mb-10">
                <h2 className="text-[5rem] leading-none font-FONT2">{number}</h2>
                <p className="mt-2 text-xl font-FONT1">{description}</p>
            </div>
        </div>
    );
};

export default Card;
