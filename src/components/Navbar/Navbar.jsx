import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to='/Home'>Home</Link>
      </nav>
    </>
  );
}

export default Navbar;
