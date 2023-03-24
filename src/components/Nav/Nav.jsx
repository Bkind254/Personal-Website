import React from "react";
import "./Nav.css";
import { GoHome } from "react-icons/go";
import { AiFillAppstore } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <GoHome />
      </a>

      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <AiFillAppstore />
      </a>

      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
