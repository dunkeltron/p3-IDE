import React from "react";
function LogInForm({handleInputChange,handleFormSubmit}) {

    return(
        <form action="/api/auth/login" method="POST">
          <div className="form-group">
            <label for="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                onChange = { handleInputChange}
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter Password"
                onChange = { handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick = {handleFormSubmit} >
            Login
          </button>
      </form>
    )
}
export default LogInForm