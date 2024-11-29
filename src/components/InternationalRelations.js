import React, { useState, useEffect } from "react";

const InternationalRelations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const content = [
    {
      title: "Global Summer & Winter Opportunities",
      text: "Experience the world through condensed summer and winter programs, designed to blend academics with global cultural exploration.",
      imageSrc: "/image/logos/logo13.png",
      alt: "International Summer/Winter Programs Icon",
    },
    {
      title: "Alternative Summer & Winter Programs",
      text: "Explore new adventures with alternative summer and winter programs that focus on expanding your global perspective.",
      imageSrc: "/image/logos/logo14.png",
      alt: "Alternative Summer/Winter Icon",
    },
  ];

  const handleContentSwitch = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  useEffect(() => {
    const interval = setInterval(handleContentSwitch, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-FONT2 text-center mb-6">
        OUR OFFICE OF INTERNATIONAL RELATIONS
      </h2>
      <p className="text-center font-FONT1 mb-10 text-gray-600">
        offers exclusive opportunities to explore the world
      </p>
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 place-items-center gap-5">
        <div className="bg-[#15345d] text-white rounded-md shadow-md flex flex-col items-center justify-center p-10 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              {content.map((item, index) => (
                <img
                  key={index}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              {content[activeIndex].title}
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              {content[activeIndex].text}
            </p>
          </div>
        </div>
        <div className="bg-[#b31a1a] text-white rounded-md shadow-md flex flex-col items-center justify-center p-10 relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              <img
                src="/image/icons/refresh-icon.webp"
                alt="Semester Abroad/Exchange Programs Icon"
                className="w-full h-full absolute bottom-5 left-10"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              International Academic Exchange
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              Pursue your degree abroad for a semester to gain unique academic insights and international connections that will benefit your career.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default InternationalRelations;
