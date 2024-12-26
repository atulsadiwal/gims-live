/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const UniversityDetails = () => {
  const [progress, setProgress] = useState([0, 0, 0, 0]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    const targetValues = [5, 25, 50, 92];
    const interval = 20;
    const steps = 50;

    targetValues.forEach((target, index) => {
      let currentProgress = 0;
      const stepIncrement = target / steps;

      const animationInterval = setInterval(() => {
        currentProgress += stepIncrement;
        if (currentProgress >= target) {
          currentProgress = target;
          clearInterval(animationInterval);
        }
        setProgress((prev) => {
          const updatedProgress = [...prev];
          updatedProgress[index] = Math.min(currentProgress, target);
          return updatedProgress;
        });
      }, interval);
    });
  }, []);

  useGSAP(() => {
    gsap.from(".box", {
      x: -500,
      duration: 1,
      delay: 1
    })
  })

  return (
    <div className="flex w-full max-sm:flex-col max-sm:mt-20">
      <div className="flex flex-1 relative">
        <img
          src="/apply-now/image/building.webp"
          alt="University"
          className="w-full h-full object-cover"
        />

        <div className="box absolute bottom-0 left-0 bg-yellow-300 max-sm:bg-yellow-300/70 text-black p-6 lg:p-8 w-[50%] max-xl:w-full max-lg:w-full max-md:w-full flex flex-col">
          <h4 className="text-xl lg:text-2xl font-FONT2">We Are Open For Opportunities!</h4>
          <p className="mt-4 text-sm lg:text-base font-novaReg leading-relaxed">
          Explore limitless possibilities with us! Partner for growth, innovation, and success as we embrace new opportunities and collaborations. Let’s create a brighter future together!
          </p>
          <a
            href="#"
            className="mt-6 inline-block text-black font-medium text-sm lg:text-base transform transition-transform hover:translate-y-[-3px]"
          >
            View All Faculties →
          </a>
        </div>
      </div>

      <div className="flex flex-1 bg-[#0D80DA] text-white flex-col justify-center px-8 lg:px-16 py-8">
        <div>
          <h6 className="uppercase text-sm font-FONT1 tracking-widest">
            GNIOT
          </h6>
          <h2 className="text-5xl font-FONT2 mt-2 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            Top Average Placement <br /> Excerpts @GIMS
          </h2>
          <p className="text-lg mt-4 font-novaReg text-green-100 leading-relaxed max-md:text-base max-sm:text-sm">
            Discover the highlights of outstanding placement opportunities at GIMS, where students achieve remarkable career success across diverse industries.
          </p>
        </div>

        <div className="mt-8 space-y-6 max-w-md">
          {[
            { label: "₹ 12.45 LPA", value: 5 },
            { label: "₹ 9.23 LPA", value: 25 },
            { label: "₹ 6.34 LPA", value: 50 },
          ].map((item, index) => (
            <div key={index}>
              <p className="flex justify-between font-FONT1 text-sm"
                data-aos="fade-right">
                {item.label} <span>{Math.round(progress[index])}%</span>
              </p>
              <div
                className="h-2 bg-custom-gray rounded overflow-hidden mt-2"
              >
                <div
                  className="h-full bg-custom-yellow transition-all duration-500 ease-out"
                  style={{
                    width: `${progress[index]}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
