import React from "react";
import Line from "../assets/SmallRoundedLine.svg";
import usericon from "../assets/userIcon.png";

const ContactUs = () => {
  return (
    <div className="flex justify-center bg-WebsiteGreenColor">
      <div className="container px-4 md:px-44 py-10 pb-32">
        <div className="flex text-white flex-col gap-4">
          <h3 className="font-[500] text-[24px]">
            Customs Support - Take the load off your mind
          </h3>
          <img src={Line} className=" h-2 w-12" />
          <p className="text-[12px] font-[300]">
            <span className="font-[600]">
              Get in touch with one of our customs experts!
            </span>
            <br /> Fill in the contact form or use the chat function on the
            website.
          </p>
        </div>
        <div className="w-full text-white flex flex-col  md:flex-row pt-8">
          <div className="w-full md:w-3/4 flex flex-col gap-4 ">
            <p className="text-[14px] font-[500]">
              Are you a new or returning customer? *
            </p>
            <div className="flex gap-10">
              <div className="flex gap-3 items-center">
                <div className="h-4 w-4 border rounded-full"></div>
                <h3 className="font-[300] text-[14px]">New</h3>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-4 w-4 border rounded-full"></div>
                <h3 className="font-[300] text-[14px]">Returning</h3>
              </div>
            </div>
            <div className="flex flex-col gap-4 pr-0 md:pr-20">
              <div className="w-full ">
                <input
                  placeholder="Choice of service *"
                  className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                />
              </div>
              <div className="border-t  my-3 border-buttonColor"></div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <input
                    placeholder="First name *"
                    className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    placeholder="Last name *"
                    className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <input
                    placeholder="Company"
                    className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    placeholder="E-Mail *"
                    className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1/2">
                  <input
                    placeholder="Phone number *"
                    className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    placeholder="Country"
                    className="px-2 w-full py-3 rounded text-[12px] font-[300]"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-3 items-center">
                <div className="h-4 w-4 border rounded-full"></div>
                <h3 className="font-[300] text-[14px]">
                  I agree with the Terms and Conditions *
                </h3>
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-4 w-4 border rounded-full"></div>
                <h3 className="font-[300] text-[14px]">
                  I want to sign up for the newsletter
                </h3>
              </div>
            </div>
            <div>
              <button
                className="bg-buttonColor text-white text-[14px] font-[500] py-2 px-20 rounded  hover:bg-black 
                duration-500"
              >
                Request a quote
              </button>
            </div>
          </div>
          <div className="w-full mt-10 md:mt-0 md:w-1/4 flex gap-4 flex-col">
            <p className="font-[300] text-[12px]">
              <span className="font-[500]">You prefer a personal contact?</span>{" "}
              <br /> Please find the phone numbers of our locations below.
            </p>
            <input
              placeholder="Custom Support"
              className="px-2 py-3 rounded text-[12px] font-[300]"
            />

            <button
              className="bg-buttonColor text-white text-[14px] font-[500] py-3 px-6 rounded  hover:bg-black 
                duration-500"
            >
              Go
            </button>
            <div className="border-t border-buttonColor"></div>
            <h3 className="font-[400] text-[20px]">„Let’s grow together!“</h3>
            <div className="flex items-center gap-4 ">
              <img src={usericon} className="h-12 w-12" />
              <p className="font-[300] text-[12px]">
                <span className="font-[500]"> Michael Doe</span> <br /> Customer
                Support Lead CSG
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
