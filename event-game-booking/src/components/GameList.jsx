import React from 'react'
import styled from "../styles/game.module.css"

const GameList = () => {
    const data = [
        {
           id : 1,
           name : "Hi Sticker",
           image : "https://bigfun.com.au/wp-content/uploads/high-striker-460w.jpg",
           about : "A high striker, also known as a strength tester, or strongman game, is an attraction used in funfairs, amusement parks, fundraisers, and carnivals.  It operates by utilizing the lever where one end holds a puck attached to the tower and the other end is struck by the person or contestant using a hammer or mallet."
        },
        {
            id : 2,
            name : "Punch Game",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn3h5Pc1JWRYf9Su-gxO_SBOv18sFJY-TnojyzO1E3nCJ8O_hWj6_Zg1i6xqXxDj7kqsE&usqp=CAU",
            about : "The punching game is when you and your opponent choose a part of the body, usually the upper arm, and you punch each other in the same spot as hard as you can until one of you quits."
         },
         {
            id : 3,
            name : "Bow & Arrow",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQXtF7INzzi22XaxyKeNR8-TGdMvw0MAGnpjqCemHImW6TRP4&s",
            about : "Bow and Arrow is an arcade game where the player takes on a role of a skilled bowman, on a quest to challenge the dreaded Black Archer. On most levels, the goal is either to successfully hit specified moving targets or to survive a wave of dangerous flying objects, which can be avoided or shot down."
         },
         {
            id : 4,
            name : "Catch Fish",
            image : "https://play-lh.googleusercontent.com/l7YeoPKgVPdSmtPbAgzvQdaa5Qvbuh1pD0JAer_U6wA5w_zsgInLuwemWmh_v15Ymw=w240-h480-rw",
            about : "Catch the Fish is a fun fishing game in which you have to pull little fish out of the water to form the given words. First choose a difficulty level, depending on whether you are a beginner or an advanced fisherman. Then get into your boat and cast the fishing hook to collect as many points as possible."
         }
    ];
   var item = [];
    const addCart = (data) =>{
          console.log(data);
          item.push(data)
          localStorage.setItem("data", JSON.stringify(item))
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