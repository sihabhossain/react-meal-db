import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>A named Meals</h2>
      </div>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Info</a>
        <a href="#">Feedback</a>
      </div>
    </div>
  );
};

export default Header;
