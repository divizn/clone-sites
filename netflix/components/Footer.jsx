import React from "react";

const ContactItem = ({ itemName, itemLink }) => {
  return (
    <a
      href={itemLink}
      target="_blank"
      rel="noreferrer"
      className="text-neutral-500 pb-3"
    >
      {itemName}
    </a>
  );
};
const contactItem = [
  { itemName: "FAQ", itemLink: "https://help.netflix.com/en/node/412" },
  { itemName: "Help Centre", itemLink: "https://help.netflix.com/en/" },
  { itemName: "Account", itemLink: "https://www.netflix.com/gb/login" },
  { itemName: "Media Centre", itemLink: "https://media.netflix.com/en/" },
  {
    itemName: "Investor Relations",
    itemLink: "https://ir.netflix.net/ir-overview/profile/default.aspx",
  },
  { itemName: "Jobs", itemLink: "https://jobs.netflix.com" },
  {
    itemName: "Redeem gift cards",
    itemLink: "https://www.netflix.com/gb/redeem",
  },
  {
    itemName: "Buy gift cards",
    itemLink: "https://www.netflix.com/gift-cards",
  },
  {
    itemName: "Ways to Watch",
    itemLink: "https://devices.netflix.com/en/",
  },
  {
    itemName: "Terms of Use",
    itemLink: "https://help.netflix.com/legal/termsofuse",
  },
  { itemName: "Privacy", itemLink: "https://help.netflix.com/legal/privacy" },
  {
    itemName: "Cookie Preferences",
    itemLink: "https://www.netflix.com/gb/#",
  },
  {
    itemName: "Corporate Information",
    itemLink: "https://help.netflix.com/legal/corpinfo",
  },
  { itemName: "Contact Us", itemLink: "https://help.netflix.com/en/contactus" },
  { itemName: "Speed Test", itemLink: "https://fast.com" },
  {
    itemName: "Legal Guarantee",
    itemLink: "https://help.netflix.com/en/node/125888",
  },
  {
    itemName: "Legal Notices",
    itemLink: "https://help.netflix.com/legal/notices",
  },
  {
    itemName: "Only on Netflix",
    itemLink: "https://www.netflix.com/gb/browse/genre/839338",
  },
];
const Footer = () => {
  return (
    <footer className="grid py-14 px-[5%] xs:px-[10%] xs:text-base text-sm">
      <h1 className="text-neutral-500 text-left mb-8">
        Questions? Call 0808 196 5391
      </h1>
      <div className="grid xs:grid-cols-4 grid-cols-2">
        {contactItem.map((i) => (
          <ContactItem
            itemName={i.itemName}
            itemLink={i.itemLink}
            key={i.itemName}
          />
        ))}
      </div>
      <h1 className="text-neutral-500 text-left mt-14">
        Netflix United Kingdom
      </h1>
    </footer>
  );
};

export default Footer;
