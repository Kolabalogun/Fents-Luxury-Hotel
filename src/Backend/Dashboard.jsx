import React, { useEffect } from "react";

import Home from "./Pages/Home";
import { useGlobalContext } from "../Function/Context";
import { auth } from "../Utils/Firebase";
import FAQ from "./Pages/FAQ";
import Sidebar from "./Components/Sidebar";

import AdminRooms from "./Pages/Rooms";
import Booking from "./Pages/Booking";
import Customers from "./Pages/Customers";
import Payment from "./Pages/Payment";

const Dashboard = () => {
  const { pageState, navigate } = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
      } else {
        navigate("/auth");
      }
    });
  }, []);

  return (
    <div>
      <div className="w-full h-[400px] md:hidden flex flex-col items-center justify-center text-center">
        <h1 className="text-[2rem] mb-8">
          Oops!! <br /> Error loading page.
        </h1>
        <p className="text-[1.2rem]">
          Page will not display on small screen devices...
        </p>
      </div>

      <div className="admin hidden md:block">
        <Sidebar />

        {pageState === "faq" ? (
          <FAQ />
        ) : pageState === "rooms" ? (
          <AdminRooms />
        ) : pageState === "booking" ? (
          <Booking />
        ) : pageState === "users" ? (
          <Customers />
        ) : pageState === "payment" ? (
          <Payment />
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
