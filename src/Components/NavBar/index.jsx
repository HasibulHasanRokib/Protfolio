import "./Navbar.style.css"
import Footer from "/src/Components/Footer/Footer";

import { NavLink } from 'react-router-dom'


const NavBar = ({showNavbar}) => {
const title="<Rokib the Dev/>"




  return (

    <>

       
{showNavbar && (
  <>
  <nav>
      <div className="container">
      
      <h1 className="navbar-brand">{title}</h1>

        <div >
        <div className='navbarNav'>
        
         
          <ul className="navbar-nav" >
            <li className="nav-item">
              <NavLink to={"/"}  className="nav-link"><i className="fa-solid fa-house fa-icon"></i>Home</NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link" ><i className="fa-solid fa-address-card fa-icon"></i>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/project"} className="nav-link" ><i className="fa-solid fa-link fa-icon"></i>Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className="nav-link" ><i className="fa-solid fa-address-book fa-icon"></i>Contact</NavLink>
            </li>

          </ul>
          </div>
       


        </div>
      

      </div>
      <Footer/>
    </nav>
  </>
)}

  
 

    </>
  )
}

export default NavBar
