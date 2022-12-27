import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "../styles/signup.module.css"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  const HandleFormSubmit = (e) => {
     let cred = {};
      e.preventDefault();
      if(!email || !password){
        alert("please fill all credential")
      }
      else{
        cred = {
            email : email,
            password : password
        }
          localStorage.setItem("AuthInfo", JSON.stringify(cred));
        //   localStorage.setItem("Password", JSON.stringify(password));
        //   console.log("save to local storage");
          alert("You have signed-up successfully")
          navigate("/login");
      }
      setEmail("");
      setPassword("");
  }
 
  return (
    <div className={styled.mainDiv}>
        <form className={styled.form} onSubmit={HandleFormSubmit}>
            <h1>Sign-up Form</h1>
                <label>Username : </label>
                <input type="email" value={email} placeholder='Enter your username' onChange={(e) => setEmail(e.target.value)}  />
                <br/>
                <label>Password : </label>
                <input type="password" value={password} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  />
                <br/>
                <button type="submit">Register</button>
                <br/>
                <p>Already Registered : {<a href='./Login'>Login here</a>}</p>
        </form>
    </div>
  )
}

export default Signup