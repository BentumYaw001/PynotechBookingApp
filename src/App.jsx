import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./page/SplashScreen";
import { useSplashStore } from "./page/Store";
import ScreenOne from "./page/ScreenOne";
import ScreenTwo from "./page/ScreenTwo";
import ScreenThree from "./page/ScreenThree";

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
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
