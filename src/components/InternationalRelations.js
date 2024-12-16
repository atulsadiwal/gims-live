/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from "react";

const content = [
  {
    title: "Self-Directed Learning (SDL):",
    text: "An innovative approach that empowers students to harness their inherent potential through MOOCs Course, Research Paper Publication, Conference Paper Presentation, Live Project for minimum 15 days, External Academic participation, SSO (Self Society Organization).",
    imageSrc: "/image/international-collaborations​/logo8.png",
    alt: "International Summer/Winter Programs Icon",
  },
];

const secondContent = [
  {
    title: "International Immersion Program(II) :",
    text: "Enriching 1-2 weeks overseas experience, complete with certifications from partner universities. Visited so far Mahsa University, Malaysia, De Montfort University, Dubai campus, Middlesex University, Dubai Campus, Curtin University, Singapore, and Politeknik Negeri, Bali.",
    imageSrc: [
      "/image/international-collaborations​/logo1.png",
      "/image/international-collaborations​/logo2.png",
      "/image/international-collaborations​/logo3.png",
      "/image/international-collaborations​/logo4.png",
      "/image/international-collaborations​/logo5.png",
      "/image/international-collaborations​/logo6.png",
      "/image/international-collaborations​/logo7.png",
      "/image/international-collaborations​/logo8.png",
      "/image/international-collaborations​/logo9.png",
      "/image/international-collaborations​/udlogo10.png"
    ],
    alt: "Alternative Summer/Winter Icon",
  },
];

const thirdContent = [
  {
    title: "Corporate Mentorship: ",
    text: "The students are mentored by the corporate personnel from the II trimester, where the students are guided on the various aspects of industry demands from the professionals.",
    imageSrc: "/image/international-collaborations​/logo1.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
];

const fourthContent = [
  {
    title: "Incubation Centre:",
    text: "Working closely with the Institute Innovation Councils (IICs), drives innovation and entrepreneurship through incubation support to help students refine their ideas and develop prototypes. InnovateUp, The GIMS incubation centre supports start-up creation by offering mentorship, funding opportunities, and networking connections for aspiring entrepreneurs.",
    imageSrc: "/image/international-collaborations​/logo2.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
];

const fifthContent = [
  {
    title: "Non-credit inputs:",
    text: "To support student growth and skill-building, the non-credit courses, designed in collaboration with our faculty and industry experts, cover critical areas including Microsoft Excel, Learning and Development, Reasoning, Soft Skills, Communication, and Aptitude Training are imparted.",
    imageSrc: "/image/international-collaborations​/logo4.png",
    alt: "Semester Abroad/Exchange Programs Icon",
  },
];

const sixthContent = [
  {
    title: "The Corporate Talk Series: ",
    text: "Corporate interaction is a regular affair at GIMS, through The Chanakya Talk Series (CTS), The Prabodhan Talk Series (PTS), The Samrik Talk Series (STS) and The HR Talk Series (HTS) inviting leaders from the corporate world, veterans from the Defence forces and administrative services and the professional at operational level in the corporate world.",
    imageSrc: "/image/international-collaborations​/logo6.png",
    alt: "Corporate Talk Series Icon",
  },
];

const InternationalRelations = () => {
  const contentArrays = [content, secondContent, thirdContent, fourthContent, fifthContent, sixthContent];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % secondContent[0].imageSrc.length);
    }, 3000); // change the image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 bg-gray-100 px-3">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-FONT2 text-center mb-4">
        Salient Features of the Programme
      </h2>
      <p className="text-center font-FONT1 text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
        Offers exclusive opportunities to explore the world.
      </p>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {contentArrays.map((contentArray, index) => (
          <div
            key={index}
            className={`${index === 0
              ? "bg-[#15345d]"
              : index === 1
                ? "bg-[#b31a1a]"
                : index === 2
                  ? "bg-[#403c3d]"
                  : index === 3
                    ? "bg-[#441bb3]"
                    : index === 4
                      ? "bg-[#15345d]"
                      : "bg-[#3da571]"} text-white rounded-md shadow-md flex flex-col p-4 sm:p-6 md:p-8 h-[380px] relative`}
          >
            <div className="flex items-center justify-center mb-4 h-[100px]">
              {index === 1 && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative bg-white flex justify-center items-center rounded-full overflow-hidden">
                  <img
                    src={secondContent[0].imageSrc[currentImageIndex]}
                    alt={secondContent[0].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              {index !== 1 && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative bg-white flex justify-center items-center rounded-full overflow-hidden">
                  <img
                    src={contentArray[0].imageSrc}
                    alt={contentArray[0].alt}
                    className="w-full h-full object-contain transition-opacity duration-700 p-3 opacity-100"
                  />
                </div>
              )}
            </div>
            <div className="text-center">
              <h3 className="font-FONT2 text-base sm:text-lg md:text-xl mb-2">
                {contentArray[0].title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-novaReg leading-relaxed">
                {contentArray[0].text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalRelations;
