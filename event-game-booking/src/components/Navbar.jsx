import React from 'react'
import styled from "../styles/navbar.module.css";
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={styled.navbar}>
        <Link to="/login"><p>Login</p></Link>
    </div>
  )
}

export default Navbar