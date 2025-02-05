import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./page/SplashScreen";
import { useSplashStore } from "./page/Store";
import ScreenOne from "./page/ScreenOne";
import ScreenTwo from "./page/ScreenTwo";
import ScreenThree from "./page/ScreenThree";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import HomePage from "./page/HomePage";
import Profile from "./page/Profile";

function App() {
  const { loading, setLoading } = useSplashStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="App">
      <Router>
        {loading ? (
          <SplashScreen />
        ) : (
          <Routes>
            <Route path="/" element={<ScreenOne />} />
            <Route path="/second-screen" element={<ScreenTwo />} />
            <Route path="/third-screen" element={<ScreenThree />} />
            <Route path="/signup-screen" element={<SignUp />} />
            <Route path="/signin-screen" element={<SignIn />} />
            <Route path="/home-screen" element={<HomePage />} />
            <Route path="/profile-screen" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
