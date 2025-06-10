import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react"; //NAMED IMPORT

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  /*
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.942225&lng=80.9518745&carousel=true&third_party_vendor=1");
    const json = await data.json();
    console.log(json);
    setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants - PATH FOR TOP RATED RESTAURANTS
    //
  }
    */

  if (listOfRes.length === 0) {
    return <Shimmer />
  }

  return (listOfRes === 0) ? <Shimmer /> : (
    <div className="body-section">

      <div className="topRated">


        <button className="topRated-btn" onClick={() => {
          const filteredList = listOfRes.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRes(filteredList);
        }}>
          Top Rated Restaurants</button>


      </div>

      <div className="search">
        <input
          className="input-bar"
          type="text"
          placeholder="Search restaurant, dishes, cuisines, etc."
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="res-card-cont">
        {listOfRes.map(   //DONT FORGET TO CHANGE THE VARIABLE YOU ARE MAPPING OVER!!!!!!!!!!!!!!!!!!!!!
          (restaurant) =>
            <ResCard resObj={restaurant} key={restaurant.info.id} />
        )}
      </div>
    </div>
  );
};

export default Body;