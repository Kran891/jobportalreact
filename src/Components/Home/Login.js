import React from "react";
import './styles.css'
function Login(props){
    function LoginUser(){

    }
    return (
        <form onSubmit={LoginUser} className="login">
          <div className="field">
            <input type="text" name="Email" placeholder="Email Address" required />
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            New User <a href="#signup" onClick={()=>{props.handleChange()}}>Signup now</a>
          </div>
        </form>
      );
}
export default Login;