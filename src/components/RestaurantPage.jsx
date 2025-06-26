import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import useRestaurantMenu from "../utils//useRestaurantMenu";

const RestaurantPage = () => {
    const {resId} = useParams();
    //console.log(useParams());

    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    if (resInfo === null) return <Shimmer />

    const {
        id,
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRating
    } = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="res">
            <div className="resHead">
                <h1 className="res-name-designer">{name}</h1>
                <h4>{"₹" + costForTwo / 100 + " for two"}</h4>
                <h4>{cuisines.join(", ")} | {avgRating}</h4>
            </div>

            <div className="resMenu">
                <h2 className="menu-designer">Menu</h2>
                <div className="itemGrid">
                    <ul>
                    <div className="item">
                    {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
                    </div>
                    <div className="prices">
                    {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards.map((item, index) => <li key={index}>{item.card.info.price / 100}</li>)}
                    </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantPage;