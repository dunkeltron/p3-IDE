import React, {Component} from "react";
import {Link} from "react-router-dom";

class Test extends Component{
    state={
        currentUser: this.props.currentUser
    }
    render(){
        if (this.props.currentUser){
            return (<div classname="Home">
                    <p>Current UserL</p>
                    <code>
                        {JSON.stringify(this.props.currentUser)}
                    </code>
                    <Link to={"/"+this.props.currentUser.username} >{this.props.currentUser.username}'s profile</Link>
            </div>)
        }
        else{
            return(
                <div className="Home">
                    <h1> No Current User</h1>
                </div>
            )
        }
    }
}
export default Test;