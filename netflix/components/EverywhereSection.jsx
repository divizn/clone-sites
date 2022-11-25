import React from "react";
import Image from "next/image";
import devicePile from "../public/device-pile.png";

const EverywhereSection = () => {
  return (
    <section className="sectionBorder">
      <div className="flex flex-col-reverse justify-center md:flex-row pt-[50px] px-[5%] w-full">
        <Image src={devicePile} alt="device-pile" className="mb-12" />
        <div className="flex flex-col max-w-xl xs:ml-24">
          <h1 className="text-white text-center xs:mt-20 xs:text-5xl xs:mb-8 xs:text-start font-semibold pb-1 text-[1.625rem]">
            Watch everywhere.
          </h1>
          <h1 className="text-white font-[400] xs:text-start leading-tight md:text-3xl text-center text-[1.125rem]">
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default EverywhereSection;
