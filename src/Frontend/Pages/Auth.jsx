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

const initialState = {
  username: "",
  email: "",
  cpassword: "",
  password: "",
};

const Auth = () => {
  const { notificationF, notification, setuser } = useGlobalContext();

  const [loader, setloader] = useState(false);

  const navigate = useNavigate();

  const [registrationType, registrationTypeF] = useState(false);

  const [state, setstate] = useState(initialState);

  const { email, password, username, cpassword } = state;

  function handleChange(e) {
    setstate({ ...state, [e.target.name]: e.target.value });
  }

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!registrationType) {
      if (email && password) {
        setloader(true);
        const { user } = await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

        setuser(user);

        navigate("/");

        toast.success("Login Successful");

        setloader(false);
      } else {
        return notificationF("All fields must be filled");
      }
    } else {
      if (username && email && password && cpassword) {
        setloader(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
        await updateProfile(user, { displayName: `${username.trim()}` });
        setuser(user);
        try {
          await addDoc(collection(db, "RegisteredUsers"), {
            Name: username.trim(),
            Email: email.trim(),
            password: password,
          });
          navigate(-1);
          toast.success("Registration Successful");

          setloader(false);
        } catch (error) {
          notificationF(error);
        }
      } else {
        return notificationF("All fields must be filled");
      }
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
        <div className="bg-black absolute opacity-60 z-1 h-[55vh] w-full md:w-[55vh]"></div>

        <div className=" flex  z-1 flex-col  font-rob text-center  ">
          <h1 className="text-white font-rubik text-[30px] font-bold bg-transparent z-30">
            {registrationType ? "Register" : " Sign In"}
          </h1>

          <p className="text-white text-[14px] bg-transparent z-30">
            {registrationType
              ? "Please register to continue"
              : "Please enter your Email and Password to continue"}
          </p>
          <div className="flex flex-col gap-6 bg-transparent z-30 w-[350px] my-[26px]">
            {registrationType && (
              <input
                onChange={handleChange}
                type="text"
                name="username"
                value={username}
                placeholder="Your Name"
                required
                className="w-full flex-1 flex border bg-white py-[10px]  px-[25px] text-[14px] outline-none  "
              />
            )}
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
            {registrationType && (
              <input
                onChange={handleChange}
                type="password"
                name="cpassword"
                value={cpassword}
                placeholder="Confirm Password"
                required
                className="w-full flex-1 flex border bg-white py-[10px]  px-[25px] text-[14px] outline-none "
              />
            )}
          </div>

          {notification && (
            <p className="text-red-700 py-4 text-[14px] bg-transparent z-30">
              {notification}
            </p>
          )}

          <div className="flex justify-between w-full my-2">
            <button
              onClick={
                registrationType ? () => registrationTypeF(false) : handleAuth
              }
              className={`  ${
                loader && !registrationType && "btn loading"
              }  z-30 px-5 py-3 bg-white border-none text-black  hover:bg-black hover:text-white font-rob  font-semibold uppercase text-sm `}
            >
              Sign In
            </button>

            <button
              onClick={
                registrationType ? handleAuth : () => registrationTypeF(true)
              }
              className={` ${
                loader && registrationType && "btn loading"
              } z-30 px-5 py-3 bg-black border-none text-white  hover:bg-white hover:text-black font-rob  font-semibold uppercase text-sm `}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Auth;
