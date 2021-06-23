import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/tamas-zentai/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
        </li>
        <li>
            <a href="https://github.com/tamaszentai" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        </li>
      </ul>
      <p>© 2021 Tamás Zentai</p>
    </footer>
  );
};

export default Footer;
