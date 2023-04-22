import React from "react";
import { useGlobalContext } from "../../Function/Context";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import RoomCard from "../Components/Rooom/RoomCard";
import FAQMenu from "../Components/FAQMenu";

const Rooms = () => {
  const { Rooms } = useGlobalContext();

  console.log(Rooms);

  return (
    <AnimatedPage>
      <Header title={"Our Rooms"} caption="" />

      <section className="my-20">
        <div className="flex justify-center items-center mb-16 flex-col">
          <h1 className="text-5xl font-light mb-10">Enjoy Your Stay</h1>
          <p>
            A hotel is an establishment that provides paid lodging on a
            short-term basis. Facilities provided may range from a
            modest-quality mattress
          </p>
        </div>

        <div className="">
          {Rooms ? (
            Rooms.map((room, index) => {
              return (
                <RoomCard
                  key={index}
                  room={room}
                  layout={index % 2 === 0 && true}
                />
              );
            })
          ) : (
            <p>No Room Available</p>
          )}
        </div>
      </section>

      <FAQMenu />
    </AnimatedPage>
  );
};

export default Rooms;
