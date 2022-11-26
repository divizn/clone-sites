import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const FAQItems = [
    {
      title: "What is Netflix?",
      description: (
        <p className="leading-none text-white">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV programmes, films, anime, documentaries and more on
          thousands of internet-connected devices.<br></br>
          <br></br> You can watch as much as you want, whenever you want – all
          for one low monthly price. Theres always something new to discover,
          and new TV programmes and films are added every week!
        </p>
      ),
    },
    {
      title: "How much does Netflix cost?",
      description: (
        <p className="leading-none text-white">
          Watch Netflix on your smartphone, tablet, smart TV, laptop or
          streaming device, all for one fixed monthly fee. Plans range from
          £4.99 to £15.99 a month. No extra costs, no contracts.
        </p>
      ),
    },
    {
      title: "What's different on Basic with adverts?",
      description: (
        <p className="leading-none text-white">
          Basic with adverts is a great way to enjoy films and TV programmes at
          a lower price. You can stream your favourites on any device with
          limited advert breaks. This plan does not allow downloads and a
          limited number of films and TV programmes are not available due to
          licensing restrictions. Some location and device restrictions also
          apply.
          <a href="https://help.netflix.com/en/node/126831">Learn more.</a>
        </p>
      ),
    },
  ];
  return (
    <section className="sectionBorder">
      <h1 className="text-white text-center mt-10 mb-4 xs:mt-20 xs:text-5xl xs:mb-8 font-semibold pb-1 text-[1.625rem]">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col">
        {FAQItems ? (
          FAQItems.map((i) => (
            <FAQItem
              title={i.title}
              description={i.description}
              key={i.title}
            />
          ))
        ) : (
          <div></div>
        )}
        <FAQItem
          title={FAQItems[0].title}
          description={FAQItems[0].description}
        />
      </div>
    </section>
  );
};

export default FAQSection;
