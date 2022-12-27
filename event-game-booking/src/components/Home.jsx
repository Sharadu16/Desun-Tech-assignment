import React from 'react'
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  const gotoSign =() =>{
     navigate("/Signup");
  }

  return (
    <div style={{border:"1px solid black", width:"400px", height:"500px",marginLeft:"500px",textAlign:"center"}}>
      <h1 style={{textAlign:"center"}}>First Login Yourself</h1>
      <img style={{borderRadius:"0px"}} src='https://img.freepik.com/premium-vector/pro-player-esport-game-logo-design_177315-94.jpg' alt="logo" />
      <p>This is a event booking plateform. here you can easily Book any program for your birthday party or any events. </p>
      <button onClick={gotoSign}>Click here to Visit website</button>
    </div>
  )
}

export default Home