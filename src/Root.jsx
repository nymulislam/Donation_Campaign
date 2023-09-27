import { Outlet } from "react-router-dom";
import "./Root.css";
import Navbar from "./components/Navbar/Navbar";

function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
