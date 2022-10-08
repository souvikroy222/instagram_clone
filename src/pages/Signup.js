import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../context/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { isUserExists } from "../services/utils";
import {
  Firestore,
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";

import {
  LOGIN,
  DASHBOARD,
  SIGN_UP,
  PROFILE,
  NOT_FOUND,
} from "../constants/routes";

function Signup() {
  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const inActive = email == "" || password == "";

  const navigate = useNavigate();
  const { app } = useContext(firebaseContext);
  //console.log("app____",app)

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const db = getFirestore(app);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("i click");
    const querySnapshot = await isUserExists(db, email);
    console.log("user______", querySnapshot);
    if (querySnapshot.size > 0) {
      console.log("i found anything");
      setError("user already exists");
    } else {
      try {
        console.log("i not found anything");
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            //Signed in
            const users = userCredential.user;

            const finalUser = {
              userId: "10",
              username: username,
              fullName: fullname,
              emailAddress: email,
              following: [],
              followers: [],
              dateCreated: Date.now(),
            };
            await addDoc(collection(db, "users"), finalUser);
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error, "error_____");
            setError("email already in use");
          });
      } catch (error) {
        console.log("error_____");
      }
    }
  }

  const handleChangeState = (eventValue, inputField) => {
    inputField(eventValue);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="flex container mx-auto max-w-screen-md items-center h-screen">
        <div className="basis-1/2">
          <div>
            <img src="/images/iphone-with-profile.jpg" />
          </div>
        </div>
        <div className="basis-1/2">
          <div
            className="flex flex-col border-2 border-gray-300  h-3/4 relative max-w-full 
        p-10 items-center justify-center  "
          >
            <div>
              <img src="/images/users/logo.png" />
            </div>

            <input
              className=" appearance-none border border-gray-300  min-w-full m-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="username"
              onChange={(e) => handleChangeState(e.target.value, setUsername)}
            />
            <input
              className=" appearance-none border border-gray-300  min-w-full m-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="full Name"
              onChange={(e) => handleChangeState(e.target.value, setFullName)}
            />
            <input
              className=" appearance-none border border-gray-300  min-w-full m-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="email"
              onChange={(e) => handleChangeState(e.target.value, setEmail)}
            />
            <input
              className=" appearance-none border border-gray-300  min-w-full mx-4 my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="password"
              type="password"
              onChange={(e) => handleChangeState(e.target.value, setPassword)}
            />
            <p className="text-red-500 font-medium">{error}</p>
            <button
              className={`bg-blue-500 rounded font-bold my-4 py-2 text-blue-50 px-4 min-w-full ${
                inActive && "bg-blue-300"
              }`}
            >
              Login
            </button>
          </div>
          <div className="border-2 my-4 p-4 border-gray-300 h-1/4 relative max-w-full items-center justify-center  ">
            <div className="flex items-center justify-center">
              Have an account?{" "}
              <span className="text-blue-500" onClick={() => navigate(LOGIN)}>
                {" "}
                Log in
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <div>Get the app.</div>
            <div className="flex gap-3 w-4/5 ">
              <div className="flex basis-1/2">
                <img src="/images/app_store_one.png" />
              </div>
              <div className="flex basis-1/2">
                <img src="/images/app_store_two.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
