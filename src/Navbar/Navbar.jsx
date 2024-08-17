import React from "react";
import Logo from "/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="flex flex-col flex-wrap md:flex-row justify-between">
      <div className="Navbar m-2">
        <div className="flex flex-wrap items-center text-2xl font-black">
          <div className="logoIcon w-8 h-8 rounded-full mr-3 bg-gradient1"></div>
          <img src={Logo} width={45} alt="Book Ai Logo" />
          BookAi
        </div>
      </div>

      <nav className="flex flex-row items-center flex-wrap font-light">
        <a href="#" className="m-2 hover:text-accentColor block">
          Features
        </a>
        <a href="#" className="m-2 hover:text-accentColor block">
          How it Works
        </a>
        <a href="#" className="m-2 hover:text-accentColor">
          Roadmap
        </a>
        <a href="#" className="m-2 hover:text-accentColor">
          API
        </a>
        <a href="#" className="m-2 hover:text-accentColor">
          Price
        </a>
        <a href="#" className="m-2 hover:text-accentColor">
          Models
        </a>
        <a href="#" className="auth-button bg-gradient1">
          Login / Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
