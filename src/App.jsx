import { useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import { useSplashStore } from "./components/Store";
import ScreenOne from "./components/ScreenOne";

function App() {
  const { loading, setLoading } = useSplashStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="App">{loading ? <SplashScreen /> : <ScreenOne />}</div>
  );
}

export default App;
