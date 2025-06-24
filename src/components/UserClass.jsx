import React from "react";

//Class Based Component is a class which contains a render method that returns some piece of jsx code.

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {  
            userInfo : {  //state variable to store fetched information from api
                name : "",
            }
        };

        //console.log(this.props.name + " constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name + " componentDidMount");
        const data = await fetch("https://api.github.com/users/shanvid19");
        const json = await data.json();

        //console.log(json);
        this.setState({ //updating the stte variable with the fetched information
            userInfo : json,
        });
    }

    render() {
        //console.log(this.props.name + " render");

        //const {name, location} = this.props;

        const{
            name,
            location,
            avatar_url
        } = this.state.userInfo;

        return (
            <div className="contributor-data">
                <img src={avatar_url}/>
                <h1 className="contri-name">{name}</h1>
                <h2 className="contri-contact">Contact: shanvid.ug23.ch@nitp.ac.in</h2>
                <h2 className="contri-location">Location: {location}</h2>

            </div>
        );
    }
}

export default UserClass;