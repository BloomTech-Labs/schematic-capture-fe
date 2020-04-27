import React from "react";

import { StyledNav } from "./Styles";

const Footer = () => (
  <StyledNav>
    <a
      href="http://itunes.apple.com/app/"
      style={{ paddingRight: "1.5rem" }}
      rel="noopener noreferrer"
      target="_blank"
    >
      Download on the App Store
    </a>
    <div>&copy; 2020, Schematic Capture</div>
  </StyledNav>
);

export default Footer;
