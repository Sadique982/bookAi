import React from "react";
import { Link } from "react-scroll";
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
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="m-2 hover:text-accentColor"
        >
          Features
        </Link>

        <Link
          to="howItWorks"
          smooth={true}
          duration={500}
          className="m-2 hover:text-accentColor block"
        >
          How it Works
        </Link>

        <Link
          to="roadmap"
          smooth={true}
          duration={500}
          className="m-2 hover:text-accentColor"
        >
          Roadmap
        </Link>

        <Link
          to="api"
          smooth={true}
          duration={500}
          className="m-2 hover:text-accentColor"
        >
          API
        </Link>

        <Link
          to="price"
          smooth={true}
          duration={500}
          className="m-2 hover:text-accentColor"
        >
          Price
        </Link>

        <Link
          to="models"
          smooth={true}
          duration={500}
          className="m-2 hover:text-accentColor"
        >
          Models
        </Link>

        <a href="#" className="auth-button bg-gradient1">
          Login / Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
