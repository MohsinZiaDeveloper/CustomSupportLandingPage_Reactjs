import React from "react";
import Line from "../assets/SmallRoundedLine.svg";
import planeImage from "../assets/planeImage.png";

const Plan = () => {
  return (
    <div className="flex justify-center">
      <div className="container  border">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={planeImage} />
          </div>
          <div className="w-full md:w-1/2 flex px-4 md:px-20 justify-center items-center">
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <h3 className="text-[24px] font-[600]">
                Lorem ipsum dolor sit amet
              </h3>
              <img src={Line} className=" h-2 w-12" />
              <p className="font-[300] text-[16px] pr-16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row">
          <div className="w-full md:w-1/2 flex px-4 md:px-20 justify-end items-center">
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <h3 className="text-[24px] font-[600]">
                Lorem ipsum dolor sit amet
              </h3>
              <img src={Line} className=" h-2 w-12" />
              <p className="font-[300] text-[16px] ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr.
              </p>
              <div>
                <button
                  className="bg-buttonColor text-white text-[12px] py-2 px-6 rounded  hover:bg-black 
    duration-500"
                >
                  More informations
                </button>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 md:mt-0 md:w-1/2">
            <img src={planeImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
