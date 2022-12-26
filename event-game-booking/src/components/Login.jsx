import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    let credData = JSON.parse(localStorage.getItem("AuthInfo"))

    // console.log(credData.password, credData.email);

    const HandleFormSubmit = () => {
         if(credData.email===email && credData.password===password)
         {
            alert("Login Successfully");
            navigate("/");
         }else{
            alert("Please Fill Valid Information");
         }
         setEmail("");
         setPassword("");
    }

  return (
    <div>
        <form onSubmit={HandleFormSubmit}>
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
                <Link to="/Signup"><span>Sign up here</span></Link>
            </div>
        </form>
    </div>
  )
}

export default Login