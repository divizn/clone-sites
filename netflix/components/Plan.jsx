import Image from "next/image";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const Plan = () => {
  return (
    <nav className="bg-white h-16 flex items-center justify-center">
      <div className="bg-red-500 rounded-[17px] py-[0.3rem] px-[0.5rem] mx-[0.7rem] font-bold text-white text-[0.6rem] whitespace-nowrap">
        NEW!
      </div>
      <div className="text-sm">
        Plans now start at <span className="font-extrabold">£4.99</span>.
      </div>
      <div className="text-blue-400 font-bold text-sm ml-3 flex">
        <a href="https://www.netflix.com/signup">Learn More </a>
        <div className="mt-1 ml-1">
          <SlArrowRight />
        </div>
      </div>
    </nav>
  );
};

export default Plan;
