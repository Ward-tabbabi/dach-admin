import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link to="adminDash">
        <h1>Admin-Dahbord</h1>
      </Link>
      <input type="text" placeholder="RECHERCHE" />
      <ul>
        <li>HOME</li>
        <li>CONTACT</li>
        <li>ABOUT US</li>
      </ul>
    </div>
  );
};

export default Navbar;
