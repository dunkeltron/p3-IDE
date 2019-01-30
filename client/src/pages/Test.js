import React, {Component} from "react";

class Test extends Component{
    render(){
        if (this.props.currentUser){
            return (<div classname="Home">
                    <p>Current UserL</p>
                    <code>
                        {JSON.stringify(this.props)}
                    </code>
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