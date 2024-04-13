import React from "react";
import "./Navbar.css";
import {NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <>
    <div class="bg1">
    <div id="sq"></div>
    <div id="cr"></div>
    <div id="sq"></div>
  </div>
  <div class="bg2">
    <div id="sq"></div>
    <div id="cr"></div>
    <div id="sq"></div>
  </div>
      <nav className="navbar bg-gray-950 py-2 font-semibold">
        <div className="container-fluid">
          <NavLink to="/Home" className="navbar-brand">
            DIGITAL <i>Protfollio</i>
          </NavLink>
        </div>
        <div className="flex">
            <ul className="flex md:flex md:flex-grow flex-row-reverse space-x-1">
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
                    <NavLink>Contact</NavLink>
                </li>
            </ul> 
        </div>
      </nav>
    </>
  );
}

