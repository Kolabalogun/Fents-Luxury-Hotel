import React, { useEffect } from "react";
import AnimatedPage from "../../Utils/AnimatedPage";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";

const Checkout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const location = useLocation();
  const form = location.state;

  return (
    <AnimatedPage>
      <Header title={room.RoomName} caption="" img={room.RoomImage} />

      <section className="my-20 flex flex-col mx-5 md:mx-24 xl:mx-56">
        <>
          <h1 className="md:text-6xl text-4xl   pb-2 ">Checkout</h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>
        </>
      </section>

      <FAQMenu />
    </AnimatedPage>
  );
};

export default Checkout;
