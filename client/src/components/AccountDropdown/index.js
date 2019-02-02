
    import React from "react";
    import {Link} from "react-router-dom";
    function AccountDropdown(props,{_logout}) {
    if(sessionStorage.getItem("currentUser") || props.currentUser){

    
        return(  
        <ul className="navbar-nav ml-auto mr-0 dropdown-menu-left">
        {console.log(JSON.parse(sessionStorage.getItem("currentUser")))}
        
            <li className="nav-item   dropdown  ">
            <a className="nav-link dropdown-toggle  " href={"/"+JSON.parse(sessionStorage.getItem("currentUser")).username} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {JSON.parse(sessionStorage.getItem("currentUser")).username}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={"/"+JSON.parse(sessionStorage.getItem("currentUser")).username}>Account</Link>
            <Link className="dropdown-item" to={"/settings/"+JSON.parse(sessionStorage.getItem("currentUser")).username}>Edit Profile</Link>
            <div className="dropdown-divider"></div>
            <Link to="/" className="dropdown-item " > Logout </Link>
            </div>
        </li>    
    </ul>
        )
    }
    else{
        return(  
            <ul className="navbar-nav ml-auto mr-0 dropdown-menu-left">
              
              
                <li className="nav-item     ">
                    <Link className="nav-link  " to="/" id="navbarDropdown" role="button"  aria-haspopup="true" aria-expanded="false">
                    Log In
                    </Link>
                </li>    
            </ul>
                )
    }
    }

        export default AccountDropdown