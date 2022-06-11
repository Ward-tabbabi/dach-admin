import React from "react";
import { Link } from "react-router-dom";
import Carte from "./espaceUtilisateur/Carte";
import Courbe from "./espaceUtilisateur/Courbe";
const AdminDash = () => {
  return (
    <div className="dash-container">
      <Courbe />
      <Carte />
      <div className="lists">
        <h1>control unit</h1>
        <Link to="/user">
          <h2>User-list</h2>
        </Link>
        <Link to="/cours">
          <h2>lessons-list</h2>
        </Link>
        <Link to="/quiz">
          <h2>Quiz-list</h2>
        </Link>
      </div>
      <h1>profile</h1>
      <div className="buttons">
        <Link to="/login">
          <button>sign in</button>
        </Link>

        <Link to="/login">
          <button>sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDash;
