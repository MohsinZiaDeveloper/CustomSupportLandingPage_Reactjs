import React from "react";
import Line from "../assets/SmallRoundedLine.svg";
import TickIcon from "../assets/TickIcon.svg";

const Header = () => {
  return (
    <div className="mt-[4.2rem] flex justify-center text-white h-[36rem] md:h-[30rem] bg-cover bg-[url('assets/Gruppemaskieren.png')]  ">
      <div className="container gap-10 md:gap-0 flex flex-col md:flex-row px-4 md:px-40">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col gap-6 mt-[2rem] md:mt-0">
            <h3 className="font-[500] leading-[2rem] text-[28px]">
              Headache on complex customs matters for your business?
            </h3>
            <img src={Line} className=" h-2 w-12" />
            <p className="text-[14px] font-[200]">
              Customs Support is your neutral full-service customs broker for
              complex customs matters with 20+ years of expertise in Europe and
              over 400 customs specialists who are happy to take the load off
              your mind!
            </p>
            <button
              className="bg-buttonColor text-white w-fit text-[12px] font-[500] py-2 px-6 rounded  hover:bg-black 
    duration-500"
            >
              Get your quote now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex font-[500] justify-end items-center">
          <ul>
            <li className="flex gap-4 items-center ">
              <img src={TickIcon} className="h-2 w-4" /> Fast and accurate
              customs clearance delivery
            </li>
            <li className="flex gap-4 items-center mt-4">
              <img src={TickIcon} className="h-2 w-4" />
              EU-wide customs coverage
            </li>
            <li className="flex gap-4 items-center mt-4">
              <img src={TickIcon} className="h-2 w-4" />
              Online and real-time control of customs processes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
