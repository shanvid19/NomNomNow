import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login"); //state variable for login button

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src= {LOGO_URL}
          alt="NomNomNow"
          id="logo"
        />
        <div className="app-name">Nom Nom Now</div>
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Cart</li>

          <li> <button className="login-btn" onClick = {() => {
            (btnNameReact==="Login") ? setBtnNameReact("Logout") : setBtnNameReact("Login"); //Adding toggle functionality
          }}
          > {btnNameReact} </button> </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;