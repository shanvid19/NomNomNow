import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login"); //state variable for login button
  const onlineStatus = useOnlineStatus();

  return (
    <div className=" header flex justify-between items-center bg-white px-8 shadow-2xl">
      <div className="logo-container flex items-center gap-4">
        <img
          src= {LOGO_URL}
          alt="NomNomNow"
          id="logo"
          className="h-40"
        />
        <div className="app-name font-mono font-extrabold text-5xl">Nom Nom Now</div>
      </div>

      <div className="nav-items">
        <ul className="flex gap-10">
          <li className="px-1.5">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-1.5 font-extrabold font-mono hover:text-shadow-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-1.5 font-extrabold font-mono hover:text-shadow-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-1.5 font-extrabold font-mono hover:text-shadow-lg">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-1.5 font-extrabold font-mono hover:text-shadow-lg">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-1.5 font-extrabold font-mono hover:text-shadow-lg">Cart</li>

          <li> <button className="login-btn px-1.5 font-extrabold font-mono hover:text-shadow-lg" onClick = {() => {
            (btnNameReact==="Login") ? setBtnNameReact("Logout") : setBtnNameReact("Login"); //Adding toggle functionality
          }}
          > {btnNameReact} </button> </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;