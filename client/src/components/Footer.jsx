import React from "react";
import "../CompStyle/footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/Assets/logo.svg" alt="Nexcent Logo" />
            <h2>Nexcent</h2>
          </div>
          <p>Empowering communities through efficient digital management.</p>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:hello@nexcent.com">hello@nexcent.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 234 567 890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">© 2025 Nexcent. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
