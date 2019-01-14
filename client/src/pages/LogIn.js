
import React, { Component } from "react";


class LogIn extends Component {
  
  //will have to change function once authentication is up
    handleSubmit = (event) => {
        event.preventDefault();
        window.location.href="/editor"; 
    }
    render(){
    return (
        <div className="container mt-5 justify-content-center">
        <div className="card card-container col-md-4 col-xs-12 col-xl-4 mx-auto">
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card text-center">Brand Image</p>
            <form className="form-signin">
                <input type="username" id="inputUsername" className="form-control" placeholder="Username" required />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/> 
                {/* potentially  nice feature to have.
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me</input>
                    </label>
                </div> */}
                {/* the hrefs for these buttons will have to be changed once user authentication is added */}
                <a className="btn  btn-secondary btn-block btn-signin"  href="/editor/33">Sign in</a>
                <a className="btn  btn-secondary btn-block btn-signin"  href="/profile">Register</a>
            </form>
            {/* If we get to this point we'll have to create a page or form for this. 
            <a  href ="/forgotpassword" className="forgot-password">
                Forgot your password?
            </a> */}
         </div>{/*<!-- /card-container --> */}
    </div>
    
    );
    }
    
}

export default LogIn;