import React from "react";

const InternationalRelations = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-FONT2 text-center mb-6">
        OUR OFFICE OF INTERNATIONAL RELATIONS
      </h2>
      <p className="text-center font-FONT1 mb-10 text-gray-600">
        offers exclusive opportunities to explore the world
      </p>
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 place-items-center gap-5">
        <div className="bg-[#15345d] text-white rounded-md shadow-md flex flex-col h-[30vh] p-10 relative">
          <h3 className="font-FONT2 text-xl text-left mb-3">
            Global Summer & Winter Opportunities
          </h3>
          <p className="text-base font-novaReg text-left leading-relaxed mb-4">
            Experience the world through condensed summer and winter programs, designed to blend academics with global cultural exploration.
          </p>
          <img
            src="/image/icons/globe-icon.webp"
            alt="International Summer/Winter Programs Icon"
            className="w-12 h-12 absolute bottom-5 left-10"
          />
        </div>
        <div className="h-[30vh] w-full rounded-md shadow-md">
          <img
            src="/image/students.jpg"
            alt="International Programs Image"
            className="w-full h-full object-cover object-top rounded-md"
          />
        </div>
        <div className="bg-[#b31a1a] text-white rounded-md shadow-md flex flex-col h-[30vh] p-10 relative">
          <h3 className="font-FONT2 text-xl text-left mb-3">
            International Academic Exchange
          </h3>
          <p className="text-base font-novaReg text-left leading-relaxed mb-4">
            Pursue your degree abroad for a semester to gain unique academic insights and international connections that will benefit your career.
          </p>
          <img
            src="/image/icons/refresh-icon.webp"
            alt="Semester Abroad/Exchange Programs Icon"
            className="w-12 h-12 absolute bottom-5 left-10"
          />
        </div>
        <div className="bg-[#403c3d] text-white rounded-md shadow-md flex flex-col h-[30vh] p-10 relative">
          <h3 className="font-FONT2 text-xl text-left mb-3">
            Global Higher Education Pathways
          </h3>
          <p className="text-base font-novaReg text-left leading-relaxed mb-4">
            Broaden your academic horizons by studying at world-class institutions abroad, where you can earn a diploma or a master’s degree in your area of interest.
          </p>
          <img
            src="/image/icons/edu-icon.webp"
            alt="Higher Education Programs Icon"
            className="w-12 h-12 absolute bottom-5 left-10"
          />
        </div>
        <div className="bg-[#441bb3] text-white rounded-md shadow-md flex flex-col h-[30vh] p-10 relative">
          <h3 className="font-FONT2 text-xl text-left mb-3">
            International Work Experience
          </h3>
          <p className="text-base font-novaReg text-left leading-relaxed mb-4">
            Gain invaluable work experience by being professionally attached to global companies, expanding your skillset in an international context.
          </p>
          <img
            src="/image/icons/global-icon.webp"
            alt="Global Immersion Programs Icon"
            className="w-12 h-12 absolute bottom-5 left-10"
          />
        </div>
        <div className="bg-[#15345d] text-white rounded-md shadow-md flex flex-col h-[30vh] p-10 relative">
          <h3 className="font-FONT2 text-xl text-left mb-3">
            World-Class International Job Placements
          </h3>
          <p className="text-base font-novaReg text-left leading-relaxed mb-4">
            Benefit from international career opportunities, as Fortune 500 companies regularly scout talent for their global offices and campuses.
          </p>
          <img
            src="/image/icons/location-icon.webp"
            alt="International Placements Icon"
            className="w-12 h-12 absolute bottom-5 left-10"
          />
        </div>
      </div>
    </div>
  );
};

export default InternationalRelations;
