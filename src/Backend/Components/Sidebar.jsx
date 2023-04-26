import React from "react";
import { useGlobalContext } from "../../Function/Context";

const Sidebar = () => {
  const { pageState, pageStateF } = useGlobalContext();
  return (
    <div className="adminSidebar w-[13%] bg-[#101924]  shadow-lg">
      <h3 className="font-cumm text-center text-3xl text-white">FENT HOTEL</h3>

      <div className="menus ">
        <div className="flex flex-col gap-8 mt-6">
          <button
            onClick={() => {
              pageStateF("default");
            }}
            className="btn btn-primary"
          >
            Home
          </button>
          <button
            onClick={() => {
              pageStateF("rooms");
            }}
            className="btn btn-primary"
          >
            Rooms
          </button>
          <button
            onClick={() => {
              pageStateF("booking");
            }}
            className="btn btn-primary"
          >
            Bookings
          </button>
          <button
            onClick={() => {
              pageStateF("faq");
            }}
            className="btn btn-primary"
          >
            FAQ
          </button>

          <button
            onClick={() => {
              pageStateF("users");
            }}
            className="btn btn-primary"
          >
            Customers
          </button>
          <button
            onClick={() => {
              pageStateF("payment");
            }}
            className="btn btn-primary"
          >
            Payment
          </button>
          <button
            onClick={() => {
              pageStateF("settings");
            }}
            className="btn btn-primary"
          >
            Settings
          </button>
        </div>
      </div>
      {/* 
            <div className="foot">
                <div className="sidebarImg">
                    <img src="svg/w (1).svg" alt="" />
                </div>
                <button onClick={() => {
                    pageStateF('student')
                }}>Register Student</button>
            </div> */}
    </div>
  );
};

export default Sidebar;
