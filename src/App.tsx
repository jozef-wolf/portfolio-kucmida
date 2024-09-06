import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return (
    <div className="App">
      <DrawerAppBar />
      <main className="Main">
        <div className="Container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
