// components/Header.js
import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".navbar") &&
        !event.target.closest(".hamburger")
      ) {
        closeMenu();
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Icono de sándwich */}
      </div>
      <nav className={`navbar ${isOpen ? "show" : ""}`}>
        <div className="logo"></div>
        <a href="#home" className="nav-item">
          <i className="icon-home nav-icon"></i> Acerca de mí
        </a>
        <a href="#resume" className="nav-item">
          <i className="icon-graduation nav-icon"></i> Experiencia
        </a>
        <a href="#work" className="nav-item">
          <i className="icon-layers nav-icon"></i> Trabajo
        </a>
        <a href="#contact" className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail nav-icon"
          >
            <path d="M4 4h16v16H4z"></path>
            <path d="M22 6l-10 7L2 6"></path>
          </svg>{" "}
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Header;
