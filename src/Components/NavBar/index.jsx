import "./Navbar.style.css";
import Footer from "/src/Components/Footer/Footer";
import { useState } from 'react';

import { NavLink } from "react-router-dom";

const NavBar = () => {

  const [showNavbar, setShowNavbar] = useState(true)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  } 
  const title = "<Rokib the Dev/>";

  return (
  <>
    <nav>
    <div className="nav-sidebar" onClick={handleShowNavbar}>
        <i className="fa-solid fa-bars fa-2x"></i>
        </div>
        {showNavbar && (
          <>
          <div className= "nav-body">
        <div className="nav-logo">
          <h2>{title}</h2>
        </div>
        <div className="nav-menu">
          <ul>
            <li><NavLink className="nav-link" to={"/"}> <i className="fa-solid fa-house fa-icon"></i>Home</NavLink></li>
            <li><NavLink className="nav-link" to={"/about"}> <i className="fa-solid fa-address-card fa-icon"></i>About</NavLink></li>
            <li><NavLink className="nav-link" to={"/project"}> <i className="fa-solid fa-link fa-icon"></i>Project</NavLink></li>
            <li><NavLink className="nav-link" to={"/contact"}> <i className="fa-solid fa-address-book fa-icon"></i>Contact</NavLink></li>
          </ul>
        </div>
        <Footer/>
   
        <i onClick={()=>{setShowNavbar(!showNavbar)}}  className="fa-solid fa-xmark"></i>

        
        {/* <i class="fa-solid fa-xmark"></i> */}
      </div>
          </>
        )}

    
    </nav>
  </>
  
  );
};

export default NavBar;
