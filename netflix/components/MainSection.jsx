import Image from "next/image";
import React from "react";
import netflixLogo from "../public/netflixLogo.png";
import menuBackImg from "../public/menuBackImg.jpg";
import { SlArrowRight } from "react-icons/sl";

const MainSection = () => {
  return (
    <section className="border-b-8 border-neutral-800">
      <div className="absolute grad h-[420px] md:h-[650px] z-30 w-screen bg-white"></div>
      <div className="w-full h-auto relative">
        <Image
          src={menuBackImg}
          alt=""
          className="h-[420px] md:h-[650px] mt-5"
        />
        <div className="absolute top-0 z-50 ">
          <a href="https://www.netflix.com/signup">
            <Image src={netflixLogo} alt="" width={120} className="ml-4" />
          </a>
        </div>
        <div className="absolute bg-red-500 right-0 text-white z-50 pt-[0.25rem] px-[0.5rem] md:text-base md:p-1 md:px-4 rounded-sm md:mr-10 text-[0.9rem] top-0 mt-5 mr-4">
          <a href="https://www.netflix.com/gb/login">Sign In</a>
        </div>
        <div className="absolute top-24 z-50 md:top-64 md:left-0 md:right-0">
          <div className="flex flex-col items-center">
            <div className="md:w-[36rem]">
              <h1 className="text-white md:text-5xl text-center font-semibold z-50 text-3xl">
                Unlimited films, TV programmes and more.
              </h1>
            </div>
            <div className="">
              <p className="text-white md:text-2xl md:font-[500] mt-5 text-center">
                Watch anywhere. Cancel at any time.
              </p>
            </div>
            <div className="flex flex-col w-72 md:w-[36rem] items-center">
              <p className="text-white mt-5 text-center md:font-[500] mb-2">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="p-3 w-full mt-2"
              />
              <div className="md:hidden flex bg-red-500 text-white z-50 p-2 text-[0.9rem] whitespace-nowrap mt-5 mr-4">
                <a href="https://www.netflix.com/signup/registration">
                  Get Started
                </a>
                <div className="mt-[0.4rem] ml-1 text-xs">
                  <SlArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
