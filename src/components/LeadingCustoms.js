import React from "react";
import Line from "../assets/SmallRoundedLine.svg";

const LeadingCustoms = () => {
  return (
    <div className="flex bg-WebsiteGreenColor py-10 justify-center">
      <div className="container px-4 md:px-56 flex flex-col gap-3">
        <div className="w-full flex justify-center">
          <h3 className="text-[16px] md:text-[18px] font-[600] text-white">
            The leading customs agent in Europe and UK
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <img src={Line} className=" h-1 w-8" />
        </div>
        <div className="w-full ml-0 md:ml-10 gap-10 md:gap-0  mt-6 flex flex-col md:flex-row text-white">
          <div className="w-full md:w-3/12 flex justify-center  ">
            <div className="flex-col items-center pr-0 md:pr-4   md:border-r-[0.01rem] text-center gap-1">
              <h3 className="font-[600] text-[32px] md:text-[26px]">20 +</h3>
              <h4 className="font-[600] text-[16px] md:text-[12px]">
                years of experience
              </h4>
            </div>
          </div>
          <div className="w-full md:w-3/12 flex justify-center ">
            <div className="flex-col items-center pr-0 md:pr-4   md:border-r-[0.01rem] text-center gap-1">
              <h3 className="font-[600] text-[32px] md:text-[26px]">400</h3>
              <h4 className="font-[600] text-[16px] md:text-[12px]">
                qualified customs specialists
              </h4>
            </div>
          </div>
          <div className="w-full md:w-3/12 flex justify-center ">
            <div className="flex-col items-center pr-0 md:pr-4   md:border-r-[0.01rem] text-center gap-1">
              <h3 className="font-[600] text-[32px] md:text-[26px]">20</h3>
              <h4 className="font-[600] text-[16px] md:text-[12px]">
                strategic locations
              </h4>
            </div>
          </div>
          <div className="w-full md:w-3/12 flex justify-center  md:justify-start ">
            <div className="flex-col items-center text-center gap-1">
              <h3 className="font-[600] text-[32px] md:text-[26px]">5</h3>
              <h4 className="font-[600] text-[16px] md:text-[12px]">
                countries
              </h4>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-5">
          <button
            className="bg-buttonColor text-white text-[12px] py-2 px-6 rounded  hover:bg-black 
    duration-500"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadingCustoms;
