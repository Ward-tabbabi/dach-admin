import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h1>contact</h1>
        <h3>facebook</h3>
        <h3>Linkedin</h3>
        <h3>Twiter</h3>
        <h3>Youtube</h3>
      </div>
      <div className="about_us">
        <h1>about_us</h1>
        <p>
          In this space, parents, teachers and
          <br /> children participate in creating
          <br />
          an educated generation capable of all odds
        </p>
      </div>
      <div className="login">
        <h1>Rejister</h1>
        <Link to="/login">
          <button>login</button>
        </Link>
        <Link to="/login">
          <button>logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
