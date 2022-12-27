import React from 'react'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate = useNavigate();

  const handleChange =() =>{
     navigate("/gameList");
  }

  return (
    <select onChange={handleChange} style={{border:"1px solid black", width:"300px", height:"50px", fontSize:"20px", margin:"30px 0px 0px 550px"}}>
       <option>Select Payment Method</option>
       <option>Pay using UPI</option>
       <option>Pay Cash</option>
       <option>Pay Online</option>
       <option>Debit Card</option>
    </select>
  )
}

export default Payment