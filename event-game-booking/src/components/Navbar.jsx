import React from 'react'
import styled from "../styles/navbar.module.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styled.navbar}>
      <div>
        <Link to="/"><p>Home</p></Link>
      </div>
      <div>
        <Link to="/checkOut"><p>CheckOut</p></Link>
        <Link to="/cart"><p>Cart</p></Link>
        <Link to="/gameList"><p>Games</p></Link>
      </div>
      <div>
        <Link to="/login"><p>Login</p></Link>
      </div>
        
    </div>
  )
}

export default Navbar