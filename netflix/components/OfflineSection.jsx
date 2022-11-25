import React from "react";
import Image from "next/image";
import Phone from "../public/phoneImg.jpg";
import SThings from "../public/strangerThings.png";
import { TfiDownload } from "react-icons/tfi";

const OfflineSection = () => {
  return (
    <section className="sectionBorder">
      <div className="flex flex-col-reverse justify-center md:flex-row pt-[50px] px-[5%] w-full">
        <div className="flex flex-col items-center">
          <Image src={Phone} alt="phoneimg" />
          <div className="flex rounded-2xl w-64 h-16 bg-black border-2 border-neutral-700 p-2 translate-y-[-60px]">
            <Image src={SThings} alt="strangerThings" className="w-10 h-full" />
            <div className="flex-flex-col leading-tight ml-4">
              <h1 className="text-white font-semibold ">Stranger Things</h1>
              <h1 className="text-blue-500 text-sm">Downloading...</h1>
            </div>
            <TfiDownload className="mt-4 ml-8 text-white" />
          </div>
        </div>
        <div className="flex flex-col max-w-xl xs:ml-24">
          <h1 className="text-white text-center xs:mt-20 xs:text-5xl xs:mb-8 xs:text-start font-semibold pb-1 text-[1.625rem]">
            Download your programmes to watch offline.
          </h1>
          <h1 className="text-white font-[400] xs:text-start leading-tight md:text-3xl text-center text-[1.125rem] xs:mb-20">
            Available on all plans except Basic with adverts.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OfflineSection;
