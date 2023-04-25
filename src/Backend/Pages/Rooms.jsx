import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Function/Context";
import { Link, useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import Navbar from "../Components/Navbar";
import NewRoom from "../Components/NewRoom";

const AdminRooms = () => {
  const { pageStateF, Rooms, handleDeleteRoom, loader } = useGlobalContext();

  //   const Rooms = Rooms;

  //   Rooms.sort(function (a, b) {
  //     return b.dateId - a.dateId;
  //   });

  const [state, setstate] = useState(true);

  function handleState(params) {
    setstate(!state);
  }

  const { id } = useParams();

  useEffect(() => {
    id && pageStateF("rooms");

    id && setstate(false);
  }, [id]);

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
        {state ? (
          <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col">
            <div
              className="flex flex-col p-3
          "
            >
              <h1 className="text-[#0d1727] text-3xl leading-relaxed font-semibold mb-1">
                Rooms
              </h1>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 my-5 mx-3">
              {Rooms.length > 0 ? (
                Rooms?.map((room, index) => (
                  <div className="flex flex-col" key={index}>
                    <div className="cursor-pointer rounded-lg  shadow-2xl">
                      <img
                        src={room?.RoomImage}
                        alt="roomImg"
                        className="w-[100%] rounded-lg  h-[300px]"
                      />
                    </div>
                    <div className="p-1 py-6 flex flex-col">
                      <h2 className="font-semibold text-2xl text-[#344767]">
                        {room?.RoomName}
                      </h2>

                      <div
                        className="py-4 text-[13px]"
                        dangerouslySetInnerHTML={{
                          __html: `${room?.RoomDetails.substring(0, 150)}...`,
                        }}
                      />

                      <div className="flex justify-between">
                        <Link to={`/admin/updateroom/${room?.id}`}>
                          <button className="btn btn-primary uppercase ">
                            EDIT room
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDeleteRoom(room?.id)}
                          className="btn btn-outline btn-secondary uppercase "
                        >
                          DELETE room
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <li>No Room Available</li>
              )}

              <div
                onClick={handleState}
                className="flex py-5 flex-col border-dashed border-[3px] hover:opacity-60 bg-white cursor-pointer rounded-lg justify-center items-center"
              >
                <img src="svg/plus.svg" alt="" className="h-5" />

                <h5 className="py-5 font-semibold text-[#344767]">
                  New Article
                </h5>
              </div>
            </div>
          </div>
        ) : (
          <NewRoom handleState={handleState} />
        )}
      </>
    </div>
  );
};

export default AdminRooms;
