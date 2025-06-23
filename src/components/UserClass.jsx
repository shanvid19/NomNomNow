import React from "react";

//Class Based Component is a class which contains a render method that returns some piece of jsx code.

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 1,
        };

        console.log(this.props.name + " constructor");
    }

    componentDidMount(){
        console.log(this.props.name + " componentDidMount");
    }

    render() {
        console.log(this.props.name + " render");

        const {name, location} = this.props;

        const{count, count2} = this.state; //destructuring

        return (
            <div className="contributor-data">
                <div className="count-btn">
                    <button onClick={() => {
                        this.setState({
                            count : this.state.count + 1,
                            count2 : this.state.count - 1,
                        })
                        console.log(count + " " + count2);
                    }}>
                        Increase
                    </button>
                </div>

                <h1 className="contri-name">Name: {name + " (Class)"}</h1>
                <h2 className="contri-contact">Contact: shanvid.ug23.ch@nitp.ac.in</h2>
                <h2 className="contri-location">Location: {location}</h2>

                <h4>{this.state.count}</h4>
            </div>
        );
    }
}

export default UserClass;