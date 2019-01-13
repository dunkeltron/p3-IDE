
import React, { Component } from "react";
class LogIn extends Component {
    
    handleSubmit = (event) => {
        event.preventDefault();
        window.location.href="/editor";
    }
    render(){
    return (
        <div class="container justify-content-center">
        <div class="card card-container col-4 mx-auto">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/> 
                {/* <div id="remember" class="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me</input>
                    </label>
                </div> */}
                <a class="btn btn-lg btn-primary btn-block btn-signin"  href="/profile">Sign in</a>
            </form>
            <a href="/editor" class="forgot-password">
                Forgot the password?
            </a>
         </div>{/*<!-- /card-container --> */}
    </div>
    
    );
    }
    
}

export default LogIn;