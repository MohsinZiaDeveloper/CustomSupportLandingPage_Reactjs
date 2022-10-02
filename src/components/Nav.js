import React, { useState } from "react";
import Button from "./Button";
import Logo from "../assets/Logo.png";
import DropDownIcon from "../assets/dropDownIcon.svg";

const Nav = () => {
  let Links = [
    { name: "Quick Facts", link: "/" },
    { name: "Benefits", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md z-[9]  font-light text-[12px] w-full fixed top-0 left-0">
      <div className="md:flex items-center bg-white  md:px-10 px-7 pb-[10px]">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className=" flex  text-indigo-600 mr-1 pt-2">
            <img src={Logo} className="h-[48px] w-[96px] md:w-[132px]" />
            <div className="ml-[2rem] mr-[2rem] border-l-2"></div>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center  md:pb-0 md:mt-2 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-full md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[4.3rem] md:top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 min-w-fit font-medium flex items-center gap-2 md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
              {link.name !== "Contact" && (
                <img src={DropDownIcon} className="h-2 w-2" alt="" />
              )}
            </li>
          ))}
          <div className="w-full flex justify-start  md:justify-end ">
            <Button className="">Get in touch</Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
