import { signOut } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../Utils/Firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  // for user login confirmation
  const [user, setuser] = useState(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setuser(authUser);
      } else {
        setuser(null);
      }
    });
  }, []);

  //   logging out user
  const handleLogout = () => {
    signOut(auth).then(() => {
      setuser(null);
      navigate("/");
      localStorage.setItem("isLoggedIn", false);
      return toast.error("You've successfully Log Out");
    });
  };

  //   this is for the loader
  const [loader, setloader] = useState(false);

  // Error Notification
  const [notification, notificationF] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      notificationF("");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [notification]);

  // Get RoomsCategoryFromDB

  const [Rooms, RoomsF] = useState([]);

  useEffect(() => {
    setloader(true);
    const unsub = onSnapshot(
      collection(db, "Rooms"),

      (snapshot) => {
        let list = [];

        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        if (!list || list.length === 0) {
        } else {
          RoomsF(list);

          setloader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleDeleteRoom = async (id) => {
    if (window.confirm("Are you sure you want to delete this Room?")) {
      try {
        setloader(true);
        await deleteDoc(doc(db, "Rooms", id));
        setloader(false);
        toast.error("Room deleted");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [pageState, pageStateF] = useState("default");

  return (
    <AppContext.Provider
      value={{
        user,
        setuser,
        handleLogout,

        navigate,
        loader,
        setloader,
        navigate,
        notification,
        notificationF,
        pageState,
        pageStateF,

        Rooms,
        handleDeleteRoom,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
