import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent render");

        return (
            < div className="aboutUs" >
                <h1>Welcome to About Us Page!</h1>
                <br />
                <UserClass name={"Child 1"} location="Lucknow, Uttar Pradesh, India" />
                <UserClass name={"Child 2"} location="Dehradun, Uttarakhand, India" />
                <UserClass name={"Child 3"} location="Dehradun, Uttarakhand, India" />
            </div >
        );
    }
}

export default AboutUs;