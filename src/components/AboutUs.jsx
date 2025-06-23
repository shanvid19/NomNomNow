import User from "./User";
import UserClass from "./UserClass"

const AboutUs = () => {
    return(
        <div className="aboutUs">
            <h1>Welcome to About Us Page!</h1>
            <br />
            <User name = {"Shanvi"} location = "Lucknow, Uttar Pradesh, India"/> 
            <br />
            <UserClass name = {"Shanvi"} location = "Lucknow, Uttar Pradesh, India"/>
        </div>
    )
};

export default AboutUs;