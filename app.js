import React from "react";
import ReactDOM from "react-dom/client";

/*

1. Header
  - Logo : with symbol and name
  - Nav Bar

2. Body
  - Search Container
  - Restaurant Cards Container
     - image
     - place name
     - star rating
     - cuisine
     - time for delivery
     - cost

3. Footer
  - Copyright
  - Links
  - Address
  - Contact

*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://media.istockphoto.com/id/1291750007/vector/takeaway-food-symbol-take-away-paper-food-bag-icon-daily-meal-in-paper-bag-vector.jpg?s=612x612&w=0&k=20&c=LZtxpCqVZfB1-qNAXFBWCHoJvwzbozGwwRur605NLK8="
          alt=""
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
        </ul>
      </div>
    </div>
  );
};

const ResCard = ({resName, resCui, resRate, resCost}) => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://static.india.com/wp-content/uploads/2024/03/indian-cuisine_63a94498281e7.jpg?impolicy=Medium_Widthonly&w=350&h=263"
        alt=""
      />
      <div className="res-content">
        <div className="resName">{resName}</div>
        <div className="resCui">{resCui}</div>
        <div className="resRate">{resRate}</div>
        <div className="resCost">{resCost}</div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-section">
      <div className="search">
        <input
          className="input-bar"
          type="text"
          placeholder="Search restaurant, dishes, cuisines, etc."
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="res-card-cont">
        <ResCard 
          resName = "Call Me Chow"
          resCui = "Japanese, Chinese, Thai, Korean"
          resRate = "4.5/5.0"
          resCost = "₹1500 for 2"
        />
        <ResCard 
          resName = "KFC"
          resCui = "American, Non-Veg"
          resRate = "4.0/5.0"
          resCost = "₹500 for 2"
        />
        <ResCard 
          resName = "Persona"
          resCui = "Continental, North Indian, South Indian"
          resRate = "3.9/5.0"
          resCost = "₹800 for 2"
        />
        <ResCard 
          resName = "Call Me Chow"
          resCui = "Japanese, Chinese, Thai, Korean"
          resRate = "4.5/5.0"
          resCost = "₹1500 for 2"
        />
        <ResCard 
          resName = "0612 Soya Chaap"
          resCui = "Punjabi"
          resRate = "4.9/5.0"
          resCost = "₹1000 for 2"
        />
        <ResCard 
          resName = "Ice N' Spice"
          resCui = "Indian"
          resRate = "4.0/5.0"
          resCost = "2000 for 2"
        />
        <ResCard 
          resName = "Brunch Hut"
          resCui = "Chinese"
          resRate = "4.3/5.0"
          resCost = "400 for 2"
        />
        <ResCard 
          resName = "McDonalds"
          resCui = "American, Fast Food"
          resRate = "2.9/5.0"
          resCost = "350 for 2"
        />
        <ResCard 
          resName = "Burger King"
          resCui = "American, Fast Food"
          resRate = "4.6/5.0"
          resCost = "490 for 2"
        />
        <ResCard 
          resName = "Afraa"
          resCui = "Continental"
          resRate = "4.0/5.0"
          resCost = "2500 for 2"
        />
        <ResCard 
          resName = "Iron Hill"
          resCui = "Chinese, Continental, Indian"
          resRate = "4.3/5.0"
          resCost = "1500 for 2"
        />
        <ResCard 
          resName = "The Terrace"
          resCui = "Buffet"
          resRate = "4.5/5.0"
          resCost = "800 for 1"
        />
        <ResCard 
          resName = "Woodpecker"
          resCui = "Bar, Cafe"
          resRate = "3.9/5.0"
          resCost = "1000 for 2"
        />
        <ResCard 
          resName = "HoNS"
          resCui = "Cafe"
          resRate = "4.2/5.0"
          resCost = "800 for 2"
        />
        <ResCard 
          resName = "Social Hazratganj"
          resCui = "Cafe, Continental"
          resRate = "3.6/5.0"
          resCost = "600 for 2"
        />  
      </div>
    </div>
  );
};

const AppLayout = () => {
  //React
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
