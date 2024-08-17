import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer p-14 mt-24 text-center">
      <p>© 2024 BookAI. All rights reserved.</p>
      <div className="flex justify-center flex-wrap">
        <a href="#" className="mx-5 text-textSecondary min-w-28">
          Terms of Service
        </a>
        <a href="#" className="mx-5 text-textSecondary min-w-28">
          Privacy Policy
        </a>
        <a href="#" className="mx-5 text-textSecondary min-w-28">
          Contact Us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
