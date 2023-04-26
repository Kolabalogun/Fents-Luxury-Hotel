import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="flex flex-col py-10 text-center sm:text-left">
      <section className="py-10 mx-5 md:mx-30 lg:mx-60">
        <div className="flex flex-col gap-10 md:flex-row">
          <div style={{ flex: 2 }} className="flex  flex-col">
            <h2 className="text-xl my-5">About Us</h2>
            <span>
              <p className="text-[14px]   font-rob my-5">
                A hotel is an establishment that provides paid lodging on a
                short-term basis. Facilities provided may range from a
                modest-quality.
              </p>
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl my-5">Navigation</h2>

            <div className="flex flex-col">
              <a className="text-[14px]   font-rob my-2" href="#">
                HOME
              </a>
              <a className="text-[14px]   font-rob my-2" href="#">
                ROOMS
              </a>
              <a className="text-[14px]   font-rob my-2" href="#">
                AMENITIES
              </a>
              <a className="text-[14px]   font-rob my-2" href="#">
                GALLERY
              </a>
              <a className="text-[14px]   font-rob my-2" href="#">
                ABOUT US
              </a>
              <a className="text-[14px]   font-rob my-2" href="#">
                CONTACT
              </a>
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl my-5">Address</h2>
            <span>
              <p className="text-[14px]   font-rob my-2">
                273 South Riverview Rd. Nigeria.
              </p>
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <h2 className="text-xl my-5">Telephone</h2>
            <span>
              <p className="text-[14px]   font-rob my-2">+1 234 5678 910</p>
              <p className="text-[14px]   font-rob my-2">+1 234 5678 910</p>
            </span>
          </div>
        </div>
      </section>

      <section className=" flex justify-between items-center py-5 mx-5 md:mx-30 lg:mx-60">
        <div className="">
          <p className="font-rob text-[14px]  ">
            Developed by{" "}
            <span>
              <a
                className="text-[#ff4c2d]"
                href="https://ibrahimkolabalogun.web.app/"
              >
                Ibrahim
              </a>
            </span>
          </p>
        </div>
        <div className="flex gap-6">
          <a href="" className="bg-black rounded-full p-3">
            <FaFacebookF className="h-4 w-4 text-white" />
          </a>
          <a href="" className="bg-black rounded-full p-3">
            <ImTwitter className="h-4 w-4 text-white" />
          </a>
          <a href="" className="bg-black rounded-full p-3">
            <FaInstagram className="h-4 w-4 text-white" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
