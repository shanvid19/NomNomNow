const User = ({obj}) =>{
    return(
        <div className="contributor-data">
            <h1 className="contri-name">Name: {obj + " (Function)"}</h1>
            <h2 className="contri-contact">Contact: shanvid.ug23.ch@nitp.ac.in</h2>
            <h2 className="contri-location">Location: Lucknow, Uttar Pradesh, India</h2>
        </div>
    );
}

export default User;