import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";

class Register extends Component {

    state={
        email:"",
        password:"",
        username:"",
        name:"",
        password2:""
    }
    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }
    handleFormSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="row mt-5">
                <div className="col-md-6 m-auto">
                    <div className="card card-body">
                    <h1 className="text-center mb-3">
                        <i className="fas fa-plus-square"></i> Register
                    </h1>
                    <RegisterForm handleFormSubmit={this.handleSubmit} handleInputChange ={this.handleInputChange}/>
                        
                    <p className="lead mt-4">Already Have An Account? <a href="/">Login</a></p>
                    </div>
                </div>
            </div>
        );
    }

}
export default Register;