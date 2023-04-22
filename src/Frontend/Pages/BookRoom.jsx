import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import FAQMenu from "../Components/FAQMenu";
import { useGlobalContext } from "../../Function/Context";

const BookRoom = () => {
  const { loader, Rooms } = useGlobalContext();

  const { id } = useParams();

  const [room, setroom] = useState(null);

  useEffect(() => {
    window.scroll(0, 0);

    if (Rooms.length > 0) {
      function nn() {
        const selectedRoom = Rooms?.filter((room, index) => {
          return room.RoomName === id;
        });
        setroom(selectedRoom);
      }

      id && nn();
    }
  }, [Rooms, id]);

  console.log(room);

  if (!room) {
    return <p>No data</p>;
  }

  return (
    <AnimatedPage>
      {room.map((room, index) => {
        return (
          <>
            <Header title={room?.RoomName} caption="" img={room?.RoomImage} />

            <section className="my-20 flex flex-col mx-56">
              <>
                <h1 className="text-6xl ]  pb-2 ">Room Details</h1>

                <div className="h-[2px] w-48 mb-1 bg-black"></div>
                <div className="h-[2px] w-20 bg-black"></div>

                <p className="mt-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis eveniet sed magnam consectetur animi qui hic delectus
                  facilis natus impedit velit voluptatibus officiis, voluptate
                  quaerat placeat est asperiores libero vitae eos, harum quia.
                  Officiis nemo earum, quaerat eaque ducimus facere, repellat,
                  expedita dolorum ea excepturi voluptatibus odio consequuntur
                  suscipit. Quae ut laudantium repudiandae magnam? Beatae
                  molestias nemo aperiam laudantium a omnis eaque iusto
                  laboriosam error assumenda! Assumenda accusamus maiores
                  nostrum cupiditate natus quis odit alias quae aspernatur
                  totam, est quia in molestiae blanditiis consectetur. Aperiam
                  voluptates ab veniam sunt vel! Corrupti provident quia est
                  minus eaque quidem dolorem nobis facere. <br />
                  <br /> Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Nobis non a, facere temporibus repudiandae ut officia
                  totam optio eius ipsum deleniti ratione quaerat qui culpa
                  laboriosam cupiditate doloribus impedit excepturi dolorem
                  dicta distinctio molestias repellendus. Minus labore quod
                  laborum aspernatur cupiditate. Odit expedita ipsa corrupti
                  reiciendis ducimus necessitatibus cum voluptates ea deleniti
                  natus alias quas rem, amet neque officiis ab incidunt ex
                  voluptatum veritatis eum! Eligendi consectetur blanditiis
                  placeat itaque ea fugiat quod? Debitis rerum, provident
                  facilis dolor deserunt, molestias eveniet quia perspiciatis
                  nostrum corrupti obcaecati, dolores eaque rem quam ex animi
                  maiores repellat magnam! Voluptates ad perspiciatis vel
                  aliquam.
                </p>

                <div className="my-5 space-x-4 mb-14">
                  <Link to="/bookroom">
                    <button className="px-8 py-3 hover:bg-black hover:text-white border-black border-2 uppercase text-sm font-semibold rounded-sm text-black ">
                      Book Room
                    </button>
                  </Link>
                  <Link to="/rooms">
                    <button className=" px-8 py-3 hover:bg-white hover:text-black bg-black border-black border-2  uppercase text-sm font-semibold rounded-sm text-white ">
                      see other rooms
                    </button>
                  </Link>
                </div>

                <h1 className="text-6xl ]  pb-2 ">Room Images</h1>

                <div className="h-[2px] w-48 mb-1 bg-black"></div>
                <div className="h-[2px] w-20 bg-black"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-11">
                  <img
                    src="/slider_1.jpg"
                    alt="room"
                    className="w-full h-full"
                  />
                  <img
                    src="/slider_2.jpg"
                    alt="room"
                    className="w-full h-full"
                  />
                </div>
              </>
            </section>
          </>
        );
      })}

      <FAQMenu />
    </AnimatedPage>
  );
};

export default BookRoom;
