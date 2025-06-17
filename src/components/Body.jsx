import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react"; //NAMED IMPORT

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]); //react state variable - to dynamically show data
  const [displayRes, setDisplayRes] = useState([]); 

  //listOfRes stores the original value of all the 15 restaurants, while displayRest stores info of all the restaurants which we wish to display. It is necessary in order to avoid bug in case of search functionality.

  const [searchText, setSearchText] = useState(""); //local react state variable to enable search functionality

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.942225&lng=80.9518745&carousel=true&third_party_vendor=1");

    const json = await data.json();
    console.log(json);
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setDisplayRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants - PATH FOR TOP RATED RESTAURANTS
  }

  console.log(listOfRes);

    return (
      <div className="body-section">

        <div className="filter">

          <div className="search">
            <input
              className="input-bar"
              type="text"
              placeholder="Search restaurant, dishes, cuisines, etc."
              value = {searchText}
              onChange = {(e) => {
                setSearchText(e.target.value)
              }}
            />
            <button 
              className="btn"
              onClick = {()=>{
                const searchedRestList = listOfRes.filter(
                  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
                setDisplayRes(searchedRestList);
              }}
            >Search</button>
          </div>

          <div className="topRated">
            <button className="btn" onClick={() => {
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
              setDisplayRes(filteredList);
            }}> Top Rated Restaurants</button>

          </div>

        </div>

        <div className="res-card-cont">
          {displayRes.map(   //DONT FORGET TO CHANGE THE VARIABLE YOU ARE MAPPING OVER!!!!!!!!!!!!!!!!!!!!!
            (restaurant) =>
              <ResCard resObj={restaurant} key={restaurant.info.id} />
          )}
        </div>
      </div>
    );
  
};

export default Body;