/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from "react";

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

const secondContent = [
  {
    title: "International Academic Exchange",
    text: "Pursue your degree abroad for a semester to gain unique academic insights and international connections that will benefit your career.",
    imageSrc: "/image/logos/logo15.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
  {
    title: "Student Exchange Programs",
    text: "Join student exchange programs to explore different academic cultures and gain a global perspective.",
    imageSrc: "/image/logos/logo16.png",
    alt: "Student Exchange Programs Icon",
  },
];

const thirdContent = [
  {
    title: "International Academic Exchange",
    text: "Pursue your degree abroad for a semester to gain unique academic insights and international connections that will benefit your career.",
    imageSrc: "/image/logos/logo17.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
  {
    title: "Student Exchange Programs",
    text: "Join student exchange programs to explore different academic cultures and gain a global perspective.",
    imageSrc: "/image/logos/logo18.png",
    alt: "Student Exchange Programs Icon",
  },
];

const fourthContent = [
  {
    title: "International Academic Exchange",
    text: "Pursue your degree abroad for a semester to gain unique academic insights and international connections that will benefit your career.",
    imageSrc: "/image/logos/logo31.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
  {
    title: "Student Exchange Programs",
    text: "Join student exchange programs to explore different academic cultures and gain a global perspective.",
    imageSrc: "/image/logos/logo19.png",
    alt: "Student Exchange Programs Icon",
  },
];

const fifthContent = [
  {
    title: "International Academic Exchange",
    text: "Pursue your degree abroad for a semester to gain unique academic insights and international connections that will benefit your career.",
    imageSrc: "/image/logos/logo20.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
  {
    title: "Student Exchange Programs",
    text: "Join student exchange programs to explore different academic cultures and gain a global perspective.",
    imageSrc: "/image/logos/logo22.jpg",
    alt: "Student Exchange Programs Icon",
  },
];

const InternationalRelations = () => {
  const [activeIndexes, setActiveIndexes] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) => {
        // Increment the first two values, reset them when they reach 5
        const newFirstValue = prev[0] === 1 ? 0 : prev[0] + 1;
        const newSecondValue = prev[1] === 1 ? 0 : prev[1] + 1;
        const newThirdValue = prev[2] === 1 ? 0 : prev[2] + 1;
        const newFValue = prev[3] === 1 ? 0 : prev[3] + 1;
        const newFiveValue = prev[4] === 1 ? 0 : prev[4] + 1;

        return [
          newFirstValue,  // Updated first value
          newSecondValue, // Updated second value
          newThirdValue,        // Keep the third value the same
          newFValue,        // Keep the fourth value the same
          newFiveValue,        // Keep the fifth value the same
        ];
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const contentArrays = [content, secondContent, thirdContent, fourthContent, fifthContent];

  return (
    <div className="py-10 bg-gray-100 px-3">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-FONT2 text-center mb-4">
      International Immersion Program (IIP)
      </h2>
      <p className="text-center font-FONT1 text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
        Offers exclusive opportunities to explore the world.
      </p>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        <div className="bg-[#15345d] text-white rounded-md shadow-md flex flex-col p-4 sm:p-6 md:p-8 h-[300px] relative">
          <div className="flex items-center justify-center mb-4 h-[100px]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full bg-white">
              {content.map((item, idx) => (
                <img key={idx} src={item.imageSrc} alt={item.alt} className={`w-full h-full absolute transition-opacity duration-700 p-3 rounded-full ${activeIndexes[0] === idx ? "opacity-100" : "opacity-0"}`} />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-base sm:text-lg md:text-xl mb-2">
              {content[activeIndexes[0]] ? content[activeIndexes[0]].title : 'Loading...'}
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-novaReg leading-relaxed">
              {content[activeIndexes[0]] ? content[activeIndexes[0]].text : 'Loading...'}
            </p>
          </div>
        </div>

        <div className="h-[300px] w-full rounded-md shadow-md">
          <img
            src="/image/students.jpg"
            alt="International Programs Image"
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>

        <div className="bg-[#b31a1a] text-white rounded-md shadow-md flex flex-col p-4 sm:p-6 md:p-8 h-[300px] relative">
          <div className="flex items-center justify-center mb-4 h-[100px]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full bg-white">
              {secondContent.map((item, idx) => (
                <img
                  key={idx}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 p-4 ${activeIndexes[1] === idx ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-base sm:text-lg md:text-xl mb-2">
              {secondContent[activeIndexes[1]] ? secondContent[activeIndexes[1]].title : 'Loading...'}
            </h3>
            <p className="text-xs sm:text-sm md:text-base font-novaReg leading-relaxed">
              {secondContent[activeIndexes[1]] ? secondContent[activeIndexes[1]].text : 'Loading...'}
            </p>
          </div>
        </div>

        {contentArrays.slice(2).map((contentArray, index) => (
          <div key={index + 2} className={`${ index === 0 ? 'bg-[#403c3d]' : index === 1 ? 'bg-[#441bb3]' : 'bg-[#15345d]' } text-white rounded-md shadow-md flex flex-col p-4 sm:p-6 md:p-8 h-[300px] relative`}>
            <div className="flex items-center justify-center mb-4 h-[100px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full bg-white">
                {contentArray.map((item, idx) => (
                  <img
                    key={idx}
                    src={item.imageSrc}
                    alt={item.alt}
                    className={`w-full h-full object-contain absolute transition-opacity duration-700 p-3 ${activeIndexes[index + 2] === idx ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-FONT2 text-base sm:text-lg md:text-xl mb-2">
                {contentArray[activeIndexes[index + 2]] ? contentArray[activeIndexes[index + 2]].title : 'Loading...'}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-novaReg leading-relaxed">
                {contentArray[activeIndexes[index + 2]] ? contentArray[activeIndexes[index + 2]].text : 'Loading...'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalRelations;
