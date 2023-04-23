import React, { useState } from "react";
import { Link } from "react-scroll";
import { useGlobalContext } from "../Function/Context";

const Navbar = ({ galleryBg }) => {
  const { navigate, user, handleLogout } = useGlobalContext();
  const [nav, setnav] = useState(false);

  let username = user?.displayName;

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
            <h1
              style={tcolo}
              className="md:text-3xl text-2xl   mr-5   text-white"
            >
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
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkedcss m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
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
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkedcss m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
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
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkedcss m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
              onClick={() => {
                navigate("/rooms");
              }}
            >
              rooms
            </Link>

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
                  ? " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkedcss m-4 text-white"
                  : " text-[15px]  font-cumm uppercase cursor-pointer  border-b-zinc-300 py-2 linkcss m-4 text-white  "
              }
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </Link>
            {user ? (
              <div className="dropdown py-2 mx-4 dropdown-hover">
                <label>
                  <div className="avatar online placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <span className="text-xl">{username?.charAt(0)}</span>
                    </div>
                  </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-1 shadow">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="mt-3   text-[15px]  font-cumm uppercase cursor-pointer bg-red-600 px-5 font-semibold  border-b-zinc-300 py-2 w-28 text-white  rounded-lg"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                activeClass="active"
                to="/auth"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                style={tcolo}
                className={`
               ${windowHeight > 0 ? "linkedcss" : " linkcss"} 
              text-[15px]  font-cumm uppercase cursor-pointer bg-black px-5 font-semibold  border-b-zinc-300 py-2  m-4 text-white  rounded-lg `}
                onClick={() => {
                  navigate("/auth");
                }}
              >
                LOG in
              </Link>
            )}
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
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 font-cumm">
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
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 font-cumm">
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
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 font-cumm">
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
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 font-cumm">
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
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 font-cumm">
                Contact
              </li>
            </Link>
            <Link
              activeClass="active"
              to="/auth"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={tcolo}
              className="border-b-2  border-zinc-300 w-full cursor-pointer"
              onClick={() => {
                navigate("/auth");
              }}
            >
              <li className="border-b-2  text-black border-zinc-300 w-full cursor-pointer py-3 font-cumm">
                Log In
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
