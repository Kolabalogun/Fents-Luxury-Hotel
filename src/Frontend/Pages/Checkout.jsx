import React, { useEffect } from "react";

const Checkout = ({ form, room, checkIn, checkOut, numDays, handleSubmit }) => {
  return (
    <section className="my-14 flex flex-col mx-5 md:mx-24 xl:mx-56">
      <>
        <h1 className="md:text-6xl text-2xl   pb-2 ">Checkout</h1>

        <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
        <div className="h-[2px] w-14 md:w-20 bg-black"></div>

        <div className="bg-[#f6f6f6] my-6 rounded-lg p-4">
          <div className="flex justify-between ">
            <h1 className="text-2xl md:text-3xl">Room Info</h1>
          </div>

          <div className="mt-4 h-[2px] w-full bg-[#aaa]"></div>

          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">Room Type</h1>
            <h1 className="text-lg md:text-2xl">{form.roomType}</h1>
          </div>

          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">Price per Night</h1>
            <h1 className="text-lg md:text-2xl">${room.PricePerNight}</h1>
          </div>

          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">Days of Reservation</h1>
            <h1 className="text-lg md:text-2xl">{numDays} days</h1>
          </div>

          <div className="mt-4 h-[2px] w-full bg-[#aaa]"></div>

          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">Booking Info</h1>
            <h1 className="text-lg md:text-2xl">{form.username}</h1>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">No of Guest</h1>
            <h1 className="text-lg md:text-2xl">{form.numberOfGuest}</h1>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">Check In</h1>
            <h1 className="text-lg md:text-2xl">{checkIn}</h1>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="text-lg md:text-2xl">Check Out</h1>
            <h1 className="text-lg md:text-2xl">{checkOut}</h1>
          </div>

          <div className="mt-4 h-[2px] w-full bg-[#aaa]"></div>

          <div className="flex justify-between mt-4">
            <h1 className="text-xl md:text-2xl">Total</h1>
            <h1 className="text-2xl">
              ${Number(room.PricePerNight) * Number(numDays)}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={handleSubmit}
              className="btn btn-active btn-primary"
            >
              Pay at Hotel
            </button>
            <button className="btn btn-accent">Pay Now</button>
          </div>
        </div>
      </>
    </section>
  );
};

export default Checkout;
