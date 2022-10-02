import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="container px-4 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <ul className="flex gap-4 font-[500] text-[11px]  md:text-[16px]">
            <li>Imprint</li>
            <li>Data security</li>
            <li>Conditions</li>
            <li>Cookies</li>
            <li>Customs support</li>
          </ul>
          <h4 className="font-[200] mt-5 md:mt-0 text-[12px]">
            © 2021 Customs Support Group. All rights reserved.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
