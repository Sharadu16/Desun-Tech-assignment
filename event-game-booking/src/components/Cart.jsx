import React from 'react'
import styled from "../styles/cart.module.css"
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const navigate = useNavigate();
  let data = JSON.parse(localStorage.getItem("data"));
  const addToCheck = (name) => {
    localStorage.setItem("title",name);
     navigate("/checkOut");
  }
  const deleteItem = (id) => {
    console.log("deleted");
    
  }

  return (
    <div className={styled.container}>
      {
            data.length>0 && data.map((item,index) => {
                return <div className={styled.card} key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p className={styled.about}>{item.about}</p>
                    <button onClick={() => addToCheck(item.name)}>CheckOut</button>
                    <button onClick={() => deleteItem(item.id)}>Remove</button>
                </div>
            })
        }  
    </div>
  )
}

export default Cart