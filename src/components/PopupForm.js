import React, { useEffect } from "react";

function PopupForm({ isOpen, closePopup }) {
  // Always call useEffect
  useEffect(() => {
    if (isOpen) {
      // Dynamically create the script element when the popup opens
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.nopaperforms.com/emwgts.js";
      document.body.appendChild(script);

      // Cleanup the script when the popup is closed/unmounted
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]); // Re-run this effect only when `isOpen` changes

  if (!isOpen) return null;

  return (
    <div className="relative">
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <div
            onClick={closePopup}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <svg
              className="hover:scale-110 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>

          {/* NPF Widget */}
          <div
            className="npf_wgts"
            data-height="550px"
            data-w="fa0c1ce650bf21dda1024e905be842d6"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;
