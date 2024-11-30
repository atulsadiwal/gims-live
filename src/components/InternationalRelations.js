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
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);

  const handleContentSwitch = () => {
    setActiveIndex1((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handleSecondCardSwitch = () => {
    setActiveIndex2((prevIndex) => (prevIndex + 1) % secondContent.length);
  };

  const handleThirdCardSwitch = () => {
    setActiveIndex3((prevIndex) => (prevIndex + 1) % secondContent.length);
  };

  const handleFourthCardSwitch = () => {
    setActiveIndex4((prevIndex) => (prevIndex + 1) % secondContent.length);
  };

  const handleFifthCardSwitch = () => {
    setActiveIndex5((prevIndex) => (prevIndex + 1) % secondContent.length);
  };

  useEffect(() => {
    const interval1 = setInterval(handleContentSwitch, 7000);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(handleSecondCardSwitch, 7000);
    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(handleThirdCardSwitch, 7000);
    return () => clearInterval(interval3);
  }, []);

  useEffect(() => {
    const interval4 = setInterval(handleFourthCardSwitch, 7000);
    return () => clearInterval(interval4);
  }, []);

  useEffect(() => {
    const interval5 = setInterval(handleFifthCardSwitch, 7000);
    return () => clearInterval(interval5);
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
        <div className="bg-[#15345d] text-white rounded-md shadow-md flex flex-col p-10 h-[35vh] relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              {content.map((item, index) => (
                <img
                  key={index}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 ${activeIndex1 === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              {content[activeIndex1].title}
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              {content[activeIndex1].text}
            </p>
          </div>
        </div>

        <div className="h-[35vh] w-full rounded-md  shadow-md">
          <img
            src="/image/students.jpg"
            alt="International Programs Image"
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>

        <div className="bg-[#b31a1a] text-white rounded-md shadow-md flex flex-col p-10 h-[35vh] relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              {secondContent.map((item, index) => (
                <img
                  key={index}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 ${activeIndex2 === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              {secondContent[activeIndex2].title}
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              {secondContent[activeIndex2].text}
            </p>
          </div>
        </div>

        <div className="bg-[#403c3d] text-white rounded-md shadow-md flex flex-col p-10 h-[35vh] relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              {thirdContent.map((item, index) => (
                <img
                  key={index}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 ${activeIndex3 === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              {thirdContent[activeIndex3].title}
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              {thirdContent[activeIndex3].text}
            </p>
          </div>
        </div>

        <div className="bg-[#441bb3] text-white rounded-md shadow-md flex flex-col p-10 h-[35vh] relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              {fourthContent.map((item, index) => (
                <img
                  key={index}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 ${activeIndex4 === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              {fourthContent[activeIndex4].title}
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              {fourthContent[activeIndex4].text}
            </p>
          </div>
        </div>

        <div className="bg-[#15345d] text-white rounded-md shadow-md flex flex-col p-10 h-[35vh] relative">
          <div className="flex items-center justify-center mb-4">
            <div className="w-24 h-24 relative">
              {fifthContent.map((item, index) => (
                <img
                  key={index}
                  src={item.imageSrc}
                  alt={item.alt}
                  className={`w-full h-full absolute transition-opacity duration-700 ${activeIndex5 === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-FONT2 text-xl mb-3">
              {fifthContent[activeIndex5].title}
            </h3>
            <p className="text-base font-novaReg leading-relaxed mb-4">
              {fifthContent[activeIndex5].text}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InternationalRelations;
