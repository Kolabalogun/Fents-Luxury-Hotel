import React from "react";

import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./Context";
import About from "../Frontend/Pages/About";
import Home from "../Frontend/Pages/Home";
import Rooms from "../Frontend/Pages/Rooms";
import Contact from "../Frontend/Pages/Contact";
import RoomDetails from "../Frontend/Pages/RoomDetails";
import BookRoom from "../Frontend/Pages/BookRoom";
import Auth from "../Frontend/Pages/Auth";
import Checkout from "../Frontend/Pages/Checkout";
import Dashboard from "../Backend/Dashboard";
import Shot from "../Frontend/Pages/Shot";
import Profile from "../Frontend/Pages/Profile";
import Thankyou from "../Frontend/Pages/Thankyou";
import DateInput from "../Frontend/Pages/Demo";

const Pages = () => {
  const { user } = useGlobalContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room" element={<RoomDetails />} />
      <Route path="/bookroom/:id" element={<BookRoom />} />
      <Route path="/checkout/:id" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/userprofile" element={<Profile />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="/shot" element={<Shot />} />
      <Route path="/demo" element={<DateInput />} />

      {user && (
        <>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/updateroom/:id" element={<Dashboard />} />
        </>
      )}
    </Routes>
  );
};

export default Pages;
