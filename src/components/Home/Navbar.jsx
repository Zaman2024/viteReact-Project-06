import React from "react";
import "./Navbar.css";
import {NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink to="/Home" className="navbar-brand">
            DIGITAL <i>Protfollio</i>
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul>
                <li>
                    <NavLink>About</NavLink>
                </li>
                <li>
                    <NavLink>Professional Skill</NavLink>
                </li>
                <li>
                    <NavLink>Education</NavLink>
                </li>
                <li>
                    <NavLink>COntact</NavLink>
                </li>

            </ul>
            
        </div>
        
      </nav>
    </>
  );
}

