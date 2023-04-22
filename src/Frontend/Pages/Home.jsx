import React, { useEffect, useState } from "react";

import AnimatedPage from "../../Utils/AnimatedPage";
import { useGlobalContext } from "../../Function/Context";
import Header from "../../Components/Header";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <>
        <Header
          title={"Fents Luxury Hotel"}
          caption="See what a diffrence makes"
        />
      </>
    </AnimatedPage>
  );
};

export default Home;
