import Image from "next/image";
import React from "react";
import TV from "../public/tv.png";

const TVSection = () => {
  return (
    <section className="sectionBorder">
      <div className="flex flex-col justify-center md:flex-row pt-[50px] px-[5%] w-full">
        <div className="flex flex-col max-w-xl xs:mr-24">
          <h1 className="text-white text-center xs:mt-20 xs:text-5xl xs:mb-8 xs:text-start font-semibold text-[1.625rem]">
            Enjoy on your TV.
          </h1>
          <h1 className="text-white font-[400] xs:text-start leading-tight md:text-3xl text-center text-[1.125rem]">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h1>
        </div>
        <Image src={TV} alt="tvImg" width={400} className="mb-12" />
      </div>
    </section>
  );
};

export default TVSection;
