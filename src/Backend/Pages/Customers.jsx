import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Function/Context";
import Navbar from "../Components/Navbar";
import Loader from "../../Components/Loader";
import AddBooking from "../Components/AddBooking";
import { Link, useParams } from "react-router-dom";

const Customers = () => {
  const { loader, RegisteredUsers } = useGlobalContext();

  console.log(RegisteredUsers);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSearch = RegisteredUsers?.filter(
    (book) =>
      book.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.Email.toLowerCase().includes(searchTerm.toLowerCase())
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
                Total Registered Users
              </div>
              <div className="stat-value w-[130px] text-[#1f2937]">
                {RegisteredUsers.length}
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
                  <th className="text-white">Name</th>
                  <th className="text-white">Email</th>
                </tr>
              </thead>
              <tbody>
                {RegisteredUsers.length > 0 ? (
                  filteredSearch.map((book, idx) => (
                    <tr className="active hover bg-white" key={idx}>
                      <th className="text-white">{idx + 1}</th>
                      <td className="text-white">{book.Name}</td>
                      <td className="text-white">{book.Email}</td>
                    </tr>
                  ))
                ) : (
                  <li>No Registered User Available</li>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default Customers;
