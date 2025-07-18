import React, { useState } from "react";
import "../CompStyle/Navbar.scss";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleRegisterClick = () => {
    navigate("/register");
  };
  return (
    <nav className="navbar">
      <div className="nav_content">
        <div className="nav_body">
          <div className="logo">
            <Logo className="logoImg" />
            <p>Nexcent</p>
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleMenu();
            }}
          >
            <span />
            <span />
            <span />
          </div>

          <div className={`items ${menuOpen ? "active" : ""}`}>
            <div className="content">Home</div>
            <div className="content">Feature</div>
            <div className="content">Community</div>
            <div className="content">Blog</div>
            <div className="content">Pricing</div>
          </div>

          <button className="button" onClick={handleRegisterClick}>
            Register Now
            <span>
              <FaLongArrowAltRight className="icon" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
