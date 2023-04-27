import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGlobalContext } from "../../Function/Context";
import { auth, db } from "../../Utils/Firebase";
import { addDoc, collection } from "firebase/firestore";
import Navbar from "../../Components/Nav";
import AnimatedPage from "../../Utils/AnimatedPage";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

const initialState = {
  username: "",
  email: "",
  cpassword: "",
  password: "",
};

const AdminAuth = () => {
  const { notificationF, notification, setuser, signInTypeAdminF } =
    useGlobalContext();

  const [loader, setloader] = useState(false);

  const navigate = useNavigate();

  const [registrationType, registrationTypeF] = useState(false);

  const [state, setstate] = useState(initialState);

  const { email, password } = state;

  function handleChange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  const handleAuth = async (e) => {
    e.preventDefault();

    if (email && password) {
      setloader(true);

      signInWithEmailAndPassword(auth, email.trim(), password)
        .then((userCredential) => {
          const user = userCredential.user;
          setuser(user);
          signInTypeAdminF(true);
          navigate("/admin");

          toast.success("Login Successful");
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          notificationF(errorMessage);
        });

      setloader(false);
    } else {
      return notificationF("All fields must be filled");
    }
  };

  return (
    <AnimatedPage>
      <Navbar />
      <div
        className="h-screen bg-cover flex items-center relative justify-center"
        style={{ backgroundImage: "url('slider_1.jpg')" }}
      >
        <div className="bg-black absolute opacity-60 h-screen w-full"></div>
        <div className="bg-black absolute opacity-60 z-1 h-[65vh] w-full md:w-[55vh]"></div>

        <div className=" flex  z-1 flex-col  font-rob text-center  ">
          <h1 className="text-white font-rubik text-[30px] font-bold bg-transparent z-30">
            {"Sign In"}
          </h1>

          <p className="text-white text-[14px] bg-transparent z-30">
            {"Please enter your Email and Password to continue"}
          </p>
          <div className="flex flex-col gap-6 bg-transparent z-30 w-[350px] my-[26px]">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              className="w-full flex-1 flex border bg-white py-[10px]  px-[25px] text-[14px] outline-none  "
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
              className="w-full flex-1 flex border bg-white py-[10px]  px-[25px] text-[14px] outline-none "
            />

            {notification && (
              <p className="text-red-700 py-1 text-[14px] bg-transparent z-30">
                {notification}
              </p>
            )}
          </div>

          <div className="flex justify-between w-full my-2">
            <button
              onClick={handleAuth}
              className={`  ${
                loader && "btn loading"
              }  z-30 px-5 py-3 bg-white border-none text-black  hover:bg-black hover:text-white font-rob  font-semibold uppercase text-sm `}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
};

export default AdminAuth;
