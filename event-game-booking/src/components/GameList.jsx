import React, {useState, useEffect } from 'react'
import styled from "../styles/game.module.css";
import axios from "axios";

const GameList = () => {
   const [data, setData] = useState([]);
   var item = [];

   const getData =() => {
      axios.get(`https://6322eabe362b0d4e7dd65524.mockapi.io/gameList`).then((res)=>{
          setData(res.data);
      }).catch((err)=>{
         console.log(err);
      })
   }

   useEffect(() =>{
    getData();
   },[])

    const addCart = (data) =>{
         //  console.log(data);
          item.push(data);
          localStorage.setItem("data", JSON.stringify(item));
   }

  return (
     <div className={styled.container}>
        {
            data.map((item,index) => {
                return <div className={styled.card} key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p className={styled.about}>{item.about}</p>
                    <button onClick={() => addCart(item)}>Add To Cart</button>
                </div>
            })
        }
     </div>
  )
}

export default GameList;