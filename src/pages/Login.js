import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseContext } from "../context/firebase";
import {
  LOGIN,
  DASHBOARD,
  SIGN_UP,
  PROFILE,
  NOT_FOUND,
} from "../constants/routes";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const inActive = email == "" || password == "";

  const navigate = useNavigate();
  const { app } = useContext(firebaseContext);
  //console.log("app____",app)

  return (
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
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className=" appearance-none border border-gray-300  min-w-full mx-4 my-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
            Don't have an account?{" "}
            <span className="text-blue-500" onClick={() => navigate(SIGN_UP)}>
              {" "}
              Sign Up
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
  );
}

export default Login;
