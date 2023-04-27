import React, { useEffect, useState } from "react";

import AnimatedPage from "../../Utils/AnimatedPage";
import { useGlobalContext } from "../../Function/Context";
import Header from "../../Components/Header";
import Loader from "../../Components/Loader";
import RoomCard from "../Components/Rooom/RoomCard";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import FAQ from "../../Backend/Pages/FAQ";
import FAQMenu from "../Components/FAQMenu";
import { AmenitiesData } from "../Components/Amenites";

const Home = () => {
  const { loader, Rooms, pageInfos } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <AnimatedPage>
      <>
        <Header
          title={pageInfos.homepageCaptionTitle}
          caption={pageInfos.homepageCaption}
        />
      </>

      <section className="my-20 ">
        <div className="flex justify-center items-center mb-16 flex-col">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  md:mb-10 ">
            Featured Rooms
          </h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>
        </div>

        <div>
          {Rooms.length > 0 ? (
            Rooms.slice(0, 2).map((room, index) => {
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

        <Link
          className="w-full flex self-center  items-center justify-center "
          to={`/rooms`}
        >
          <button className="px-12 mt-[-90px] py-4 hover:bg-black hover:text-white border-black border-2 uppercase text-sm font-semibold rounded-sm text-black ">
            SEE OTHER ROOMS
          </button>
        </Link>
      </section>

      <section className="py-10 mx-5 md:mx-30 lg:mx-60 ">
        <div className="flex justify-center items-center mb-16 flex-col">
          <h1 className="text-4xl md:text-5xl font-bold mb-4  md:mb-10 ">
            Hotel Amenities
          </h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>
        </div>

        <div className="  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10 my-10">
          {AmenitiesData.map((item, idx) => (
            <div className=" flex flex-col items-center border py-10 px-5">
              <div key={idx} className=" my-5">
                <img src={item.img} alt="car-park" className="h-20" />
              </div>

              <h2 className="subTitle text-2xl text-center my-2">
                {item.title}
              </h2>
              <span>
                <p className="paragraph text-sm text-center my-5">{item.txt}</p>
              </span>
            </div>
          ))}
        </div>
      </section>
      <FAQMenu />
      <Footer />
    </AnimatedPage>
  );
};

export default Home;
