import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImage from "../assets/carouselImage.png";
import Line from "../assets/SmallRoundedLine.svg";

const CustomSupport = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col gap-6 pb-10 px-4  md:px-44">
        <div className="w-full flex justify-center px-0 md:px-24 text-center ">
          <h3 className="font-[500] text-[24px]">
            Customs Support is a full-service provider for customs services and
            is here to help
          </h3>
        </div>
        <div className="w-full flex justify-center">
          <img src={Line} />
        </div>
        <Slider {...settings} className="gap-4">
          <div className="flex flex-col ">
            <img src={CarouselImage} />
            <h3 className="font-[500] mt-4 text-[16px]">
              Import customs clearance
            </h3>
            <p className="text-[12px] font-[300] pr-10 mt-3">
              If you would like to import goods from a third country to within
              the European Union, Customs Support assists you in every step of
              the customs clearance process. Our customs experts take care of
              import documents, classification of import goods with the correct
              HS code, coordination of physical inspection and duty management.
            </p>
            <a className="text-[12px]  font-[600] text-[#01A4B7]">
              Learn more {">"}{" "}
            </a>
          </div>
          <div className="flex flex-col ">
            <img src={CarouselImage} />
            <h3 className="font-[500] mt-4 text-[16px]">
              Import customs clearance
            </h3>
            <p className="text-[12px] font-[300] pr-10 mt-3">
              If you would like to import goods from a third country to within
              the European Union, Customs Support assists you in every step of
              the customs clearance process. Our customs experts take care of
              import documents, classification of import goods with the correct
              HS code, coordination of physical inspection and duty management.
            </p>
            <a className="text-[12px]  font-[600] text-[#01A4B7]">
              Learn more {">"}{" "}
            </a>
          </div>
          <div className="flex flex-col ">
            <img src={CarouselImage} />
            <h3 className="font-[500] mt-4 text-[16px]">
              Import customs clearance
            </h3>
            <p className="text-[12px] font-[300] pr-10 mt-3">
              If you would like to import goods from a third country to within
              the European Union, Customs Support assists you in every step of
              the customs clearance process. Our customs experts take care of
              import documents, classification of import goods with the correct
              HS code, coordination of physical inspection and duty management.
            </p>
            <a className="text-[12px]  font-[600] text-[#01A4B7]">
              Learn more {">"}{" "}
            </a>
          </div>
          <div className="flex flex-col ">
            <img src={CarouselImage} />
            <h3 className="font-[500] mt-4 text-[16px]">
              Import customs clearance
            </h3>
            <p className="text-[12px] font-[300] pr-10 mt-3">
              If you would like to import goods from a third country to within
              the European Union, Customs Support assists you in every step of
              the customs clearance process. Our customs experts take care of
              import documents, classification of import goods with the correct
              HS code, coordination of physical inspection and duty management.
            </p>
            <a className="text-[12px]  font-[600] text-[#01A4B7]">
              Learn more {">"}{" "}
            </a>
          </div>
          <div className="flex flex-col ">
            <img src={CarouselImage} />
            <h3 className="font-[500] mt-4 text-[16px]">
              Import customs clearance
            </h3>
            <p className="text-[12px] font-[300] pr-10 mt-3">
              If you would like to import goods from a third country to within
              the European Union, Customs Support assists you in every step of
              the customs clearance process. Our customs experts take care of
              import documents, classification of import goods with the correct
              HS code, coordination of physical inspection and duty management.
            </p>
            <a className="text-[12px]  font-[600] text-[#01A4B7]">
              Learn more {">"}{" "}
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CustomSupport;
