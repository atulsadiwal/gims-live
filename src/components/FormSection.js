import React, { useEffect } from "react";

const FormSection = () => {
  // This effect runs once to load the widget script after the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="bg-gray-100 py-8 max-sm:py-4">
      <div className="max-w-screen-xl mx-auto px-6 max-sm:px-3">
        <div className="flex flex-row justify-between items-center max-md:flex-col max-sm:flex-col">
          <div className="w-6/12 max-sm:w-full p-6 max-md:w-full max-sm:p-0">
            <div className="flex flex-col justify-center h-full">
              <div className="flex-shrink-0">
                <img
                  src="/apply-now/image/gims-logobg.webp"
                  alt="logo"
                  className="max-md: max-sm:w-28"
                  loading="eager"
                />
              </div>
              <p className="text-lg mb-6 text-gray-500 max-sm:text-sm max-sm:mb-3 font-novaReg">
                GNIOT Institute of Management Studies (GIMS), located in the
                forward-looking city of Greater Noida, was founded in 2020
                amidst the transformative period of the pandemic. This
                institution was conceived with the mission of delivering
                exceptional management education through its two year full time
                AICTE Approved, HLACT Accredited Post Graduate Diploma in
                Management (PGDM) program, aiming to equip Millennials with the
                skills necessary to navigate and excel in the evolving landscape
                of Industry dynamics.
              </p>
            </div>
          </div>

          <div className="w-5/12 max-md:w-full max-sm:w-full">
            <div className="text-center mb-6 max-sm:mb-3">
              {/* <h2 className="text-4xl font-novaBold mb-2 max-sm:text-xl">Application Form 2025</h2> */}
            </div>

            {/* Add the MBA & PGDM Widget */}
            <div
              className="npf_wgts drop-shadow-md"
              data-height="550px"
              data-w="fa0c1ce650bf21dda1024e905be842d6"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
