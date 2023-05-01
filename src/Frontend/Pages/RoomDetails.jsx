import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import FAQMenu from "../Components/FAQMenu";
import Footer from "../../Components/Footer";

const RoomDetails = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const location = useLocation();
  const room = location.state;

  console.log(room);

  return (
    <AnimatedPage>
      <Header title={room.RoomName} caption="" img={room.RoomImage} />

      <section className="my-20 flex flex-col mx-5 md:mx-24 xl:mx-56">
        <>
          <h1 className="md:text-6xl text-4xl   pb-2 ">Room Details</h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>

          <div
            className=" mt-12 text-base"
            dangerouslySetInnerHTML={{
              __html: `${room?.RoomDetails}`,
            }}
          />

          <div className="mt-6 mb-10 flex flex-col md:flex-row gap-5">
            <Link to={`/bookroom/${room.RoomName}`}>
              <button className="px-8 flex-1 flex py-3 hover:bg-black hover:text-white border-black border-2 uppercase text-sm font-semibold rounded-sm text-black ">
                Book Room
              </button>
            </Link>
            <Link to="/rooms">
              <button className=" flex-1 flex px-8 py-3 hover:bg-white hover:text-black bg-black border-black border-2  uppercase text-sm font-semibold rounded-sm text-white ">
                see other rooms
              </button>
            </Link>
          </div>
          {room.OtherImages.length > 0 && (
            <>
              <h1 className="md:text-6xl text-4xl   pb-2 ">Room Images</h1>

              <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
              <div className="h-[2px] w-14 md:w-20 bg-black"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-11">
                {room.OtherImages?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="room"
                    className="w-full h-full"
                  />
                ))}
              </div>
            </>
          )}
        </>
      </section>

      <FAQMenu />
      <Footer />
    </AnimatedPage>
  );
};

export default RoomDetails;
