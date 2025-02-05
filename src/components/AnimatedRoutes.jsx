import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SlideTransition from "./SlideTransition";
import ScreenOne from "/src/page/ScreenOne.jsx";
import ScreenTwo from "/src/page/ScreenTwo.jsx";
import ScreenThree from "/src/page/ScreenThree.jsx";
import SignUp from "/src/page/SignUp.jsx";
import SignIn from "/src/page/SignIn";
import HomePage from "/src/page/HomePage";
import Profile from "/src/page/Profile";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <SlideTransition>
              <ScreenOne />
            </SlideTransition>
          }
        />
        <Route
          path="/second-screen"
          element={
            <SlideTransition>
              <ScreenTwo />
            </SlideTransition>
          }
        />
        <Route
          path="/third-screen"
          element={
            <SlideTransition>
              <ScreenThree />
            </SlideTransition>
          }
        />
        <Route
          path="/signup-screen"
          element={
            <SlideTransition>
              <SignUp />
            </SlideTransition>
          }
        />
        <Route
          path="/signin-screen"
          element={
            <SlideTransition>
              <SignIn />
            </SlideTransition>
          }
        />
        <Route
          path="/home-screen"
          element={
            <SlideTransition>
              <HomePage />
            </SlideTransition>
          }
        />
        <Route
          path="/profile-screen"
          element={
            <SlideTransition>
              <Profile />
            </SlideTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
