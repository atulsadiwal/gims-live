// /* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";

const content = [
  {
    title: "Self-Directed Learning (SDL):",
    text: "An innovative approach that empowers students to harness their inherent potential through MOOCs Course, Research Paper Publication, Conference Paper Presentation, Live Project for minimum 15 days, External Academic participation, SSO (Self Society Organization).",
    alt: "International Summer/Winter Programs Icon",
    backgroundImage: "/image/1.webp",
  },
];

const secondContent = [
  {

    title: "Corporate Mentorship: ",
    text: "The students are mentored by the corporate personnel from the II trimester, where the students are guided on the various aspects of industry demands from the professionals.",
    alt: "Semester Abroad/Exchange Programs Icon",
    backgroundImage: "/image/2.webp",
  },
];

const thirdContent = [
  {
    title: "International Immersion Program(II) :",
    text: "Enriching 1-2 weeks overseas experience, complete with certifications from partner universities. Visited so far Mahsa University, Malaysia, De Montfort University, Dubai campus, Middlesex University, Dubai Campus, Curtin University, Singapore, and Politeknik Negeri, Bali.",
    alt: "Alternative Summer/Winter Icon",
    backgroundImage: "/image/3.webp",
  },
];

const fourthContent = [
  {
    title: "Incubation Centre: ",
    text: "Working closely with the Institute Innovation Councils (IICs), drives innovation and entrepreneurship through incubation support to help students refine their ideas and develop prototypes. InnovateUp, The GIMS incubation centre supports start-up creation by offering mentorship, funding opportunities, and networking connections for aspiring entrepreneurs. ",
    backgroundImage: "/image/4.webp",
  },
];

const fifthContent = [
  {
    title: "Non-credit inputs: ",
    text: "To support student growth and skill-building, the non-credit courses, designed in collaboration with our faculty and industry experts, cover critical areas including Microsoft Excel, Learning and Development, Reasoning, Soft Skills, Communication, and Aptitude Training are imparted. ",
    backgroundImage: "/image/5.webp",
  },
];

const sixthContent = [
  {
    title: "The Corporate Talk Series: ",
    text: "Corporate interaction is a regular affair at GIMS, through The Chanakya Talk Series (CTS), The Prabodhan Talk Series (PTS), The Samrik Talk Series (STS)and The HR Talk Series (HTS) inviting leaders from the corporate world, veterans from the Defence forces and administrative services and the professional at operational level in the corporate world.",
    backgroundImage: "/image/6.webp",
  },
];


const InternationalRelations = () => {
  const contentArrays = [content, secondContent, thirdContent, fourthContent, fifthContent, sixthContent];


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
            className={`text-black rounded-md shadow-md flex flex-col p-4 sm:p-6 md:p-8 h-[380px] relative transition-all duration-500`}
            style={{
              background: index === 1
                ? `linear-gradient(to bottom, rgba(173, 216, 230, 0.7), rgba(0, 0, 128, 0.7)), url(${process.env.PUBLIC_URL + contentArray[0].backgroundImage})`
                : `linear-gradient(to bottom,rgb(217, 228, 239),rgb(245, 219, 236))`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: index === 1 ? "white" : "black",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(to bottom, rgba(173, 216, 230, 0.7), rgba(0, 0, 128, 0.7)), url(${process.env.PUBLIC_URL + contentArray[0].backgroundImage})`;
              e.currentTarget.style.backgroundSize = "cover";
              e.currentTarget.style.backgroundPosition = "center";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              if (index !== 1) {
                e.currentTarget.style.background = `linear-gradient(to bottom,rgb(217, 228, 239),rgb(245, 219, 236))`;
                e.currentTarget.style.color = "black";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }
            }}
          >

            <div className="text-center">
              <h3 className="font-bold text-base sm:text-lg md:text-2xl mb-2">
                {contentArray[0].title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
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