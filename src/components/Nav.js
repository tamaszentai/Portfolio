import React from "react";
import "./Nav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = (props) => {
  return (
    <nav className={props.isNav ? 'nav' : 'nav closed'} onClick={props.navToggleHandler}>
      <ul>
        <li>
          <AnchorLink href="#home" onClick={props.navToggleHandler}>HOME</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#portfolio" >PORTFOLIO</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">ABOUT</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">CONTACT</AnchorLink>
        </li>
      </ul>
      <i className={props.isNav ? "fa fa-caret-left" : "fa fa-caret-right"}></i>
    </nav>
  );
};

export default Nav;
