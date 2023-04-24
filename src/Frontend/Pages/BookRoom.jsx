import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AnimatedPage from "../../Utils/AnimatedPage";
import Header from "../../Components/Header";
import FAQMenu from "../Components/FAQMenu";
import { useGlobalContext } from "../../Function/Context";
import { auth, db } from "../../Utils/Firebase";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Loader from "../../Components/Loader";
import Checkout from "./Checkout";

const BookRoom = () => {
  const { setloader, navigate, notification, notificationF, setuser, user } =
    useGlobalContext();

  const { id } = useParams();

  const initialState = {
    username: user?.displayName,
    email: user?.email,
    phone: "",
    numberOfGuest: "",
    daysOfReservation: "",
    description: "",
    roomType: id,
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setuser(authUser);
      } else {
        navigate("/auth");
      }
    });
  }, []);

  const [form, setform] = useState(initialState);

  const [dateId, setdateId] = useState("");

  const {
    username,
    email,
    phone,
    daysOfReservation,
    numberOfGuest,
    description,
  } = form;

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
    if (username && email && phone && numberOfGuest && daysOfReservation) {
      setloader(true);
      try {
        await addDoc(collection(db, "Booking"), {
          ...form,
          dateId: dateId,
          timestamp: serverTimestamp(),
        });
        await addDoc(collection(db, "Newsletter"), {
          email: email,
        });
        setloader(false);
        toast.success("Book Successful");
        navigate(`/checkout/${id}`, { form });
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  const [checkoutStep, setcheckoutStep] = useState(false);

  function handleNextcheckoutStep(params) {
    if (username && email && phone && numberOfGuest && daysOfReservation) {
      setcheckoutStep(true);
    } else {
      return toast.error("All fields must be filled");
    }
  }

  const { loader, Rooms } = useGlobalContext();

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

  if (!room) {
    return <Loader />;
  }

  return (
    <AnimatedPage>
      {room.map((room, index) => {
        return (
          <>
            <Header title={room?.RoomName} caption="" img={room?.RoomImage} />

            <section className="my-20 flex flex-col mx-5  md:mx-8 xl:mx-56">
              {loader ? (
                <Loader />
              ) : (
                <>
                  <h1 className="md:text-6xl text-4xl  pb-2 ">Book Room</h1>

                  <div className="h-[2px] w-48 mb-1 bg-black"></div>
                  <div className="h-[2px] w-20 bg-black"></div>

                  <div className="flex  flex-col  my-[30px] sm:px-[50px] md:px-[100px] px-[20px] text-[14px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-[10px]">
                      <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className="border py-[18px] border-black  bg-white px-[25px] text-[14px] "
                      />
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="border py-[18px] border-black bg-white px-[25px] text-[14px] "
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
                        className="border py-[18px] border-black bg-white px-[25px] text-[14px] "
                      />
                      <input
                        type="text"
                        name="roomType"
                        value={room.RoomName}
                        readOnly
                        placeholder="Room Type"
                        className="border py-[18px] border-black bg-white px-[25px] text-[14px] "
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 my-[10px]">
                      <input
                        type="number"
                        name="numberOfGuest"
                        value={numberOfGuest}
                        onChange={handleChange}
                        placeholder="Number of Guest"
                        required
                        className="border py-[18px] border-black bg-white px-[25px] text-[14px] "
                      />
                      <input
                        type="number"
                        name="daysOfReservation"
                        value={daysOfReservation}
                        onChange={handleChange}
                        required
                        placeholder="Days of Reservation"
                        className="border py-[18px] border-black bg-white px-[25px] text-[14px] "
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-3 my-[10px]">
                      <textarea
                        name="description"
                        value={description}
                        onChange={handleChange}
                        placeholder="Special Request"
                        className="border py-[18px] border-black bg-white px-[25px] text-[14px]  
                    "
                        rows="10"
                      />
                    </div>
                    <p className="text-center text-[14px] text-red-600">
                      {notification}
                    </p>

                    {!checkoutStep && (
                      <button
                        onClick={handleNextcheckoutStep}
                        className="text-[13px] bg-transparent m-auto font-semibold my-5  flex justify-center items-center border-[2px] border-black px-[34px] py-[15px] rounded-md text-black  hover:bg-black hover:text-white"
                      >
                        PROCEED TO PAYMENT
                      </button>
                    )}
                  </div>
                </>
              )}
            </section>

            {checkoutStep && <Checkout form={form} room={room} />}
          </>
        );
      })}

      <FAQMenu />
    </AnimatedPage>
  );
};

export default BookRoom;
