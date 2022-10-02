import React from "react";
import WhatWeWork from "../assets/whatWeWorkImage.png";
import Line from "../assets/SmallRoundedLine.svg";

const HowWeWork = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col md:flex-row px-0 md:px-44 pt-0 pb-10 md:py-10">
        <div className="w-full md:w-1/2 p-0 md:p-10">
          <div className="bg-[#F0F0F0] p-4">
            <img src={WhatWeWork} className="" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-4 px-9 md:px-0 mt-5 md:mt-0">
            <h3 className="text-[24px] font-[600]">Who we work with</h3>
            <img src={Line} className=" h-2 w-12" />
            <p className="font-[300] text-[16px] pr-0 md:pr-16">
              We are the trusted partner for customs matters of more than 7000
              companies across Europe. Since 20 years we successfully operate
              with customers from small and large good owners to freight
              forwarders and digital platforms across various industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
