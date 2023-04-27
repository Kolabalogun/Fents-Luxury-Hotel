import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Function/Context";
import Navbar from "../Components/Navbar";
import Loader from "../../Components/Loader";
import AddBooking from "../Components/AddBooking";
import { Link, useParams } from "react-router-dom";

const Payment = () => {
  const { loader, Bookings, pageStateF, navigate } = useGlobalContext();
  Bookings.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSearch = Bookings?.filter(
    (book) =>
      book.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.payment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loader) {
    return (
      <div className="bg-[#f5f6f7] w-full  min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
        <Navbar />
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-[#f5f6f7] w-full  min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
      <Navbar />

      <>
        <div className="flex py-5 gap-7">
          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title font-cumm text-black text-lg font-bold">
                Total Bookings
              </div>
              <div className="stat-value w-[130px] text-[#1f2937]">
                {Bookings.length}
              </div>
            </div>
          </div>
          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title font-cumm text-black text-lg font-bold">
                Total Pending Payment
              </div>
              <div className="stat-value w-[130px] text-[#5114b9] ">
                {Bookings.filter((e) => e.payment === "due").length}
              </div>
            </div>
          </div>
          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title font-cumm text-black text-lg font-bold">
                Total Successful Payment
              </div>
              <div className="stat-value w-[130px] text-[#198e84]">
                {Bookings.map(
                  (item) => item.payment === "Successful" && item.totalPrice
                )
                  .filter((price) => typeof price === "number")
                  .reduce((total, price) => total + price, 0)}
              </div>
            </div>
          </div>
          <div className="stats shadow bg-white">
            <div className="stat">
              <div className="stat-title font-cumm text-black text-lg font-bold">
                Total Pending Payment
              </div>
              <div className="stat-value w-[130px] text-[#ae1e88]">
                {Bookings.map(
                  (item) => item.payment === "Due" && item.totalPrice
                )
                  .filter((price) => typeof price === "number")
                  .reduce((total, price) => total + price, 0)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white my-10 flex flex-col  p-4">
          <div className="flex mb-5 justify-between items-center">
            <h1 className="text-2xl   pb-2 ">Booking List</h1>

            <div className="flex items-center gap-5">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input w-full max-w-xs border border-black outline-none bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto bg-white">
            <table className="table  w-full">
              {/* head*/}
              <thead>
                <tr className="hover active">
                  <th className="text-white">S/N</th>
                  <th className="text-white">ID</th>
                  <th className="text-white">Name</th>
                  <th className="text-white">Booking</th>
                  <th className="text-white">Room Type</th>
                  <th className="text-white">Mobile No</th>
                  <th className="text-white">Check In</th>
                  <th className="text-white">Check Out</th>
                  <th className="text-white">Payment</th>
                  <th className="text-white">Payment Type</th>
                </tr>
              </thead>
              <tbody>
                {Bookings.length > 0 ? (
                  filteredSearch.map((book, idx) => (
                    <tr className="active hover bg-white" key={book.dateId}>
                      <th className="text-white">{idx + 1}</th>

                      <td className="text-white">{book.dateId}</td>
                      <td className="text-white">{book.username}</td>
                      <td className="text-white">{book.bookStatus}</td>
                      <td className="text-white">{book.roomType}</td>
                      <td className="text-white">{book.phone}</td>
                      <td className="text-white">{book.checkIn}</td>
                      <td className="text-white">{book.checkOut}</td>
                      <td className="text-white">{book.payment}</td>
                      <td className="text-white">{book.paymentType}</td>
                    </tr>
                  ))
                ) : (
                  <li>No Payment Details Available</li>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Payment;
