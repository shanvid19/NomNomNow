import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const {resObj} = props;
  const {cloudinaryImageId, name, avgRating, costForTwo, cuisines} = resObj?.info; //Destructuring props for making code developer friendly using optional chaining (?.)

  return (
    <div className="res-card">
      <img
        className="res-img"
        src= {CDN_URL + cloudinaryImageId}
        alt="Restaurant images"
      />
      <div className="resName">{name}</div>
      <div className="res-content">
        <div className="resRate">★ {avgRating} / 5.0</div>
        <div className="resCost">{costForTwo}</div>
        <div className="resCui">{cuisines.join(", ")}</div>
      </div>
    </div>
  );
};

export default ResCard;