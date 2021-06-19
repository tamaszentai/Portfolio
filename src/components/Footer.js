import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/tamas-zentai/" target="_blank"><i className="fa fa-linkedin"></i></a>
        </li>
        <li>
            <a href="https://github.com/tamaszentai" target="_blank"><i className="fa fa-github"></i></a>
        </li>
      </ul>
      <p>© 2020 Tamas Zentai</p>
    </footer>
  );
};

export default Footer;
