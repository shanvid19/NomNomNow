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

const ResCard = () => {
  return (
    <div className="res-card">
      <div className="res-img">
        <img src="https://static.india.com/wp-content/uploads/2024/03/indian-cuisine_63a94498281e7.jpg?impolicy=Medium_Widthonly&w=350&h=263" alt="" />
      </div>
      <div className="res-name">Call me Chow</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-section">
      <div className="search">
           <input className="input-bar" type="text" placeholder="Search restaurant, dishes, cuisines, etc"/>
           <button className="search-btn">Search</button>
      </div>

      <div className="res-card-cont">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
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
