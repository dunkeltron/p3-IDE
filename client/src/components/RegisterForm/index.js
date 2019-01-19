import React from "react";
function RegisterForm({handleInputChange,handleFormSubmit}) {

    return(
        <form action="/api/auth/register" method="POST">
                <div className="form-group">
                    <label for="name">Full Name</label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        onChange = { handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="userName">User Name</label>
                    <input
                        type="userName"
                        id="userName"
                        name="userName"
                        className="form-control"
                        placeholder="Enter User Name"
                        onChange = { handleInputChange}
                    />
                </div>

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
                        placeholder="Create Your Password"
                        onChange = { handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label for="password2">Confirm Password</label>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        className="form-control"
                        placeholder="Confirm Your Password"
                        onChange = { handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleFormSubmit}>
                    Register
                </button>
                
        </form>
    )


}
export default RegisterForm;