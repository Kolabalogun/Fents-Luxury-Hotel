import React from "react";
import Navbar from "./Nav";

import { Link } from "react-scroll";

const Header = ({ title, caption, img }) => {
  return (
    <div
      style={{ backgroundImage: img ? `url(${img})` : `url('slider_2.jpg')` }}
      className="h-screen w-full header  relative items-center"
    >
      <Navbar />

      <div className="h-[100vh] justify-center flex text-center px-3  items-center flex-col">
        <h1 className="text-white py-4 z-30 md:text-7xl  text-4xl">{title}</h1>
        <p className="text-white md:mt-7 text-base md:text-xl  mt-0  z-30">
          {caption}
        </p>
      </div>

      <Link
        activeClass="active"
        to=""
        spy={true}
        smooth={true}
        offset={-80}
        duration={800}
        className="absolute cursor-pointer hover:scale-[0.9]  bottom-5 left-[46%] transition-all duration-200 delay-100  mouse"
      >
        <span className="mouse-wheel"></span>
      </Link>
    </div>
  );
};

export default Header;
