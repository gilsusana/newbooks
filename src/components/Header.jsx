import React from 'react'
import logoLibrary from '../assets/img/ciba-logo.png'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='headerContainer'>
      <img src={logoLibrary} alt="logo library" className='logo-libr' />
    <div className='nav-text'>
      <h1 className='bar-text'>¡Empodérate leyendo!</h1>
      <nav className='headerLine'>
       <ul className= "nav">
         <li className="var-menu-btn">
           <Link to='/bookspage'className="nav-link">Home</Link>
         </li>
         <li className="var-menu-btn">
           <Link to='/newBook' className="nav-link" >Create</Link>
         </li>
        <li className="dropdown">
           <p>Registration</p>
        <div className="dropdown-content">
           <p>Sign In</p>
           <p>LogIn</p>
        </div>
        </li>
      </ul>
    </nav>     
   </div>
</div>  
)
}

export default Header