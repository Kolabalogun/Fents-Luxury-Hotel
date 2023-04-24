import React, { useEffect } from "react";
import Header from "../../Components/Header";
import AnimatedPage from "../../Utils/AnimatedPage";
import FAQMenu from "../Components/FAQMenu";
import { useGlobalContext } from "../../Function/Context";

const Profile = () => {
  const { user } = useGlobalContext();

  console.log(user);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <AnimatedPage>
      <Header
        title={"Your Profile"}
        caption="See informations about you as well as your experience with us."
      />

      <section className="my-20 flex flex-col mx-5 md:mx-24 xl:mx-56">
        <>
          <h1 className="md:text-6xl text-4xl   pb-2 ">Your Info</h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>

          <div className="bg-[#f6f6f6] my-6 rounded-lg p-4">
            <div className="flex justify-between mt-4">
              <h1 className="text-lg md:text-2xl">Name</h1>
              <h1 className="text-lg md:text-2xl">{user.displayName}</h1>
            </div>

            <div className="flex justify-between mt-4">
              <h1 className="text-lg md:text-2xl">Email</h1>
              <h1 className="text-lg md:text-2xl">{user.email}</h1>
            </div>
          </div>
        </>
        <>
          <h1 className="md:text-6xl text-4xl   pb-2 ">Booking History</h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>

          <div className="bg-[#f6f6f6] my-6 rounded-lg p-4">
            <div className="flex justify-between mt-4">
              <h1 className="text-lg md:text-2xl">Name</h1>
              <h1 className="text-lg md:text-2xl">{user.displayName}</h1>
            </div>

            <div className="flex justify-between mt-4">
              <h1 className="text-lg md:text-2xl">Email</h1>
              <h1 className="text-lg md:text-2xl">{user.email}</h1>
            </div>
          </div>
        </>
      </section>

      <FAQMenu />
    </AnimatedPage>
  );
};

export default Profile;
