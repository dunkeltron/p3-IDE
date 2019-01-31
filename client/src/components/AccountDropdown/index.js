
    import React from "react";
    import {Link} from "react-router-dom";
    function AccountDropdown(props,{_logout}) {
    if(props.currentUser){

    
        return(  
    <ul className="navbar-nav ml-auto mr-0 dropdown-menu-left">
      
      
        <li className="nav-item   dropdown  ">
        {console.log(props)}
            <a className="nav-link dropdown-toggle  " href={"/"+props.currentUser.username} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.currentUser.username}
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={"/"+props.currentUser.username}>Account</Link>
            <Link className="dropdown-item" to={"/settings/"+props.currentUser.username}>Edit Profile</Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item " onClick={props._logout}> Logout </Link>
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