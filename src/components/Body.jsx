import ResCard from "./ResCard";
import resList from "../utils/mockData";

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
        {resList.map(
          (restaurant) => 
            <ResCard resObj = {restaurant} key = {restaurant.info.id}/>
        )}
      </div>
    </div>
  );
};

export default Body;