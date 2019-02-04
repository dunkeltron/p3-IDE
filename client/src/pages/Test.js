import React, {Component} from "react";
import {Link} from "react-router-dom";

class Test extends Component{
    state={
        currentUser: JSON.parse(sessionStorage.getItem("currentUser")) || "anon"
    }
    componenentDidMount(){
            this.setState({
                currentUser: JSON.parse(sessionStorage.getItem("currentUser"))
            })
        console.log(this.state.currentUser);
        
    }
    render(){
        if (sessionStorage.getItem("currentUser")){
            return (<div classname="Home">
                    <p>Current UserL</p>
                    <code>
                        {JSON.stringify(sessionStorage.getItem("currentUser"))}
                    </code>
                    <Link to={"/"+this.state.currentUser.username} >{this.state.currentUser.username}'s profile</Link>
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