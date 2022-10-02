import React from "react";
import ship from "../assets/shipImage.png";
const Ship = () => {
  return (
    <div>
      <div className="py-10">
        <img src={ship} className="h-[24rem] w-full object-cover" />
      </div>
    </div>
  );
};

export default Ship;
