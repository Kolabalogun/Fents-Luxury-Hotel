import React, { useEffect } from "react";
import AnimatedPage from "../../Utils/AnimatedPage";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import FAQMenu from "../Components/FAQMenu";

const Checkout = ({ form, room }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  console.log(room);

  return (
    <section className="my-14 flex flex-col mx-5 md:mx-24 xl:mx-56">
      <>
        <h1 className="md:text-6xl text-4xl   pb-2 ">Checkout</h1>

        <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
        <div className="h-[2px] w-14 md:w-20 bg-black"></div>

        <div className="bg-[#f6f6f6] my-6 rounded-lg p-4">
          <div className="flex justify-between ">
            <h1 className="text-3xl">Room Info</h1>
          </div>

          <div className="mt-4 h-[2px] w-full bg-[#aaa]"></div>

          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">Room Type</h1>
            <h1 className="text-2xl">{form.roomType}</h1>
          </div>

          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">Price per Night</h1>
            <h1 className="text-2xl">{room.PricePerNight}</h1>
          </div>

          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">Days of Reservation</h1>
            <h1 className="text-2xl">{form.daysOfReservation} days</h1>
          </div>

          <div className="mt-4 h-[2px] w-full bg-[#aaa]"></div>

          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">Booking Info</h1>
            <h1 className="text-2xl">{form.username}</h1>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">No of Guest</h1>
            <h1 className="text-2xl">{form.numberOfGuest}</h1>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">Date of Reservation</h1>
            <h1 className="text-2xl">
              {room.timestamp.toDate().toDateString()}
            </h1>
          </div>

          <div className="mt-4 h-[2px] w-full bg-[#aaa]"></div>

          <div className="flex justify-between mt-4">
            <h1 className="text-2xl">Total</h1>
            <h1 className="text-2xl">
              ${Number(room.PricePerNight) * Number(form.daysOfReservation)}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button className="btn btn-active btn-primary">Pay at Hotel</button>
            <button className="btn btn-accent">Pay Now</button>
          </div>
        </div>
      </>
    </section>
  );
};

export default Checkout;
