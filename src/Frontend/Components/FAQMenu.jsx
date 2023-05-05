import React from "react";
import { Link } from "react-router-dom";

const FAQMenu = () => {
  return (
    <div className="md:py-36 py-24  md:px-5 flex items-center justify-center bg-[#e6e6e6]">
      <h1 className="md:text-3xl text-2xl text-center text-black">
        If you have any special requests, please feel free to{" "}
        <Link className="underline border-b" to="/contact">
          Contact Us
        </Link>{" "}
        or call us. +234 810 395 1449
      </h1>
    </div>
  );
};

export default FAQMenu;
