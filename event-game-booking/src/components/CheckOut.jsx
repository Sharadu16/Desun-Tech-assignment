import React, { useState } from 'react'
import styled from  "../styles/check.module.css";
import Calender from './Calender';
import {Link} from "react-router-dom";

const CheckOut = () => {
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState(0);
  const [dest, setDest] = useState(0);
  const [charge, setCharge] = useState(0);

  let name = localStorage.getItem("title");
  // console.log(name);

  const handleSubmit = (e) =>{
     e.preventDefault();
     let distance = (center+dest);
     setCharge(distance*50);
     setTitle("");
     setPhone("");
  }

  const changeCenter = (e) =>{
    setCenter(e.target.value);
    console.log(center)
  }
  const changeDestination = (e) =>{
    console.log(dest);
    setDest(e.target.value);
  
  }

  return (
    <div className={styled.mainDiv}>
      <form onSubmit={handleSubmit}>
        <h1>Please fill the form</h1>
         <input value={name} type="text" />
         <input type="number" placeholder='enter your phone number' onChange={(e) =>setPhone(e.target.value)} />
         <input type="text" placeholder='enter your name' onChange={(e) =>setTitle(e.target.value)} />
         <div className={styled.selectDiv}>
          <select value={center} onChange={changeCenter}>
            <option value="">Center name</option>
            <option value="0">Banglore</option>
          </select>
          <select value={dest} onChange={changeDestination}>
            <option value="">Destination</option>
            <option value="60">Hyderabad</option>
            <option value="100">Chennai</option>
            <option value="600">Kolkata</option>
          </select>
         </div>
         <Calender/>
         <button type="submit">Submit Form</button>
      </form>
      <h3>{`you will have to pay : ${charge}`}</h3>
      <Link to="/payment"><p>Click here to pay</p></Link>
    </div>
  )
}

export default CheckOut