import { Outlet } from "react-router-dom";
import "./App.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";

function App() {
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
