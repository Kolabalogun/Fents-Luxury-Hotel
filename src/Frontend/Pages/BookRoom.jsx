import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import FAQMenu from "../Components/FAQMenu";
import { useGlobalContext } from "../../Function/Context";

const initialState = {
  username: "",
  email: "",
  phone: "",
  subject: "",
  description: "",
};

const BookRoom = () => {
  const {
    setloader,

    showNewsletter,
    notification,
    notificationF,
  } = useGlobalContext();

  const [form, setform] = useState(initialState);

  const [dateId, setdateId] = useState("");

  const { username, email, phone, subject, description } = form;

  useEffect(() => {
    window.scroll(0, 0);
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && email && phone && description) {
      setloader(true);
      try {
        await addDoc(collection(db, "Messages"), {
          ...form,

          timestamp: serverTimestamp(),
        });
        await addDoc(collection(db, "Newsletter"), {
          email: email,
        });
        setloader(false);
        toast.success("Message Sent");
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

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
                <h1 className="text-6xl ]  pb-2 ">Book Room</h1>

                <div className="h-[2px] w-48 mb-1 bg-black"></div>
                <div className="h-[2px] w-20 bg-black"></div>

                <div className="flex  flex-col  my-[30px] md:px-[200px] px-[20px] text-[14px]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-[10px]">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="border py-[18px] border-black px-[25px] text-[14px] "
                    />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="border py-[18px] border-black px-[25px] text-[14px] "
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 my-[10px]">
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className="border py-[18px] border-black px-[25px] text-[14px] "
                    />
                    <input
                      type="text"
                      name="Room Type"
                      value={room.RoomName}
                      placeholder="Room Type"
                      className="border py-[18px] border-black px-[25px] text-[14px] "
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 my-[10px]">
                    <input
                      type="number"
                      name="numberofGuest"
                      //   value={numberofGuest}
                      onChange={handleChange}
                      placeholder="Number of Guest"
                      required
                      className="border py-[18px] border-black px-[25px] text-[14px] "
                    />
                    <input
                      type="number"
                      name="DaysofReservation"
                      //   value={DaysofReservation}
                      onChange={handleChange}
                      required
                      placeholder="Days of Reservation"
                      className="border py-[18px] border-black px-[25px] text-[14px] "
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-3 my-[10px]">
                    <textarea
                      name="description"
                      value={description}
                      onChange={handleChange}
                      placeholder="Special Request"
                      className="border py-[18px] border-black px-[25px] text-[14px]  
                    "
                      rows="10"
                    />
                  </div>
                  <p className="text-center text-[14px] text-red-600">
                    {notification}
                  </p>

                  <button
                    onClick={handleSubmit}
                    className="text-[13px] bg-transparent m-auto font-semibold my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[9px] text-black  w-[200px] hover:bg-black hover:text-white"
                  >
                    SEND MESSAGE
                  </button>
                </div>

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
