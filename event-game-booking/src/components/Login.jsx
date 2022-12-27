import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import styled from "../styles/login.module.css"

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);

    let credData = JSON.parse(localStorage.getItem("AuthInfo"))

    // console.log(credData.password, credData.email);

    const HandleFormSubmit = () => {
         if(credData.email===email && credData.password===password)
         {
              setAuth(true);
              localStorage.setItem("cred", auth);
              alert("Login Successfully");
              navigate("/gameList");
         }else{
            setAuth(false);
            alert("Please Fill Valid Information");
         }
         setEmail("");
         setPassword("");
    }

  return (
    <div className={styled.mainDiv}>
        <form className={styled.form} onSubmit={HandleFormSubmit}>
            <h1>Login Form</h1>
            <div>
                <label>Username : </label>
                <input type="email" value={email} placeholder='Enter your username' onChange={(e) => setEmail(e.target.value)}  />
                <br/>
                <label>Password : </label>
                <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  />
                <br/>
                <button type="submit">Login</button>
                <br/>
                {/* <Link to="/Signup"><span>Click here for Register</span></Link> */}
                <p>New user ? {<a href='./Signup'>Click here for Register</a>}</p>
            </div>
        </form>
    </div>
  )
}

export default Login