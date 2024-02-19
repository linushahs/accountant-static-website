import Image from "next/image";
import React from "react";

const quickLinks = [
  { title: "home", link: "#home" },
  { title: "about", link: "#about" },
  { title: "case study", link: "#caseStudy" },
  { title: "contact", link: "#contact" },
];

const privacyLinks = ["Report a blog", "terms and condition", "privacy policy"];

const linksUlStyle = "flex flex-col gap-4";
const linksStyle =
  "text-textGray capitalize hover:text-primary transition-colors ease-in-out";

function Footer() {
  return (
    <footer className="bg-background ">
      <div className="flex justify-between items-start container pt-4 pb-12 ">
        {/* Logo and description =============== */}
        <h3 className="font-bold text-2xl text-white">RMS</h3>
        {/* <Image /> */}

        {/* Quick links and privacy links ================== */}
        <div className="flex">
          <ul className={linksUlStyle + " w-[200px]"}>
            {quickLinks.map((ql) => (
              <li key={ql.title} className={linksStyle}>
                <a href={ql.link}>{ql.title}</a>
              </li>
            ))}
          </ul>

          <ul className={linksUlStyle}>
            {privacyLinks.map((pl) => (
              <li key={pl} className={linksStyle}>
                <a aria-disabled>{pl}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright and other =========== */}

      <div className="border-t border-textGray py-6  text-textGray flex justify-between items-center container text-lg">
        <p>2023</p>

        <p>@Kalodhunga Creations</p>
      </div>

      {/* Farewell, =================== */}
      <div className=" bg-black py-5">
        <p className="large-heading text-center">
          farewell, <span className="text-primary">wanderer</span>: the path
          ends here
        </p>
      </div>
    </footer>
  );
}

export default Footer;
