import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ room, layout }) => {
  return (
    <div
      className={`flex mb-28 flex-col ${
        layout ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between`}
    >
      <div style={{ flex: 1.5 }} className="flex ">
        <img src={room.RoomImage} alt="" />
      </div>

      <div
        style={{ flex: 1 }}
        className="flex flex-col items-center flex-1  justify-center md:mx-6"
      >
        <h1 className="text-6xl   mb-10">{room.RoomName}</h1>
        <div className="roomprice ">
          ${room.PricePerNight}
          <span className="per">/night</span>
        </div>

        <p>{room.RoomDetails}</p>

        <div className="my-5 space-x-4">
          <Link to="/room" state={room}>
            <button className=" px-8 py-3 hover:bg-white hover:text-black bg-black border-black border-2  uppercase text-sm font-semibold rounded-sm text-white ">
              room details
            </button>
          </Link>
          <Link to={`/bookroom/${room.RoomName}`}>
            <button className="px-8 py-3 hover:bg-black hover:text-white border-black border-2 uppercase text-sm font-semibold rounded-sm text-black ">
              Book Room
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
