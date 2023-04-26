import React, { useEffect } from "react";
import Header from "../../Components/Header";
import AnimatedPage from "../../Utils/AnimatedPage";
import FAQMenu from "../Components/FAQMenu";
import { useGlobalContext } from "../../Function/Context";
import Loader from "../../Components/Loader";
import Footer from "../../Components/Footer";

const Profile = () => {
  const { user, Bookings, handleDeleteBookings } = useGlobalContext();

  Bookings.sort(function (a, b) {
    return b.dateId - a.dateId;
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (Bookings.length === 0) {
    return <Loader />;
  }

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

          {Bookings.length > 0 ? (
            Bookings.map((book, index) => {
              if (book.userId === user.uid) {
                return (
                  <div key={book.dateId} className="border my-4">
                    <div className=" p-[10px] sm:p-[20px]">
                      <div
                        className="flex
                   justify-between items-center"
                      >
                        <div className=" flex  font-semibold text-[18px] mb-[5px] font-cumm uppercase ">
                          <span className="flex">
                            <span className="hidden sm:flex">Check</span> In{" "}
                            {book.checkIn}
                          </span>
                          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                          <span className="flex">
                            <span className="text-medium-gray flex ">
                              <span className="hidden sm:flex">Check</span> Out{" "}
                              {book.checkOut}
                            </span>
                          </span>
                        </div>
                        <></>
                      </div>

                      <div className="flex mt-5 flex-col">
                        <h1 className="text-black uppercase text-2xl font-bold font-cumm   mb-[15px] ">
                          {book.roomType}
                        </h1>
                        <h1 className="text-black uppercase text-base font-bold font-cumm   mb-[15px] ">
                          Number of Guest: {book.numberOfGuest}
                        </h1>
                      </div>

                      <div
                        className="mt-4 text-[12px] font-cumm"
                        dangerouslySetInnerHTML={{
                          __html: book.description,
                        }}
                      />

                      <div className="flex justify-between items-center">
                        <button
                          className={`btn ${
                            book.bookStatus === "Pending"
                              ? "btn-primary"
                              : book.bookStatus === "Checked In"
                              ? "btn btn-accent"
                              : book.bookStatus === "Checked Out"
                              ? "btn btn-secondary"
                              : ""
                          }`}
                        >
                          {book.bookStatus}
                        </button>

                        <button
                          onClick={() => handleDeleteBookings(book.id)}
                          className="btn btn-secondary  font-bold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <li>No Booking Available</li>
          )}
        </>
      </section>

      <FAQMenu />
      <Footer />
    </AnimatedPage>
  );
};

export default Profile;
