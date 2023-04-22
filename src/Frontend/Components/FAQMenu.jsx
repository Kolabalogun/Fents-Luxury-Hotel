import React from "react";
import { Link } from "react-router-dom";

const FAQMenu = () => {
  return (
    <div className="py-36  flex items-center justify-center bg-[#e6e6e6]">
      <h1 className="text-3xl text-black">
        If you have any special requests, please feel free to{" "}
        <Link to="/contact">Contact Us</Link> or call us. +12.345.678.9012
      </h1>
    </div>
  );
};

export default FAQMenu;
