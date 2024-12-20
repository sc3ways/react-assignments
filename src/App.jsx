import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Assignments from "./routes/Assignments";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
