import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-buttonColor text-white font-[400] py-2 px-6 rounded md:ml-8 hover:bg-black 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
