import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 flex-col md:flex-row">
        <div className="flex-1 mb-8 md:mb-0">
          <img src="https://i.ibb.co/93GsJ1Y/Logo.png" alt="logo" />
        </div>
        <div className="flex-none">
          <ul className="flex gap-5 sm:gap-10 text-xl font-semibold">{link}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
