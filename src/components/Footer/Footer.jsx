import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo" rel="noreferrer">
        BKIND
      </a>

      <ul className="permalinks">
        <li>
          <a href="#" rel="noreferrer">
            Home
          </a>
        </li>

        <li>
          <a href="#experience" rel="noreferrer">
            Experience
          </a>
        </li>

        <li>
          <a href="#portfolio" rel="noreferrer">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://twitter.com/Bkind___/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-selim-71b90a236/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://Instagram.com/bkind____/"
          target="_blank"
          rel="noreferrer"
        >
          <CgInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
