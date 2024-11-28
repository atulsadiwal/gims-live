import React from "react";

const FormSection = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-[50%] p-6">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl font-FONT2 mb-4 text-red-600">GIMS</h1>
              <h2 className="text-3xl font-novaSemi mb-4">India's Premier Scholarship</h2>
              <p className="text-lg mb-6">
                Global Institute of Management and Sciences (GIMS) empowers students with a blend of academic excellence and global exposure. It offers diverse programs designed to foster innovation, leadership, and professional growth, enabling aspirants to unlock their true potential and achieve unparalleled success.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] p-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-2">Application Form 2025</h2>
              <p className="text-lg text-gray-500">Apply for Entrance Exam</p>
            </div>

            <div className="">
              <form className="flex flex-col items-center space-y-4 shadow-lg rounded-lg bg-white p-6">
                <select className="border border-gray-300 rounded-lg h-[44px] px-4 w-[450px] text-sm">
                  <option value="" disabled selected>
                    Select Campus
                  </option>
                  <option value="campus1">Campus 1</option>
                  <option value="campus2">Campus 2</option>
                </select>

                <div className="flex justify-evenly space-x-2 w-[464px]">
                  <input
                    type="text"
                    placeholder="Student Name"
                    className="border border-gray-300 rounded-lg h-[48px] px-3 w-[217px] text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Student Email ID"
                    className="border border-gray-300 rounded-lg h-[48px] px-3 w-[217px] text-sm"
                  />
                </div>

                <div className="flex items-center border border-gray-300 rounded-lg w-[450px] h-[48px]">
                  <select className="border-r border-gray-300 h-full w-[72px] px-2 text-sm">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Student Mobile No"
                    className="flex-1 px-3 text-sm"
                  />
                </div>

                <div className="flex justify-evenly space-x-2 w-[464px]">
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg h-[48px] px-3 w-[217px] text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Student City"
                    className="border border-gray-300 rounded-lg h-[48px] px-3 w-[217px] text-sm"
                  />
                </div>

                <div className="flex justify-evenly space-x-2 w-[464px]">
                  <select className="border border-gray-300 rounded-lg h-[48px] px-3 w-[217px] text-sm" disabled>
                    <option value="" disabled selected>
                      Select Discipline
                    </option>
                    <option value="discipline1">Discipline 1</option>
                    <option value="discipline2">Discipline 2</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg h-[48px] px-3 w-[217px] text-sm" disabled>
                    <option value="" disabled selected>
                      Select Program
                    </option>
                    <option value="program1">Program 1</option>
                    <option value="program2">Program 2</option>
                  </select>
                </div>

                <p className="text-xs text-gray-500 text-center w-[464px]">
                  By submitting this form, I agree to receive notifications from the University in the form of SMS/E-mail/Call.
                </p>

                <div className="flex flex-col items-end w-[464px]">
                  <button type="submit" className="bg-red-600 text-white rounded-lg h-[36px] w-[120px] text-center text-sm font-bold">
                    Apply Now
                  </button>
                  <p className="text-right text-xs mt-2">
                    Already Registered?{" "}
                    <a href="/login" className="text-red-600 font-bold">
                      Click to Login
                    </a>
                  </p>
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
