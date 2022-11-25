import React from "react";
import Image from "next/image";
import Children from "../public/children.png";

const ProfileSection = () => {
  return (
    <section className="sectionBorder">
      <div className="flex flex-col justify-center md:flex-row pt-[50px] px-[5%] w-full">
        <div className="flex flex-col max-w-xl xs:mr-24">
          <h1 className="text-white text-center xs:mt-20 xs:text-5xl xs:mb-8 xs:text-start font-semibold text-[1.625rem]">
            Create profiles for children.
          </h1>
          <h1 className="text-white font-[400] xs:text-start leading-tight md:text-3xl text-center text-[1.125rem] mb-4 xs:mb-28">
            Send children on adventures with their favourite characters in a
            space made just for them – free with your membership.
          </h1>
        </div>
        <Image src={Children} alt="childrenImg" width={400} className="mb-12" />
      </div>
    </section>
  );
};

export default ProfileSection;
