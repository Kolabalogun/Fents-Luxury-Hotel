import React, { useEffect } from "react";
import Header from "../../Components/Header";
import AnimatedPage from "../../Utils/AnimatedPage";
import FAQMenu from "../Components/FAQMenu";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <AnimatedPage>
      <Header
        title={"About Fents Luxury Hotel"}
        caption="Facilities provided may range from a modest-quality mattress in a small room to large suites with bigger."
      />

      <section className="my-20 flex flex-col mx-5 md:mx-24 xl:mx-56">
        <>
          <h1 className="md:text-6xl text-4xl   pb-2 ">History</h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>

          <p className="my-12 md:texl-xl text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eveniet sed magnam consectetur animi qui hic delectus facilis natus
            impedit velit voluptatibus officiis, voluptate quaerat placeat est
            asperiores libero vitae eos, harum quia. Officiis nemo earum,
            quaerat eaque ducimus facere, repellat, expedita dolorum ea
            excepturi voluptatibus odio consequuntur suscipit. Quae ut
            laudantium repudiandae magnam? Beatae molestias nemo aperiam
            laudantium a omnis eaque iusto laboriosam error assumenda! Assumenda
            accusamus maiores nostrum cupiditate natus quis odit alias quae
            aspernatur totam, est quia in molestiae blanditiis consectetur.
            Aperiam voluptates ab veniam sunt vel! Corrupti provident quia est
            minus eaque quidem dolorem nobis facere. <br />
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nobis non a, facere temporibus repudiandae ut officia totam optio
            eius ipsum deleniti ratione quaerat qui culpa laboriosam cupiditate
            doloribus impedit excepturi dolorem dicta distinctio molestias
            repellendus. Minus labore quod laborum aspernatur cupiditate. Odit
            expedita ipsa corrupti reiciendis ducimus necessitatibus cum
            voluptates ea deleniti natus alias quas rem, amet neque officiis ab
            incidunt ex voluptatum veritatis eum! Eligendi consectetur
            blanditiis placeat itaque ea fugiat quod? Debitis rerum, provident
            facilis dolor deserunt, molestias eveniet quia perspiciatis nostrum
            corrupti obcaecati, dolores eaque rem quam ex animi maiores repellat
            magnam! Voluptates ad perspiciatis vel aliquam.
          </p>

          <div className="">
            <img src="/slider_1.jpg" alt="room" className="w-full h-full" />
          </div>
        </>
        <>
          <h1 className="md:text-6xl text-4xl mt-20  pb-2 ">
            More Information
          </h1>

          <div className="h-[2px] md:w-48 w-28 mb-1 bg-black"></div>
          <div className="h-[2px] w-14 md:w-20 bg-black"></div>

          <p className="my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            eveniet sed magnam consectetur animi qui hic delectus facilis natus
            impedit velit voluptatibus officiis, voluptate quaerat placeat est
            asperiores libero vitae eos, harum quia. Officiis nemo earum,
            quaerat eaque ducimus facere, repellat, expedita dolorum ea
            excepturi voluptatibus odio consequuntur suscipit. Quae ut
            laudantium repudiandae magnam? Beatae molestias nemo aperiam
            laudantium a omnis eaque iusto laboriosam error assumenda! Assumenda
            accusamus maiores nostrum cupiditate natus quis odit alias quae
            aspernatur totam, est quia in molestiae blanditiis consectetur.
            Aperiam voluptates ab veniam sunt vel! Corrupti provident quia est
            minus eaque quidem dolorem nobis facere. <br />
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nobis non a, facere temporibus repudiandae ut officia totam optio
            eius ipsum deleniti ratione quaerat qui culpa laboriosam cupiditate
            doloribus impedit excepturi dolorem dicta distinctio molestias
            repellendus. Minus labore quod laborum aspernatur cupiditate. Odit
            expedita ipsa corrupti reiciendis ducimus necessitatibus cum
            voluptates ea deleniti natus alias quas rem, amet neque officiis ab
            incidunt ex voluptatum veritatis eum! Eligendi consectetur
            blanditiis placeat itaque ea fugiat quod? Debitis rerum, provident
            facilis dolor deserunt, molestias eveniet quia perspiciatis nostrum
            corrupti obcaecati, dolores eaque rem quam ex animi maiores repellat
            magnam! Voluptates ad perspiciatis vel aliquam.
          </p>

          <div className="">
            <img src="/slider_2.jpg" alt="room" className="w-full h-full" />
          </div>
        </>
      </section>

      <FAQMenu />
    </AnimatedPage>
  );
};

export default About;
