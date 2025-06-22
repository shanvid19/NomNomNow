import React from "react";

//Class Based Component is a class which contains a render method that returns some piece of jsx code.

class UserClass extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="contributor-data">
                <h2 className="contri-name">Name: {this.props.obj + " (Class)"}</h2>
                <h4 className="contri-contact">Contact: shanvid.ug23.ch@nitp.ac.in</h4>
                <h4 className="contri-location">Location: Lucknow, Uttar Pradesh, India</h4>
            </div>
        );
    }
}

export default UserClass;