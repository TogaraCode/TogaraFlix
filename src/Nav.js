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
<<<<<<< HEAD
        src="./togaraNerdsIcon.png"
        href="./togaraNerdsIcon.png"
        alt="TogaraFlix Logo"
=======
        src="https://upload.wikimedia.org/wikipedia/commons/o/"
        alt="Netflix Logo"
>>>>>>> 6fe58118368bf7a63a8a3acc53d7be94670b44fd
      />

      <img
        className="nav__avatar"
        src="./togaraNerdsIcon.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
