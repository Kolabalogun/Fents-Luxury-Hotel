import React from "react";

const Checkout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const location = useLocation();
  const room = location.state;

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
