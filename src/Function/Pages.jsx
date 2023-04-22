import React from "react";

import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./Context";
import About from "../Frontend/Pages/About";
import Home from "../Frontend/Pages/Home";
import Rooms from "../Frontend/Pages/Rooms";
import Contact from "../Frontend/Pages/Contact";
import RoomDetails from "../Frontend/Pages/RoomDetails";
import BookRoom from "../Frontend/Pages/BookRoom";

const Pages = () => {
  const { user } = useGlobalContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room" element={<RoomDetails />} />
      <Route path="/bookroom/:id" element={<BookRoom />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Pages;
