import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="grid"> */}

      <ul className="social">
        <li>
          <a href="https://github.com/mbsillah" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MusaFGC" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mbsillah/" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className="copywright">&copy; Copyright 2020 Musa Sillah</p>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
