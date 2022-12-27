import React, { useState } from 'react'
import styled from  "../styles/check.module.css";
import Calender from './Calender';

const CheckOut = () => {
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [center, setCenter] = useState("");
  const [dest, setDest] = useState("");
  const [data, setData] = useState({});

  let name = localStorage.getItem("title");
  // console.log(name);

  const handleSubmit = (e) =>{
     e.preventDefault();
     setData({
        name : title,
        phone : phone,
        center : center,
        destination : dest,
     })
     localStorage.setItem("formData", JSON.stringify(data));
  }


  console.log(title,phone);

  const changeCenter = (e) =>{
    setCenter(e.target.value);
  }
  const changeDestination = (e) =>{
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
            <option value="banglore">Banglore</option>
          </select>
          <select value={dest} onChange={changeDestination}>
            <option value="">Destination</option>
            <option value="banglore">Banglore</option>
            <option value="chennai">Chennai</option>
            <option value="kolkata">Kolkata</option>
          </select>
         </div>
         <Calender/>
         <button type="submit">Submit Form</button>
      </form>
    </div>
  )
}

export default CheckOut