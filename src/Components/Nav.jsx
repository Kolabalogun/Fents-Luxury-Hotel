import React, { useState } from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../Function/Context";

const Navbar = ({ galleryBg }) => {
  const { navigate } = useGlobalContext();
  const [nav, setnav] = useState(false);

  function handleNavClick() {
    setnav(!nav);
  }

  const [windowHeight, windowHeightF] = React.useState(0);

  React.useEffect(() => {
    const watchHeight = () => {
      let scrollY = window.scrollY;

      windowHeightF(scrollY);
    };

    window.addEventListener("scroll", watchHeight);

    return function () {
      window.removeEventListener("scroll", watchHeight);
    };
  }, [windowHeight]);

  const bg = {
    backgroundColor: windowHeight > 0 ? "white" : "transparent",
  };
  const tcolo = {
    color: windowHeight > 0 ? "#000" : "white",
  };

  return (
    <div className="relative">
      <div className="absolute  h-screen w-full absbg"> </div>
      <div
        className={`w-full h-[80px] z-[1000]   fixed ${
          windowHeight > 0 ? "bg-white" : "bg-transparent"
        } top-0 bg-transparent transition-all md:px-[50px] xl:px-[120px] px-[10px] shadow-sm ${
          galleryBg && "bg-[#0d1727]"
        }`}
      >
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center ">
            <h1 style={tcolo} className="text-3xl  mr-5   text-white">
              Fents Luxury Hotel
            </h1>
          </div>

          <ul className="hidden md:flex ">
            <Link
              activeClass="active"
              to="home"
              href="/"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className={
                windowHeight > 0
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "
              }
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className={
                windowHeight > 0
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "
              }
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="/rooms"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className={
                windowHeight > 0
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "
              }
              onClick={() => {
                navigate("/rooms");
              }}
            >
              rooms
            </Link>
            {/* <Link
              activeClass="active"
              to="/project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className={
                windowHeight > 0
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "
              }
              onClick={() => {
                navigate("/gallery");
              }}
            >
              Gallery
            </Link> */}

            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className={
                windowHeight > 0
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linked m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 link m-4 text-white  "
              }
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Link>
          </ul>

          <div className="md:hidden cursor-pointer" onClick={handleNavClick}>
            {!nav ? (
              <img
                src={windowHeight > 0 ? "/menu.png" : "/menu.svg"}
                className="w-8 h-10 fill-white"
                alt="menu"
              />
            ) : (
              <img
                src={windowHeight > 0 ? "/closeb.svg" : "/close.svg"}
                className="w-6 h-8 fill-white"
                alt="close"
              />
            )}
          </div>
        </div>

        {nav && (
          <ul className=" h-screen w-full bg-zinc-200 md:hidden  px-8">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-2 font-cumm">
                Home
              </li>
            </Link>
            <Link
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/about");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-2 font-cumm">
                About
              </li>
            </Link>

            <Link
              activeClass="active"
              to="/rooms"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/rooms");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-2 font-cumm">
                Rooms
              </li>
            </Link>

            {/* <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/gallery");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-2 font-cumm">
                Gallery
              </li>
            </Link> */}
            <Link
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-2 font-cumm">
                Contact
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
