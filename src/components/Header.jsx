import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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