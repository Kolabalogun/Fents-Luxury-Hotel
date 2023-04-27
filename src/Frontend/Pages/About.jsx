import React, { useEffect } from "react";
import Header from "../../Components/Header";
import AnimatedPage from "../../Utils/AnimatedPage";
import FAQMenu from "../Components/FAQMenu";
import Footer from "../../Components/Footer";
import { useGlobalContext } from "../../Function/Context";

const About = () => {
  const { pageInfos } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <AnimatedPage>
      <Header
        title={pageInfos.aboutCaptionTitle}
        caption={pageInfos.aboutCaption}
      />

      <section className="my-20 flex flex-col mx-5 md:mx-24 xl:mx-56">
        <>
          <h1 className="md:text-6xl text-4xl   pb-2 ">History</h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>

          <div
            className="my-12 md:texl-xl text-base"
            dangerouslySetInnerHTML={{
              __html: `${pageInfos.aboutHistory}`,
            }}
          />

          <div className="">
            <img
              src={pageInfos.aboutHistoryImg}
              alt="room"
              className="w-full h-full"
            />
          </div>
        </>
        <>
          <h1 className="md:text-6xl text-4xl mt-20  pb-2 ">
            More Information
          </h1>
          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>
          z{" "}
          <div
            className="my-12 md:texl-xl text-base"
            dangerouslySetInnerHTML={{
              __html: `${pageInfos.aboutMoreInfo}`,
            }}
          />
          <div className="">
            <img
              src={pageInfos.aboutMoreInfoImg}
              alt="room"
              className="w-full h-full"
            />
          </div>
        </>
      </section>

      <FAQMenu />
      <Footer />
    </AnimatedPage>
  );
};

export default About;
