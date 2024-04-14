import React,{useState} from "react";
import "./Navbar.css";
import {Link, NavLink } from "react-router-dom";

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
    <div className="bg1">
    <div id="sq"></div>
    <div id="cr"></div>
    <div id="sq"></div>
  </div>
  <div className="bg2">
    <div id="sq"></div>
    <div id="cr"></div>
    <div id="sq"></div>
  </div>
      <nav className="navbar bg-gray-950 px-4 py-5 text-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-2xl">
            DIGITAL <i>Protfollio</i>
          </Link>
        </div>
        <div className="menu" onClick={()=>{
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="flex">
            <ul className={menuOpen? "open":""}>
                <li>
                    <NavLink to='/About'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/ProSkill'>Pro.Skill</NavLink>
                </li>
                <li>
                    <NavLink to='/Edu'>Education</NavLink>
                </li>
                <li>
                    <NavLink to='/Contact'>Contact</NavLink>
                </li>
            </ul> 
        </div>
      </nav>
    </>
  );
}

