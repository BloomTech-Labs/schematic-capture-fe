import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "../../../shared/components/layout/SignedInLinks";
import SignedOutLinks from "../../../shared/components/layout/SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="basenav">
      <div className="container">
        <Link to="/" className="brand-logo">
          Schematic Capture
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
