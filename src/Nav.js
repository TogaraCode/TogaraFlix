import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src
        href="togaraNerdsIcon.png"
        alt
        href="togaraNerdsIcon.png"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/12401155"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
