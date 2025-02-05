import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SlideTransition from "./SlideTransition";
import { RouteData } from "./Data";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {RouteData.map((item) => {
          return (
            <>
              <Route
                path={item.path}
                element={<SlideTransition>{item.page}</SlideTransition>}
              />
            </>
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
