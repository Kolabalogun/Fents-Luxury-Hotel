import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../Utils/Firebase";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../Function/Context";
import { Link, useParams } from "react-router-dom";

const AddBooking = ({ setstate, pageStateF }) => {
  const {
    notification,
    notificationF,
    user,
    setloader,
    Rooms,
    handleDeleteBookings,
    navigate,
  } = useGlobalContext();

  const bookingStatus = ["Pending", "Checked In", "Checked Out"];
  const paymentStatus = ["Due", "Successful"];
  const paymentTypes = ["Cash", "Transfer"];

  const [RoomsList, RoomsListF] = useState([]);

  useEffect(() => {
    setloader(true);
    RoomsListF(Rooms.map((d) => d.RoomName));

    setloader(false);
  }, []);

  const initialState = {
    username: "",
    email: "",
    phone: "",
    numberOfGuest: "",

    description: "",
    roomType: "",
    bookStatus: "Pending",
    payment: "due",
    userAddress: "",
    paymentType: "",
  };

  const [form, setform] = useState(initialState);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numDays, setNumDays] = useState("");

  const handleCheckInChange = (e) => {
    setCheckIn(e.target.value);
    if (checkOut) {
      const diffTime = Math.abs(new Date(checkOut) - new Date(e.target.value));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumDays(diffDays);
    }
  };

  const handleCheckOutChange = (e) => {
    setCheckOut(e.target.value);
    if (checkIn) {
      const diffTime = Math.abs(new Date(e.target.value) - new Date(checkIn));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumDays(diffDays);
    }
  };

  const [dateId, setdateId] = useState("");

  const {
    username,
    email,
    phone,
    bookStatus,
    numberOfGuest,
    description,
    roomType,
    payment,
    userAddress,
    paymentType,
  } = form;

  useEffect(() => {
    const dateId = new Date().getTime();
    setdateId(dateId);
  }, []);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && email && phone && numberOfGuest && numDays && userAddress) {
      setloader(true);
      try {
        await addDoc(collection(db, "Booking"), {
          ...form,
          dateId: dateId,
          author: user.displayName,
          daysOfReservation: numDays,
          checkIn,
          checkOut,
          timestamp: serverTimestamp(),
        });
        await addDoc(collection(db, "Newsletter"), {
          email: email,
        });
        setloader(false);
        toast.success("Book Successful");
      } catch (error) {
        console.log(error);
        notificationF(error);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  const { id } = useParams();

  console.log(form);

  useEffect(() => {
    id && getBookingDetail();
    id && pageStateF("booking");
  }, [id]);

  const getBookingDetail = async () => {
    const docRef = doc(db, "Booking", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setform({ ...snapshot.data() });
    }
  };

  const updateBooking = async (e) => {
    e.preventDefault();

    if (form) {
      setloader(true);

      try {
        await updateDoc(doc(db, "Booking", id), {
          ...form,

          author: user.displayName,

          timestamp: serverTimestamp(),
        });
        toast.success("Booking updated");
        setloader(false);
      } catch (err) {
        console.log(err);
        notificationF(err);
      }
    } else {
      return toast.error("All fields must be filled");
    }
  };

  return (
    <div className="bg-white my-10 flex flex-col  p-4">
      <div className="flex mb-5 justify-between items-center">
        <h1 className="text-2xl   pb-2 ">Add Booking</h1>

        <div className="flex gap-5">
          {id && (
            <button
              onClick={() => {
                handleDeleteBookings(id);
                navigate("/admin");
                setstate(true);
              }}
              className="btn btn-secondary"
            >
              Delete Booking
            </button>
          )}

          <Link to={"/admin"}>
            <button
              onClick={() => {
                setstate(true);
              }}
              className="btn btn-primary"
            >
              See Booking Lists
            </button>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="flex  flex-col  my-[30px] px-[15px] text-[14px]">
          <div className="flex justify-between w-full   my-[10px]">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                className="input bg-white input-bordered w-full max-w-xs"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                className="input bg-white input-bordered w-full max-w-xs"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Phone</span>
              </label>
              <input
                className="input bg-white input-bordered w-full max-w-xs"
                type="number"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="Phone"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Room Type</span>
              </label>
              {/* <input
                className="input bg-white input-bordered w-full max-w-xs"
                type="text"
                name="roomType"
                value={roomType}
                readOnly
                placeholder="Room Type"
              /> */}

              <select
                value={roomType}
                onChange={handleChange}
                name="roomType"
                className="select w-full max-w-xs  bg-white border input-bordered"
              >
                {RoomsList.map((opt, idx) => (
                  <>
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-between w-full   my-[10px]">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">
                  Check-in: {form.checkIn}
                </span>
              </label>
              <input
                type="date"
                id="checkin"
                value={checkIn}
                onChange={handleCheckInChange}
                placeholder="Check In Date"
                required
                className="input  input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">
                  Check-Out: {form.checkOut}
                </span>
              </label>
              <input
                type="date"
                placeholder="Check Out Date"
                id="checkout"
                value={checkOut}
                onChange={handleCheckOutChange}
                required
                className="input  input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">
                  Days of Reservation
                </span>
              </label>
              <input
                type="number"
                id="numdays"
                value={numDays ? numDays : form.daysOfReservation}
                readOnly
                placeholder="Days of Reservation"
                className="input bg-white input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Number of Guest</span>
              </label>
              <input
                type="number"
                name="numberOfGuest"
                value={numberOfGuest}
                onChange={handleChange}
                placeholder="Number of Guest"
                required
                className="input bg-white input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex justify-between w-full   my-[10px]">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Payment</span>
              </label>

              <select
                value={payment}
                onChange={handleChange}
                name="payment"
                className="select w-full max-w-xs  bg-white border input-bordered"
              >
                {paymentStatus.map((opt, idx) => (
                  <>
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Payment Type</span>
              </label>
              <select
                value={paymentType}
                onChange={handleChange}
                name="paymentType"
                className="select w-full max-w-xs  bg-white border input-bordered"
              >
                {paymentTypes.map((opt, idx) => (
                  <>
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Book Status</span>
              </label>
              <select
                value={bookStatus}
                onChange={handleChange}
                name="bookStatus"
                className="select w-full max-w-xs  bg-white border input-bordered"
              >
                {bookingStatus.map((opt, idx) => (
                  <>
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  </>
                ))}
              </select>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-black">Address</span>
              </label>
              <input
                type="text"
                name="userAddress"
                value={userAddress}
                onChange={handleChange}
                placeholder="Address"
                required
                className="input bg-white input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 my-[10px]">
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              placeholder="Special Request"
              className=" py-[18px] border-[#f6f7f8] border-2 rounded-lg w-full bg-white px-[25px] text-[14px]  
                    "
              rows="7"
            />
          </div>
          <p className="text-center text-[14px] text-red-600">{notification}</p>
          {id ? (
            <button
              onClick={updateBooking}
              className="btn btn-accent self-center flex"
            >
              Update Booking
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="btn btn-accent self-center flex"
            >
              Proceed with Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBooking;
