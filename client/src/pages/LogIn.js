
import React, { Component } from "react";
import LogInForm from "../components/LogInForm";
import { Redirect} from 'react-router-dom';


class LogIn extends Component {
    constructor(){

    super();
    this.state={
        email:"",
        password:"",
        currentUser: null,
        redirectTo: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
}
  
  //will have to change function once authentication is up
    handleFormSubmit = (event) => {
        //attempt to login using api call from App.js and current state of email and password.
        event.preventDefault();
        console.log(this.state);
        this.props._login(this.state.email,this.state.password);
        this.setState({
            redirectTo: '/test'
        })
 
    }
    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        // this handles the redirect after login by checking if we have assigned redirectTo 
        if(this.state.redirectTo){
            return <Redirect to={{ pathname: this.state.redirectTo}}/>
        }
        else{
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
    
}

export default LogIn;