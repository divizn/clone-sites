import React from "react";
import { useState } from "react";

const FAQItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex w-full mb-2 flex-col">
        <div
          onClick={() => setIsOpen((open = !open))}
          className="w-full flex justify-between bg-neutral-700 py-3 px-6 text-xl"
        >
          <div className="text-white">{title}</div>
          {isOpen ? (
            <div className="text-white text-2xl xs:mr-4 translate-y-[-5px] font-thin">
              X
            </div>
          ) : (
            <div className="text-white text-4xl  xs:mr-4 translate-y-[-5px] font-thin">
              +
            </div>
          )}
        </div>
        {isOpen ? (
          <div className="w-full bg-neutral-700 border-t-2 border-black py-6 px-6 text-xl">
            {description}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FAQItem;
