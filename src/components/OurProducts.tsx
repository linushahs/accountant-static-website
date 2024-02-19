import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const products = [
  {
    shortTitle: "HRM",
    longTitle: "Human Resource Management",
    coverImgSrc: "/hrm.png",
  },
  {
    shortTitle: "HRM",
    longTitle: "Human Resource Management",
    coverImgSrc: "/hrm.png",
  },
  ,
  {
    shortTitle: "HRM",
    longTitle: "Human Resource Management",
    coverImgSrc: "/hrm.png",
  },
  ,
  {
    shortTitle: "HRM",
    longTitle: "Human Resource Management",
    coverImgSrc: "/hrm.png",
  },
];

function OurProducts() {
  return (
    <section className=" pb-10 ">
      <div className="container flex flex-col gap-7">
        <h1>
          Our <span className="text-primary">Products</span>
        </h1>

        <p className="w-1/2 text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iusto
          tempore voluptatibus natus tempora quo vitae nam nisi ipsum excepturi,
          animi eos perspiciati.
        </p>
        <ul className="flex gap-2 ">
          {["all", "laptop", "mobile", "watch"].map((item, id) => (
            <li
              key={item}
              className={twMerge(
                "rounded-full py-1 px-3 text-white bg-accentBlack capitalize text-base",
                id === 0 && "bg-primary text-black"
              )}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Products listing ======================= */}
      <div className="bg-black py-10 mt-10">
        <div className="container">
          <p className="text-white text-xl">Latest Products</p>

          <div className="grid grid-cols-2 gap-8 mt-4 overflow-hidden rounded-lg">
            {products.map((product) => (
              <div>
                <Image
                  src={product?.coverImgSrc!}
                  alt="cover image"
                  width={500}
                  height={500}
                  className="w-full aspect-video"
                />

                <p className="text-textGray mt-3 mb-4 text-xl">
                  {product?.longTitle}
                </p>

                <button className="text-white border border-white py-1 px-3 rounded-full text-sm">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
