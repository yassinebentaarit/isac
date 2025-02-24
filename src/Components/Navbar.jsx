import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <Link to='/'> Home</Link>
      <br/>
      <Link to='/login'> Login</Link>
      <br/>
      <Link to='/register'>Register</Link>
      <br/>
      <Link to='/loginRegister'>loginRegister</Link>
      <br/>
      <br/>
      <br/>
      <br/>
    </nav>
  )
}

export default Navbar