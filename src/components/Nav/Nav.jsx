import React, { useState } from "react";
import "./Nav.css";

import { AiFillHome } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

const Nav = () => {
  const [active, setActive] = useState("/#");

  return (
    <nav>
      <a href="/#" onClick={() => setActive("/#")}>
        <AiFillHome size={25} />
      </a>
      <a href="#about" onClick={() => setActive("#about")}>
        <FaInfo size={25} />
      </a>
      <a href="#experience" onClick={() => setActive("#experience")}>
        <MdWorkHistory size={25} />
      </a>
      <a href="#portfolio" onClick={() => setActive("#portfolio")}>
        <FaBook size={25} />
      </a>
      <a href="#contact" onClick={() => setActive("#contact")}>
        <GrContact size={25} />
      </a>
    </nav>
  );
};

export default Nav;
