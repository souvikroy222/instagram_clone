import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import userContext from "./context/user";
import {
  LOGIN,
  DASHBOARD,
  SIGN_UP,
  PROFILE,
  NOT_FOUND,
} from "./constants/routes";
import useAuthListener from "./hooks/use-auth-listener";

const LogIn = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/Signup"));
const DashBoard = lazy(() => import("./pages/Dashboard"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const { loginUser } = useAuthListener();

  return (
    <userContext.Provider value={{ loginUser }}>
      <BrowserRouter>
        <Suspense fallback={<p>Loading....</p>} >
        <Routes>
          <Route path={LOGIN} element={<LogIn />} />
          <Route path={SIGN_UP} element={<SignUp />} />
          <Route path={DASHBOARD} element={<DashBoard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
