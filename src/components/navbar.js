import React ,{ useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./main.css"





function Navbar() {
  
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('header-shadow');
  } else {
    header.classList.remove('header-shadow');
  }
});


  return (
    <header className="Nav" id="header">
       <p><b>MY PORTFOLIO</b></p>
      <nav ref={navRef}>
        
      
        
                  
       
        

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <a href="mailto:harikowshik.molugu@gmail.com">
          <b style={{color:"yellow"}}>Contact me</b>
        </a>
        <a href="https://github.com/HarikowshikMolugu">
          <img className="social-icon" src="/images/github.png" />
        </a>
        <a href="https://www.linkedin.com/posts/hari-kowshik-molugu-56042923b_task3-gripjuly2022-gripjuly2022-activity-6955454748271493120-MnRe?utm_source=share&utm_medium=member_android">
          <img className="social-icon" src="/images/linkedin.png" />
        </a>
       
        
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
