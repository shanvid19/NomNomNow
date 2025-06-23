import React from "react";

//Class Based Component is a class which contains a render method that returns some piece of jsx code.

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 1,
        };
    }

    render() {
        const {name, location} = this.props;

        const{count, count2} = this.state;

        return (
            <div className="contributor-data">
                <h2 className="contri-name">Name: {name + " (Class)"}</h2>
                <h4 className="contri-contact">Contact: shanvid.ug23.ch@nitp.ac.in</h4>
                <h4 className="contri-location">Location: {location}</h4>
            </div>
        );
    }
}

export default UserClass;