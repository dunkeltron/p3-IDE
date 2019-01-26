
import React, { Component } from "react";
import LogInForm from "../components/LogInForm";


class LogIn extends Component {
    state={
        email:"",
        password:""
    }
  
  //will have to change function once authentication is up
    handleFormSubmit = (event) => {
        console.log(this.state);
    }
    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return (
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                        <h1 className="text-center mb-3">
                            <i className="fas fa-door-open"></i> Login
                        </h1>
                        <LogInForm handleFormSubmit={this.handleFormSubmit} handleInputChange ={this.handleInputChange}/>
                    
                        <p className="lead mt-4">
                            Need an Account?  
                            <a href="/register">Register Here</a>
                        </p>
                    </div>
                </div>
            </div>
        
        );
    }
    
}

export default LogIn;