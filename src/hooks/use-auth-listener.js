import { useState, useEffect, useContext } from "react";
import { firebaseContext } from "../context/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const { app } = useContext(firebaseContext);
  const auth = getAuth(app);

  useEffect(() => {
    const changesListener = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const newUser = localStorage.setItem("userInfo", JSON.stringify(user));
        setUser(newUser);
        console.log("user changes triggered now", user);
      } else {
        setUser(null);
        localStorage.removeItem("userInfo");
      }
    });
    return () => {
      changesListener();
    };
  }, [app]);

  return { user };
}
