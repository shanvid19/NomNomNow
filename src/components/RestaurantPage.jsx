import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import {MENU_URL} from "../utils/constants"

const RestaurantPage = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resContent, setResContent] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchInfo();
    }, []);

    const {resId} = useParams();
    console.log(useParams());

    const fetchInfo = async () => {
        const info = await fetch(MENU_URL + resId); //+ "&catalog_qa=undefined&submitAction=ENTER" );
        const json = await info.json();
        console.log(json);
        setResInfo(json?.data);
        setResContent(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
        setMenu(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
    }

    //destructuring data for neatness

    if (resInfo === null) return <Shimmer />

    const {
        id,
        name,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        avgRating
    } = resInfo?.cards[2]?.card?.card?.info;

    console.log(resInfo);
    console.log(resContent);
    console.log(menu);

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
                    {menu.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)}
                    </div>
                    <div className="prices">
                    {menu.map((item, index) => <li key={index}>{item.card.info.price / 100}</li>)}
                    </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantPage;