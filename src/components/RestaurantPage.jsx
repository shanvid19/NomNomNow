import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const RestaurantPage = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menu, setMenu] = useState([]);
    
    useEffect( () => {
        fetchInfo();
    }, []);


    const fetchInfo = async () => {
        const info = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.94138337248593&lng=80.9549980983138&restaurantId=458202&catalog_qa=undefined&submitAction=ENTER");
        const json = await info.json();

        console.log(json);

        setResInfo(json?.data);
        //data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
        //[0].card.card.text
    }

    if(resInfo === null) return <Shimmer />;
    console.log(resInfo);

    return(
        <div className="resHead">
            <h1>NAME</h1>
            <h2>Menu</h2>
            <h3><ul>
                <li>Burger</li>
                <li>Wings</li>
                <li>Coke</li>
            </ul></h3>
        </div>
    )
}

export default RestaurantPage;