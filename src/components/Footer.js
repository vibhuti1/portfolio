import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a 
          href="https://www.linkedin.com/in/vibhuti-gajinkar" 
          target='_blank'
          rel="noopener noreferrer"
          aria-label='LinkedIn'>
            <LinkedInIcon />
            </a>
      </div>
    </div>
  );
}

export default Footer;