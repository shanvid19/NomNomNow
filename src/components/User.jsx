import {useState} from "react";

const User = (props) =>{
    const {name, location} = props;

    const [count] = useState(0);
    const [count2] = useState(2);

    return(
        <div className="contributor-data">
            <h1 className="contri-name">Name: {name + " (Function)"}</h1>
            <h2 className="contri-contact">Contact: shanvid.ug23.ch@nitp.ac.in</h2>
            <h2 className="contri-location">Location: {location}</h2>

            <h4>{count}</h4>
            <h4>{count2}</h4>
        </div>
    );
}

export default User;