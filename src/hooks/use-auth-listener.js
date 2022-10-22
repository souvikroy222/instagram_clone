import { useState, useEffect, useContext } from "react";
import { firebaseContext } from "../context/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, auth } from "../lib/firebase";

export default function useAuthListener() {
  const [loginUser, setLoginUser] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "souvik Roy"
  );

  useEffect(() => {
    const changesListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        try {
          const uid = user.uid;
          localStorage.setItem("userInfo", JSON.stringify(user));
          setLoginUser(user);
          console.log("user changes triggered now", user);
        } catch (error) {
          console.log("error occured");
        }
      } else {
        setLoginUser(null);
        localStorage.removeItem("userInfo");
      }
    });

    return () => {
      changesListener();
    };
  }, [loginUser]);

  return { loginUser };
}
