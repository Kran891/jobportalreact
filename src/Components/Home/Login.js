import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
import { LoginUserData } from "./UserServer";
function Login(props){
    var navigate=useNavigate();
    async function LoginUser(event){ 
   setTimeout(() => {
    if(localStorage.role==="student")
   navigate("/student");
  else if(localStorage.role==="admin")
  navigate("/admin");
  else if(localStorage.role==="company")
  navigate("/company");
   }, 3000);
   event.preventDefault();
   await  LoginUserData();
   
    }
    function handleChange(event){
      const{name,value}=event.target; console.log(name,value);
      setLoginUser(previousValue=>{return{
        ...previousValue,
        [name]:value
      }})
    }
    const [loginUser,setLoginUser ]=useState({Email:"",Password:""});
    return (
        <form onSubmit={LoginUser} className="login">
          <div className="field">
            <input onChange={handleChange} type="text" name="Email" placeholder="Email Address" required value={loginUser.Email } />
      
          </div>
          <div className="field">
            <input onChange={handleChange} type="password" name= "Password" placeholder="Password" required value={loginUser.Password} />
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