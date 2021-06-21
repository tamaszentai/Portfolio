import React from "react";
import "./Header.css";
import HeroImg from "../assets/Tamas.jpg";

const Header = () => {
  return (
    <section id="home">
      <div className="header-wrapper">
        <div className="header-text-container">
          <h1>TAMAS ZENTAI</h1>
          <h4>Full Stack Web Developer</h4>
        </div>
        <div className="header-image-container">
          <img src={HeroImg} alt="Tamas Zentai" />
        </div>
      </div>
    </section>
  );
};

export default Header;
