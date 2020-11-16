import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        All Created Characters
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add">
        Create New Character
      </Link>
    </nav>
  );
}

export default Nav;