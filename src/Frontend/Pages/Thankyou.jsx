import React, { useEffect } from "react";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import FAQMenu from "../Components/FAQMenu";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Thankyou = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <Header title={"Thank you!"} caption="" />

      <section className="my-20 flex flex-col mx-5 md:mx-24 xl:mx-56">
        <div className="flex items-center justify-center ">
          <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
            <div className="flex flex-col items-center p-4 space-y-2 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600 w-28 h-28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Thank You !
              </h1>
              <p className="mb-4 text-center">
                Thank you for your booking with us. Proceed to our Hotel with
                your Booking Details
              </p>
              <div className="flex  flex-col md:flex-row  gap-6">
                <Link className="w-full" to="/">
                  <button className="btn btn-active btn-primary font-cumm text-lg w-full">
                    Home
                  </button>
                </Link>
                <Link className="w-full" to="/userprofile">
                  <button className="btn btn-accent font-cumm text-lg ">
                    Bookings
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQMenu />
      <Footer />
    </AnimatedPage>
  );
};

export default Thankyou;
