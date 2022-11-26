import React from "react";
import FAQItem from "./FAQItem";
import { SlArrowRight } from "react-icons/sl";

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
    {
      title: "Where can I watch?",
      description: (
        <p className="leading-none text-white">
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
          <br></br>
          <br></br>
          You can also download your favourite programmes with the iOS, Android,
          or Windows 10 app. Use downloads to watch while you are on the go and
          without an internet connection. Take Netflix with you anywhere.
          <a href="https://help.netflix.com/en/node/126831">Learn more.</a>
        </p>
      ),
    },
    {
      title: "How do I cancel?",
      description: (
        <p className="leading-none text-white">
          Netflix is flexible. There are no annoying contracts and no
          commitments. You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account at any
          time.
          <a href="https://help.netflix.com/en/node/126831">Learn more.</a>
        </p>
      ),
    },
    {
      title: "What can I watch on Netflix?",
      description: (
        <p className="leading-none text-white">
          Netflix has an extensive library of feature films, documentaries, TV
          programmes, anime, award-winning Netflix originals, and more. Watch as
          much as you want, any time you want.
          <a href="https://help.netflix.com/en/node/126831">Learn more.</a>
        </p>
      ),
    },
    {
      title: "Is Netflix good for children?",
      description: (
        <p className="leading-none text-white">
          The Netflix Childrens experience is included in your membership to
          give parents control while children enjoy family-friendly TV
          programmes and films in their own space.<br></br>
          <br></br>Childrens profiles come with PIN-protected parental controls
          that let you restrict the maturity rating of content children can
          watch and block specific titles you dont want children to see.
          <a href="https://help.netflix.com/en/node/126831">Learn more.</a>
        </p>
      ),
    },
  ];
  return (
    <section className="sectionBorder">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-center mt-10 mb-4 xs:mt-20 xs:text-5xl xs:mb-8 font-semibold pb-1 text-[1.625rem]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col xs:w-[70%] md:w-[45%]">
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
        </div>
      </div>
      <div className="flex w-full mb-16 justify-center">
        <div className="flex flex-col w-72 md:w-[36rem] items-center">
          <p className="text-white mt-5 text-center md:font-[500] mb-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Email address"
              className="p-3 w-full"
            />
            <div className="h-full hidden xs:flex xs:visible bg-red-500 text-white z-50 p-4 text-[1.3rem] whitespace-nowrap">
              <a href="https://www.netflix.com/signup/registration">
                Get Started
              </a>
              <div className="mt-[0.4rem] ml-1 text-xs">
                <SlArrowRight />
              </div>
            </div>
          </div>
          <div className="flex xs:hidden bg-red-500 text-white z-50 p-2 text-[0.9rem] whitespace-nowrap mt-5 mr-4">
            <a href="https://www.netflix.com/signup/registration">
              Get Started
            </a>
            <div className="mt-[0.4rem] ml-1 text-xs">
              <SlArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
