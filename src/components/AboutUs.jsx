import User from "./User";
import UserClass from "./UserClass"

const AboutUs = () => {
    return(
        <div className="aboutUs">
            <h1>Welcome to About Us Page!</h1>
            <br />
            <User obj = {"Shanvi"}/> 
            <br />
            <UserClass obj = {"Shanvi"}/>
        </div>
    )
};

export default AboutUs;