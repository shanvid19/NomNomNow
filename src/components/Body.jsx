import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react"; //NAMED IMPORT

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body-section">
      <div className="topRated">

        <button className="topRated-btn" onClick={()=>{
          const filteredList = listOfRes.filter(
            (res)=> res.info.avgRating > 4
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
            <ResCard resObj = {restaurant} key = {restaurant.info.id}/>
        )}
      </div>
    </div>
  );
};

export default Body;