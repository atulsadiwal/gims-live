import React, { useEffect, useRef, useState } from "react";

const Collaborations = () => {
    const logos = [
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo1.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo2.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo3.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo4.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo5.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo6.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo7.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo8.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo9.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo10.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo11.png",
        "/apply-now/image/affiliations-accreditations-and-collaborations​/logo12.png",
    ];

    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;

        let animationFrame;
        let speed = 2; // Base speed
        const step = () => {
            if (slider) {
                slider.scrollLeft += isHovered ? speed * 0.5 : speed;
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0; // Reset for seamless loop
                }
            }
            animationFrame = requestAnimationFrame(step);
        };
        animationFrame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrame);
    }, [isHovered]);

    return (
        <div className="w-full overflow-hidden py-10 bg-gray-50">
            <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-FONT2 text-black mb-8">
                Affiliations, Accreditations & Collaborations
            </h3>
            <div
                ref={sliderRef}
                className="flex items-center gap-8 overflow-hidden whitespace-nowrap"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Duplicate logos for seamless effect */}
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-28 md:w-32 h-28 md:h-32 relative group"
                    >
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Glow and shadow effects */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collaborations;
