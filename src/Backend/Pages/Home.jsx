import React from "react";
import Navbar from "../Components/Navbar";
import Loader from "../../Components/Loader";
import { useGlobalContext } from "../../Function/Context";

const Home = () => {
  const { loader } = useGlobalContext();

  return (
    <div className="bg-[#f5f6f7] w-full  min-h-[100vh] px-4 py-1 pb-4 h-full dashboard">
      <Navbar />
      {loader ? (
        <Loader />
      ) : (
        <div className="rounded py-4 px-6 h-[full] mt-4 w-full bg-white shadow-lg flex flex-col"></div>
      )}
    </div>
  );
};

export default Home;
