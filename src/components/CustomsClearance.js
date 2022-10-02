import React from "react";
import Line from "../assets/SmallRoundedLine.svg";

const CustomsClearance = () => {
  return (
    <div
      className=" h-[26rem] flex flex-col md:flex-row bg-cover bg-[url('assets/customClearenceImage.png')]"
      style={{ backgroundPosition: "bottom" }}
    >
      <div className=" w-full md:w-1/2  h-full p-0  md:p-10  flex  md:justify-end items-center text-white bg-opacity-30 bg-WebsiteGreenColor">
        <div className="flex flex-col gap-4 px-4 md:px-0 ">
          <h3 className="font-[500] text-[24px]">
            Customs clearance after Brexit
          </h3>
          <img src={Line} className=" h-2 w-12" />
          <p className="w-auto md:w-[25rem] font-[300] text-[12px]">
            Since 4 years we are successfully helping our customers to prepare
            their business for Brexit. Our Bexit customs agents are always
            up-to-date with the latest customs regulations after Brexit and look
            forward to support you with Brexit customs procedures.
          </p>
          <div>
            <button
              className="bg-buttonColor text-white text-[12px] py-2 px-6 rounded  hover:bg-black 
    duration-500"
            >
              Brexit and customs: get ready!
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:1/2"></div>
    </div>
  );
};

export default CustomsClearance;
