import { MENU_URL } from "./constants";
import {useState, useEffect} from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        const info = await fetch(MENU_URL + resId); //+ "&catalog_qa=undefined&submitAction=ENTER" );
        const json = await info.json();
        //console.log(json);
        setResInfo(json?.data);
    };

    return resInfo;
};

export default useRestaurantMenu;