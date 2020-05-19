import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";

const toolbar = () => {
  return (
    <nav>
      <div className="logo">
        <h3>WeatherAPP</h3>
      </div>
      <ul className="nav-links">
        <li>
          <Link className="nav-link" to="/">
            aktualna pogoda
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/fiveday">
            pogoda szczegółowa
          </Link>
        </li>
      </ul>
      <div className="burger">
        <div className="1"></div>
        <div className="2"></div>
        <div className="3"></div>
      </div>
    </nav>
  );
};

export default toolbar;
