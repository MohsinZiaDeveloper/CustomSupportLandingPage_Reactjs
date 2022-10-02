import React from "react";
import Line from "../assets/SmallRoundedLine.svg";
import Image1 from "../assets/weOfferImage1.svg";
import Image2 from "../assets/weOfferImage2.svg";
import Image3 from "../assets/weOfferImage3.svg";
import Image4 from "../assets/weOfferImage4.svg";
import Image5 from "../assets/weOfferImage5.svg";
import Image6 from "../assets/weOfferImage6.svg";

const WeOffer = () => {
  return (
    <div className="flex justify-center">
      <div className="container px-4 md:px-20 pt-16">
        <div className="w-full flex flex-col gap-10 md:gap-0 md:flex-row">
          <div className="w-full  md:w-9/12 pr-0 md:pr-10">
            <h3 className="font-[600] text-[24px]">
              We offer end-to-end customs services with fast, accurate and
              compliant customs in multiple countries
            </h3>
          </div>
          <div className="w-full md:w-3/12">
            <button
              className="bg-buttonColor text-white text-[12px] py-2 px-6 rounded  hover:bg-black 
                duration-500"
            >
              Get in touch
            </button>
          </div>
        </div>
        <div className="w-full mt-4 flex justify-start">
          <img src={Line} />
        </div>
        <div className="flex flex-col gap-10 py-10">
          <div className="w-full flex">
            <div className="w-2/6">
              <img src={Image1} />
            </div>
            <div className="w-2/6">
              <img src={Image2} />
            </div>
            <div className="w-2/6">
              <img src={Image3} />
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-2/6">
              <img src={Image4} />
            </div>
            <div className="w-2/6">
              <img src={Image5} />
            </div>
            <div className="w-2/6">
              <img src={Image6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
