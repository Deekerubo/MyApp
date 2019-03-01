import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function TopHeader() {
  return (
    <header style={headerStyle}>
      <NavLink style={linkStyle} to="/">
        Home
      </NavLink>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
    color: "#fff",
    textDecorations: "none",
    size: "50px"
};

export default TopHeader;