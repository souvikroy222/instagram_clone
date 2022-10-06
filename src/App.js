import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Signup from "./pages/Signup";
import {
  LOGIN,
  DASHBOARD,
  SIGN_UP,
  PROFILE,
  NOT_FOUND,
} from "./constants/routes";

const LogIn = lazy(() => import("./pages/Login"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading....</p>} />
      <Routes>
        <Route path={LOGIN} element={<LogIn />} />
        <Route path={SIGN_UP} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
