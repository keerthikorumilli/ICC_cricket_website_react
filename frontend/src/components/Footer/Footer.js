import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return ( 
      <div className="Footer">
        <p className="copy-right-para">
          <img
            src="https://logowik.com/content/uploads/images/2023-icc-mens-cricket-world-cup7782.logowik.com.webp"
            alt="github-img"
            className="github-img"
          />
          2023&copy;Boundaries Beyond Boundaries 🏏 | Your Ultimate Cricket Destination
        </p>
        
      </div>
    );
  }
}

export default Footer;
