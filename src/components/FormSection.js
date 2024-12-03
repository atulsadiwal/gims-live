import React from "react";

const FormSection = () => {
  return (
    <section className="bg-gray-100 py-8 max-sm:py-4">
      <div className="max-w-screen-xl mx-auto px-6 max-sm:px-3">
        <div className="flex flex-row justify-between items-center max-md:flex-col max-sm:flex-col">
          <div className="w-6/12 max-sm:w-full p-6 max-md:w-full max-sm:p-0">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl font-FONT2 mb-4 text-red-600 max-sm:text-xl max-sm:mb-2">GIMS</h1>
              <h2 className="text-3xl font-FONT2 mb-4 max-sm:text-lg max-sm:mb-2"></h2>
              <p className="text-lg mb-6 text-gray-500 max-sm:text-sm max-sm:mb-3 font-FONT1">
              GNIOT Institute of Management Studies (GIMS), located in the forward-looking city of Greater Noida, was founded in 2020 amidst the transformative period of the pandemic. This institution was conceived with the mission of delivering exceptional management education through its two year full time AICTE Approved, HLACT Accredited Post Graduate Diploma in Management (PGDM) program, aiming to equip Millennials with the skills necessary to navigate and excel in the evolving landscape of Industry dynamics.
              </p>
            </div>
          </div>

          <div className="w-6/12 max-md:w-full max-sm:w-full">
            <div className="text-center mb-6 max-sm:mb-3">
              {/* <h2 className="text-4xl font-novaBold mb-2 max-sm:text-xl ">Application Form 2025</h2> */}
            </div>

            <div className="shadow-lg rounded-xl bg-white p-6 max-sm:p-2">
              <p className="text-lg text-gray-500 mb-3 text-center max-sm:mb-1.5 max-sm:text-sm font-novaSemi">Apply for Entrance Exam</p>
              <form className="flex flex-col items-center space-y-4 w-full max-w-lg mx-auto max-sm:space-y-2 max-md:space-y-3 max-lg:space-y-4">
                <select className="border border-gray-300 rounded-lg h-[44px] px-4 w-full text-sm max-sm:text-xs max-md:h-[40px]">
                  <option value="" disabled selected>Select Campus</option>
                  <option value="campus1">Campus 1</option>
                  <option value="campus2">Campus 2</option>
                </select>

                <div className="flex max-md:flex-col max-sm:flex-col w-full gap-2 max-sm:w-full">
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="border border-gray-300 rounded-lg h-[44px] px-2 w-full text-sm max-sm:text-xs max-md:h-[40px]"
                  />
                  <input
                    type="email"
                    placeholder="Student Email ID"
                    className="border border-gray-300 rounded-lg h-[44px] px-2 w-full text-sm max-sm:text-xs max-md:h-[40px]"
                  />
                </div>

                <div className="flex w-full max-sm:flex-col">
                  <div className="flex items-center border border-gray-300 rounded-lg w-full h-[44px]">
                    <select className="border-r border-gray-300 h-full w-[72px] px-2 text-sm max-sm:text-xs">
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Student Mobile No"
                      className="flex-1 px-2 text-sm max-sm:text-xs"
                    />
                  </div>
                </div>

                <div className="flex max-md:flex-col max-sm:flex-col w-full gap-2">
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg h-[44px] px-2 w-full text-sm max-sm:text-xs max-md:h-[40px]"
                  />
                  <input
                    type="text"
                    placeholder="Student City"
                    className="border border-gray-300 rounded-lg h-[44px] px-2 w-full text-sm max-sm:text-xs max-md:h-[40px]"
                  />
                </div>

                <div className="flex max-md:flex-col max-sm:flex-col w-full gap-2">
                  <select className="border border-gray-300 rounded-lg h-[44px] px-2 w-full text-sm max-sm:text-xs max-md:h-[40px]" disabled>
                    <option value="" disabled selected>Select Discipline</option>
                    <option value="discipline1">Discipline 1</option>
                    <option value="discipline2">Discipline 2</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg h-[44px] px-2 w-full text-sm max-sm:text-xs max-md:h-[40px]" disabled>
                    <option value="" disabled selected>Select Program</option>
                    <option value="program1">Program 1</option>
                    <option value="program2">Program 2</option>
                  </select>
                </div>

                <div className="flex justify-end w-full">
                  <button type="submit" className="bg-red-600 text-white rounded-lg text-center text-sm font-bold px-6 py-2 w-full">
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
